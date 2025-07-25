import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema de validação para o formulário de contato
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados recebidos
    const validatedData = contactSchema.parse(body);
    
    // Aqui você integraria com seu provedor de email
    // Por exemplo: SendGrid, Resend, Nodemailer, etc.
    
    // Simulação de envio de email
    console.log('📧 Novo contato recebido:', {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      message: validatedData.message,
      timestamp: new Date().toISOString()
    });
    
    // Em produção, você enviaria um email real aqui
    // await sendEmail({
    //   to: 'contato@galtra.com.br',
    //   subject: `Novo contato de ${validatedData.name}`,
    //   html: `
    //     <h2>Novo contato do site</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Empresa:</strong> ${validatedData.company || 'Não informado'}</p>
    //     <p><strong>Telefone:</strong> ${validatedData.phone || 'Não informado'}</p>
    //     <p><strong>Serviço:</strong> ${validatedData.service || 'Não especificado'}</p>
    //     <p><strong>Orçamento:</strong> ${validatedData.budget || 'A definir'}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `
    // });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('❌ Erro ao processar contato:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dados inválidos',
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

// Tratar método GET para retornar info da API
export async function GET() {
  return NextResponse.json({
    message: 'API de contato da Galtra',
    endpoints: {
      POST: '/api/contact - Enviar mensagem de contato'
    }
  });
}
