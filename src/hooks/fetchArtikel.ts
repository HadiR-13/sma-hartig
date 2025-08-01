// /hooks/useArticles.ts
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Article } from '@/constants/artikel';

export function fetchArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { data, error } = await supabase
          .from('Artikel')
          .select('id, title, date, content, imageUrl, slug')
          .order('date', { ascending: false });

        if (error) {
          setError('Failed to fetch articles');
          console.error('Supabase error:', error);
          return;
        }

        setArticles(data || []);
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('Unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}
