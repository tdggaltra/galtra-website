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
