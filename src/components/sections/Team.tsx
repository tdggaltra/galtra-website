'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Linkedin, 
  Github, 
  Twitter, 
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Code,
  BarChart3,
  Brain,
  Database,
  Zap,
  Camera
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Dados da equipe Galtra
const teamMembers = [
  {
    id: 'tiago-galvao',
    name: 'Tiago Dutra Galvão',
    role: 'CEO & Cientista de Dados',
    title: 'Fundador e CEO',
    bio: 'Especialista em Ciência de Dados e IA com mais de 15 anos de experiência transformando dados em insights estratégicos. Liderou projetos inovadores em diversos setores.',
    image: '/images/team/tiago-galvao1.png', // Será verificada se existe
    hasCustomImage: true, // Flag para indicar se tem imagem personalizada
    location: 'São Paulo, SP',
    email: 'tdggalvao@gmail.com',
    specialties: ['Machine Learning', 'Business Strategy', 'Data Science', 'Team Leadership'],
    experience: '15+ anos',
    projects: '50+ projetos',
    social: {
      linkedin: 'https://linkedin.com/in/tiago-galvao',
      github: 'https://github.com/tiagogalvao',
      twitter: 'https://twitter.com/tiagogalvao',
      email: 'tdggalvao@gmail.com'
    },
    skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Deep Learning', 'Business Intelligence'],
    achievements: [
      'Projetos em 6+ setores diferentes',
      'Parcerias com Embrapa e IDR-Paraná',
      'Especialista em Analytics Preditivos'
    ],
    initials: 'TG',
    bgColor: 'from-blue-500 to-purple-600'
  },
  {
    id: 'ana-silva',
    name: 'Ana Silva',
    role: 'Head of Data Science',
    title: 'Líder Técnica de Ciência de Dados',
    bio: 'Doutora em Estatística com especialização em Machine Learning. Especialista em modelagem preditiva e análise de dados complexos para tomada de decisão.',
    image: '/images/team/ana-silva.jpg',
    hasCustomImage: false,
    location: 'São Paulo, SP',
    specialties: ['Statistical Modeling', 'Predictive Analytics', 'Deep Learning', 'Research'],
    experience: '12+ anos',
    projects: '40+ projetos',
    social: {
      linkedin: 'https://linkedin.com/in/ana-silva-ds',
      github: 'https://github.com/anasilva',
      email: 'ana.silva@galtra.com.br'
    },
    skills: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Statistics', 'Time Series'],
    achievements: [
      'PhD em Estatística - USP',
      '20+ artigos científicos publicados',
      'Especialista em Time Series Forecasting'
    ],
    initials: 'AS',
    bgColor: 'from-pink-500 to-red-600'
  },
  {
    id: 'carlos-santos',
    name: 'Carlos Santos',
    role: 'Senior Data Engineer',
    title: 'Engenheiro de Dados Sênior',
    bio: 'Especialista em arquitetura de dados e MLOps. Responsável por criar infraestruturas escaláveis que suportam soluções de IA em produção.',
    image: '/images/team/carlos-santos.jpg',
    hasCustomImage: false,
    location: 'São Paulo, SP',
    specialties: ['Data Engineering', 'MLOps', 'Cloud Architecture', 'Big Data'],
    experience: '10+ anos',
    projects: '35+ projetos',
    social: {
      linkedin: 'https://linkedin.com/in/carlos-santos-de',
      github: 'https://github.com/carlossantos',
      email: 'carlos.santos@galtra.com.br'
    },
    skills: ['Python', 'Apache Spark', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
    achievements: [
      'Certificado AWS Solutions Architect',
      'Especialista em Data Pipelines',
      'Expert em Cloud Computing'
    ],
    initials: 'CS',
    bgColor: 'from-green-500 to-teal-600'
  },
  {
    id: 'marina-oliveira',
    name: 'Marina Oliveira',
    role: 'AI Research Scientist',
    title: 'Cientista de Pesquisa em IA',
    bio: 'Pesquisadora em Inteligência Artificial com foco em NLP e Computer Vision. Mestre em Ciência da Computação com experiência em projetos de ponta.',
    image: '/images/team/marina-oliveira.jpg',
    hasCustomImage: false,
    location: 'São Paulo, SP',
    specialties: ['Natural Language Processing', 'Computer Vision', 'Deep Learning', 'AI Research'],
    experience: '8+ anos',
    projects: '25+ projetos',
    social: {
      linkedin: 'https://linkedin.com/in/marina-oliveira-ai',
      github: 'https://github.com/marinaoliveira',
      email: 'marina.oliveira@galtra.com.br'
    },
    skills: ['Python', 'OpenCV', 'NLTK', 'Transformers', 'YOLO', 'GPT'],
    achievements: [
      'MSc em Ciência da Computação',
      'Especialista em Computer Vision',
      '15+ papers em conferências internacionais'
    ],
    initials: 'MO',
    bgColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'rafael-costa',
    name: 'Rafael Costa',
    role: 'Full Stack Developer',
    title: 'Desenvolvedor Full Stack',
    bio: 'Desenvolvedor especializado em criar interfaces modernas e intuitivas para soluções de IA. Expert em React, Python e integração de sistemas.',
    image: '/images/team/rafael-costa.jpg',
    hasCustomImage: false,
    location: 'São Paulo, SP',
    specialties: ['Frontend Development', 'Backend APIs', 'UI/UX Design', 'System Integration'],
    experience: '7+ anos',
    projects: '30+ projetos',
    social: {
      linkedin: 'https://linkedin.com/in/rafael-costa-dev',
      github: 'https://github.com/rafaelcosta',
      email: 'rafael.costa@galtra.com.br'
    },
    skills: ['React', 'Next.js', 'Python', 'Node.js', 'TypeScript', 'Streamlit'],
    achievements: [
      'Expert em React e Next.js',
      'Especialista em Streamlit',
      'UI/UX Designer certificado'
    ],
    initials: 'RC',
    bgColor: 'from-orange-500 to-yellow-600'
  },
  {
    id: 'lucia-ferreira',
    name: 'Lúcia Ferreira',
    role: 'Business Intelligence Analyst',
    title: 'Analista de Business Intelligence',
    bio: 'Especialista em transformar dados em insights de negócio. Com experiência em diversos setores, conecta análise técnica com estratégia empresarial.',
    image: '/images/team/lucia-ferreira.jpg',
    hasCustomImage: false,
    location: 'São Paulo, SP',
    specialties: ['Business Intelligence', 'Data Visualization', 'Business Strategy', 'Analytics'],
    experience: '9+ anos',
    projects: '45+ projetos',
    social: {
      linkedin: 'https://linkedin.com/in/lucia-ferreira-bi',
      email: 'lucia.ferreira@galtra.com.br'
    },
    skills: ['Power BI', 'Tableau', 'SQL', 'Excel', 'Python', 'Business Analysis'],
    achievements: [
      'Certificada Tableau Desktop Specialist',
      'Expert em Power BI',
      'Especialista em KPIs e Métricas'
    ],
    initials: 'LF',
    bgColor: 'from-cyan-500 to-blue-600'
  }
];

// Componente para Avatar do membro
const MemberAvatar = ({ member, size = 'md' }: { member: typeof teamMembers[0], size?: 'sm' | 'md' | 'lg' }) => {
  const [imageError, setImageError] = useState(!member.hasCustomImage);
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  if (imageError || !member.hasCustomImage) {
    // Avatar com iniciais
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${member.bgColor} flex items-center justify-center text-white font-bold ${textSizes[size]} shadow-lg`}>
        {member.initials}
      </div>
    );
  }

  // Tentar carregar imagem real
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden shadow-lg`}>
      <Image
        src={member.image}
        alt={member.name}
        width={size === 'lg' ? 128 : size === 'md' ? 96 : 48}
        height={size === 'lg' ? 128 : size === 'md' ? 96 : 48}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const skills = [
  { name: 'Python', icon: Code, count: 6 },
  { name: 'Machine Learning', icon: Brain, count: 5 },
  { name: 'SQL', icon: Database, count: 4 },
  { name: 'React', icon: Code, count: 3 },
  { name: 'Business Intelligence', icon: BarChart3, count: 4 },
  { name: 'Deep Learning', icon: Brain, count: 3 },
];

const stats = [
  { label: 'Especialistas', value: '6+', icon: Users },
  { label: 'Anos de Experiência', value: '15+', icon: Award },
  { label: 'Projetos Entregues', value: '250+', icon: Briefcase },
  { label: 'Setores Atendidos', value: '8+', icon: BarChart3 },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const selectedMemberData = teamMembers.find(member => member.id === selectedMember);

  return (
    <section id="team" className="py-16 lg:py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-50/80 dark:bg-accent-900/30 backdrop-blur-sm border border-accent-200/50 dark:border-accent-800/50 rounded-full px-4 py-2 text-accent-700 dark:text-accent-300 font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Nossa Equipe</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-dark-900 dark:text-white">
              Mentes brilhantes que{' '}
            </span>
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              transformam dados
            </span>
          </h2>
          
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Conheça os especialistas que tornam possível a transformação de dados 
            complexos em soluções inteligentes e resultados excepcionais.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-600 dark:text-dark-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member.id)}
            >
              <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Member Photo */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <MemberAvatar member={member} size="md" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-dark-800 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 leading-relaxed">
                    {member.bio.slice(0, 120)}...
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-md"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dark-200 dark:border-dark-700">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent-600 dark:text-accent-400">
                        {member.experience}
                      </div>
                      <div className="text-xs text-dark-500 dark:text-dark-400">
                        Experiência
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent-600 dark:text-accent-400">
                        {member.projects}
                      </div>
                      <div className="text-xs text-dark-500 dark:text-dark-400">
                        Projetos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-8">
            Principais Competências da Equipe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="font-semibold text-dark-900 dark:text-white mb-1">
                    {skill.name}
                  </div>
                  <div className="text-sm text-dark-500 dark:text-dark-400">
                    {skill.count} especialistas
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <GraduationCap className="w-16 h-16 mx-auto text-primary-600 mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Quer fazer parte da nossa equipe?
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos excepcionais em Data Science, 
              IA e tecnologia. Junte-se a nós na missão de transformar dados em valor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Ver Vagas Abertas</span>
              </Link>
              <Link
                href="/contact"
                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-dark-200/50 dark:border-dark-700/50"
              >
                Enviar Currículo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && selectedMemberData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-dark-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <MemberAvatar member={selectedMemberData} size="lg" />
                  <div>
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                      {selectedMemberData.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {selectedMemberData.title}
                    </p>
                    <div className="flex items-center text-dark-500 dark:text-dark-400 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedMemberData.location}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                {selectedMemberData.bio}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                  Especialidades
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMemberData.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                  Habilidades Técnicas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMemberData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                  Principais Conquistas
                </h4>
                <ul className="space-y-2">
                  {selectedMemberData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-dark-600 dark:text-dark-300">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6 border-t border-dark-200 dark:border-dark-700">
                {selectedMemberData.social.linkedin && (
                  <a
                    href={selectedMemberData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {selectedMemberData.social.github && (
                  <a
                    href={selectedMemberData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {selectedMemberData.social.twitter && (
                  <a
                    href={selectedMemberData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {selectedMemberData.social.email && (
                  <a
                    href={`mailto:${selectedMemberData.social.email}`}
                    className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}