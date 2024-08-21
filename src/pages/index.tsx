import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import StyledTable from '../components/Table/StyledTable';
import { getPagesWeb } from '../services/api';
import { PageWeb } from '@/@types/page';


const HomePage: React.FC = () => {
  const { token } = useAuth();
  const [pages, setPages] = useState<PageWeb[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      if (token) { 
        try {
          const data = await getPagesWeb(token);
          setPages(data);
        } catch (error) {
          console.error('Failed to fetch pages', error);
        }
      } else {
        console.error('Token not found');
      }
    };

    fetchPages();
  }, [token]);

  return <StyledTable data={pages} />;
};

export default HomePage;
