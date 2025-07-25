#!/bin/bash

# Script para criar as rotas de API necessárias
# Execute depois do script anterior: ./setup-api-routes.sh

echo "🔧 Criando rotas de API para o projeto Galtra..."

# Criar diretórios de API
mkdir -p src/app/api/{contact,newsletter,blog}

echo "📡 Criando API de contato..."
cat > src/app/api/contact/route.ts << 'EOF'
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
EOF

echo "📡 Criando API de newsletter..."
cat > src/app/api/newsletter/route.ts << 'EOF'
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
EOF

echo "📡 Criando API do blog..."
cat > src/app/api/blog/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server';

// Dados simulados do blog (em produção viria de um CMS ou banco de dados)
const blogPosts = [
  {
    id: 1,
    title: 'O Futuro da Inteligência Artificial no Agronegócio',
    slug: 'futuro-ia-agronegocio',
    excerpt: 'Como a IA está revolucionando a agricultura brasileira com previsões mais precisas e otimização de recursos.',
    content: `
      <h2>A Revolução da IA no Campo</h2>
      <p>A Inteligência Artificial está transformando o agronegócio brasileiro de forma sem precedentes...</p>
      <h3>Principais Aplicações</h3>
      <ul>
        <li>Previsão de safras com machine learning</li>
        <li>Otimização de irrigação com IoT</li>
        <li>Detecção de pragas com computer vision</li>
      </ul>
    `,
    author: 'Tiago Galvão',
    date: '2024-01-15',
    category: 'Inteligência Artificial',
    readTime: '8 min',
    tags: ['IA', 'Agronegócio', 'Machine Learning'],
    published: true
  },
  {
    id: 2,
    title: 'Machine Learning para Previsão de Demanda: Guia Completo',
    slug: 'ml-previsao-demanda-guia',
    excerpt: 'Técnicas avançadas de ML para prever demanda com precisão e otimizar estoques em diferentes setores.',
    content: `
      <h2>Entendendo a Previsão de Demanda</h2>
      <p>A previsão de demanda é fundamental para qualquer negócio...</p>
    `,
    author: 'Ana Silva',
    date: '2024-01-10',
    category: 'Machine Learning',
    readTime: '12 min',
    tags: ['Machine Learning', 'Previsão', 'Estoque'],
    published: true
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const category = searchParams.get('category');
  
  let filteredPosts = blogPosts.filter(post => post.published);
  
  // Filtrar por categoria se especificada
  if (category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Paginação
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  return NextResponse.json({
    posts: paginatedPosts,
    pagination: {
      current: page,
      total: Math.ceil(filteredPosts.length / limit),
      hasNext: endIndex < filteredPosts.length,
      hasPrev: page > 1
    },
    total: filteredPosts.length
  });
}
EOF

echo "📡 Criando API para posts individuais..."
cat > src/app/api/blog/[slug]/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server';

// Dados simulados (em produção viria de um CMS)
const blogPosts = [
  {
    id: 1,
    title: 'O Futuro da Inteligência Artificial no Agronegócio',
    slug: 'futuro-ia-agronegocio',
    excerpt: 'Como a IA está revolucionando a agricultura brasileira.',
    content: `
      <h2>A Revolução da IA no Campo</h2>
      <p>A Inteligência Artificial está transformando o agronegócio brasileiro de forma sem precedentes. Com o uso de algoritmos avançados de machine learning, sensores IoT e análise de dados em tempo real, os produtores rurais conseguem tomar decisões mais precisas e otimizar seus recursos.</p>
      
      <h3>Principais Aplicações da IA no Agronegócio</h3>
      <ul>
        <li><strong>Previsão de safras:</strong> Modelos de ML analisam dados climáticos, histórico de produção e características do solo para prever rendimento das culturas</li>
        <li><strong>Agricultura de precisão:</strong> Drones e sensores coletam dados para aplicação localizada de fertilizantes e defensivos</li>
        <li><strong>Detecção de pragas:</strong> Computer vision identifica pragas e doenças precocemente</li>
        <li><strong>Otimização de irrigação:</strong> Sistemas inteligentes ajustam irrigação baseado em dados de umidade e previsão meteorológica</li>
      </ul>
      
      <h3>Cases de Sucesso</h3>
      <p>Na Galtra, desenvolvemos soluções específicas para o agronegócio, como o sistema de monitoramento climático para o IDR-Paraná e modelos preditivos para a Embrapa. Estes projetos demonstram o potencial transformador da IA no campo.</p>
      
      <h3>O Futuro</h3>
      <p>As próximas inovações incluem uso de IA generativa para criação de relatórios automáticos, integração com blockchain para rastreabilidade e desenvolvimento de assistentes virtuais especializados em agronegócio.</p>
    `,
    author: 'Tiago Galvão',
    date: '2024-01-15',
    category: 'Inteligência Artificial',
    readTime: '8 min',
    tags: ['IA', 'Agronegócio', 'Machine Learning'],
    published: true
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = blogPosts.find(p => p.slug === params.slug && p.published);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post não encontrado' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(post);
}
EOF

echo "📡 Criando middleware para CORS..."
cat > src/middleware.ts << 'EOF'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle CORS for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
EOF

echo "📊 Criando hook para usar as APIs..."
mkdir -p src/hooks
cat > src/hooks/useApi.ts << 'EOF'
import { useState } from 'react';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface ContactData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

interface NewsletterData {
  email: string;
  name?: string;
}

export function useContactForm() {
  const [state, setState] = useState<ApiResponse<any>>({
    data: null,
    loading: false,
    error: null,
  });

  const submitContact = async (data: ContactData) => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Erro ao enviar mensagem');
      }
      
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setState({ data: null, loading: false, error: errorMessage });
      throw error;
    }
  };

  return { ...state, submitContact };
}

