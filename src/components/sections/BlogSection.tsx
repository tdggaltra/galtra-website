'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Dados dos posts do blog
const blogPosts = [
  {
    id: 1,
    title: "O Futuro da Inteligência Artificial em 2024",
    excerpt: "Explore as tendências mais importantes em IA que estão moldando o futuro dos negócios e como sua empresa pode se preparar para essas mudanças transformadoras.",
    author: "Equipe Galtra",
    date: "15 de Jan, 2024",
    readTime: "8 min",
    image: "/images/blog/ai-future.jpg",
    category: "Inteligência Artificial",
    tags: ["IA", "Tendências", "Negócios", "Futuro"],
    featured: true
  },
  {
    id: 2,
    title: "Como Implementar Machine Learning na sua Empresa",
    excerpt: "Um guia prático e detalhado para começar com Machine Learning no seu negócio, desde a preparação dos dados até a implementação de modelos em produção.",
    author: "Dr. Ana Silva",
    date: "10 de Jan, 2024",
    readTime: "12 min",
    image: "/images/blog/ml-implementation.jpg",
    category: "Machine Learning",
    tags: ["ML", "Implementação", "Guia Prático"],
    featured: false
  },
  {
    id: 3,
    title: "Data Science: Transformando Dados em Decisões",
    excerpt: "Descubra como a ciência de dados pode revolucionar sua tomada de decisões e gerar valor real para seu negócio através de insights acionáveis.",
    author: "Prof. Carlos Santos",
    date: "5 de Jan, 2024",
    readTime: "10 min",
    image: "/images/blog/data-science.jpg",
    category: "Data Science",
    tags: ["Data Science", "Analytics", "Decisões"],
    featured: true
  },
  {
    id: 4,
    title: "Big Data Analytics: Estratégias para Grandes Volumes",
    excerpt: "Técnicas e ferramentas essenciais para lidar com grandes volumes de dados e extrair insights valiosos em tempo real.",
    author: "Equipe Galtra",
    date: "28 de Dez, 2023",
    readTime: "15 min",
    image: "/images/blog/big-data.jpg",
    category: "Big Data",
    tags: ["Big Data", "Analytics", "Estratégia"],
    featured: false
  },
  {
    id: 5,
    title: "Visualização de Dados: Arte e Ciência",
    excerpt: "Como criar visualizações efetivas que comunicam insights complexos de forma clara e persuasiva para diferentes audiências.",
    author: "Maria Fernanda",
    date: "20 de Dez, 2023",
    readTime: "7 min",
    image: "/images/blog/data-viz.jpg",
    category: "Visualização",
    tags: ["Visualização", "Design", "Comunicação"],
    featured: false
  },
  {
    id: 6,
    title: "IA Generativa: Aplicações Práticas nos Negócios",
    excerpt: "Explore as aplicações práticas da IA generativa e como ela está revolucionando processos empresariais em diversos setores.",
    author: "Dr. Roberto Lima",
    date: "15 de Dez, 2023",
    readTime: "11 min",
    image: "/images/blog/generative-ai.jpg",
    category: "IA Generativa",
    tags: ["IA Generativa", "Automação", "Inovação"],
    featured: true
  }
];

const categories = ["Todos", "Inteligência Artificial", "Machine Learning", "Data Science", "Big Data", "Visualização", "IA Generativa"];

// Componente de Card do Post
const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-900 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
      post.featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}
  >
    {/* Featured Badge */}
    {post.featured && (
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Destaque
      </div>
    )}
    
    {/* Image */}
    <div className={`relative overflow-hidden ${post.featured ? 'h-64 md:h-80' : 'h-48'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-accent-500/80 group-hover:from-primary-600/90 group-hover:to-accent-600/90 transition-all duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h3 className={`font-bold mb-2 ${post.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      {/* Category */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
          <Tag className="w-3 h-3 mr-1" />
          {post.category}
        </span>
        <div className="flex items-center space-x-1 text-sm text-dark-500 dark:text-dark-400">
          <User className="w-4 h-4" />
          <span>{post.author}</span>
        </div>
      </div>
      
      {/* Excerpt */}
      <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      {/* Read More */}
      <Link 
        href={`/blog/${post.id}`}
        className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200 group"
      >
        <span>Ler artigo completo</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  </motion.article>
);

// Componente principal
export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mb-8">
            Insights, tendências e conhecimentos sobre ciência de dados, inteligência artificial e tecnologias emergentes
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-dark-900 dark:text-white"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-dark-600 dark:text-dark-400 mr-2" />
            <span className="text-dark-600 dark:text-dark-400 font-medium">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-900 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-800 border border-dark-200 dark:border-dark-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
              Nenhum artigo encontrado
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              Tente ajustar seus filtros ou termos de busca
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchTerm("");
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl p-8 lg:p-12 border border-primary-100 dark:border-primary-800">
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Receba nossos últimos insights sobre IA, Data Science e tecnologia diretamente no seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900 dark:text-white"
              />
              <button className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Inscrever-se
              </button>
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400 mt-4">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}