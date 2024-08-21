import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import StyledTable from '../components/Table/StyledTable';
import { getPagesWeb } from '../services/api';
import { PageWeb } from '@/@types/page';


const HomePage: React.FC = () => {

  const [pages, setPages] = useState<PageWeb[]>([]);

  useEffect(() => {
    const fetchPages = async () => {

          const data = await getPagesWeb();
          setPages(data);

    };

    fetchPages();
  }, []);

  return <StyledTable data={pages} />;
};

export default HomePage;