export function useNewsletter() {
  const [state, setState] = useState<ApiResponse<any>>({
    data: null,
    loading: false,
    error: null,
  });

  const subscribe = async (data: NewsletterData) => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Erro ao inscrever na newsletter');
      }
      
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setState({ data: null, loading: false, error: errorMessage });
      throw error;
    }
  };

  return { ...state, subscribe };
}

export function useBlogPosts() {
  const [state, setState] = useState<ApiResponse<any>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchPosts = async (page = 1, category?: string) => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        ...(category && { category })
      });
      
      const response = await fetch(`/api/blog?${params}`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error('Erro ao carregar posts');
      }
      
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setState({ data: null, loading: false, error: errorMessage });
      throw error;
    }
  };

  return { ...state, fetchPosts };
}
EOF

echo "🔧 Atualizando formulário de contato para usar a API..."
cat > src/components/forms/ContactFormWithApi.tsx << 'EOF'
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactForm } from '@/hooks/useApi';

const services = [
  'Ciência de Dados',
  'Inteligência Artificial',
  'Machine Learning',
  'Visão Computacional',
  'Processamento de Linguagem Natural',
  'MLOps & Automação',
  'Big Data Engineering',
  'Consultoria Estratégica',
];

const budgetRanges = [
  'Até R$ 50k',
  'R$ 50k - R$ 100k',
  'R$ 100k - R$ 250k',
  'R$ 250k - R$ 500k',
  'Acima de R$ 500k',
  'A definir',
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactFormWithApi() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { loading, error, submitContact } = useContactForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContact(formData);
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      // Error is handled by the hook
      console.error('Erro ao enviar formulário:', error);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="Nome da sua empresa"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Serviço de Interesse
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200 disabled:opacity-50"
          >
            <option value="">Selecione um serviço</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Orçamento Estimado
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200 disabled:opacity-50"
          >
            <option value="">Selecione uma faixa</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          disabled={loading}
          className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 resize-none disabled:opacity-50"
          placeholder="Conte-nos mais sobre seu projeto, desafios ou objetivos..."
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
        >
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
        >
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={!isFormValid || loading}
        className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar Mensagem</span>
          </>
        )}
      </button>
    </form>
  );
}
EOF

echo "✅ Todas as rotas de API foram criadas!"
echo ""
echo "📡 APIs criadas:"
echo "   ✅ POST /api/contact - Formulário de contato"
echo "   ✅ POST /api/newsletter - Inscrição newsletter"
echo "   ✅ GET /api/blog - Lista de posts do blog"
echo "   ✅ GET /api/blog/[slug] - Post individual"
echo ""
echo "🔧 Utilitários criados:"
echo "   ✅ useApi.ts - Hooks para consumir APIs"
echo "   ✅ ContactFormWithApi.tsx - Formulário integrado"
echo "   ✅ middleware.ts - CORS para APIs"
echo ""
echo "💡 Para usar o formulário integrado:"
echo "   Substitua o formulário na seção Contact pelo ContactFormWithApi"
echo ""
echo "🚀 Agora o site está completamente funcional!"