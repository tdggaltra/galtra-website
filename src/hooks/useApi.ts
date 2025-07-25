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
