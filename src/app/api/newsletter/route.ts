import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema de validação para newsletter
const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados recebidos
    const validatedData = newsletterSchema.parse(body);
    
    // Aqui você integraria com seu provedor de newsletter
    // Por exemplo: Mailchimp, ConvertKit, Brevo, etc.
    
    console.log('📧 Nova inscrição na newsletter:', {
      email: validatedData.email,
      name: validatedData.name,
      timestamp: new Date().toISOString()
    });
    
    // Em produção, você adicionaria o email à lista
    // await addToNewsletter({
    //   email: validatedData.email,
    //   name: validatedData.name || 'Não informado',
    //   tags: ['site-galtra', 'newsletter']
    // });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email cadastrado com sucesso! Você receberá nossos insights em breve.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('❌ Erro ao processar newsletter:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email inválido',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro interno do servidor. Tente novamente.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'API de newsletter da Galtra',
    endpoints: {
      POST: '/api/newsletter - Inscrever na newsletter'
    }
  });
}
