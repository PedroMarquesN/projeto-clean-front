// pages/dashboard.tsx
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Container, Sidebar, SidebarTitle, SidebarItem, MainContent, Header, WelcomeMessage, InfoPanel, InfoCard, Button } from './styles';

const Dashboard: React.FC = () => {
  useAuth();

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Dashboard Menu</SidebarTitle>
        <SidebarItem>Home</SidebarItem>
        <SidebarItem>Estátisticas</SidebarItem>
        <SidebarItem>Configuraçoes</SidebarItem>
        <SidebarItem>Notificações</SidebarItem>
      </Sidebar>
      <MainContent>
        <Header>
          <h1>Dashboard</h1>
          <Button>Perfil</Button>
        </Header>
        <WelcomeMessage>
          <h2>Bem vindo ao Dashboard!</h2>
          <p>Aqui voce encontra várias informaçoes do seu sistema.</p>
          <Button>Explore</Button>
        </WelcomeMessage>
        <InfoPanel>
          <InfoCard>
            <h3>Estátisticas</h3>
            <p>Veja suas Estátisticas aqui</p>
          </InfoCard>
          <InfoCard>
            <h3>Configuraçoes</h3>
            <p>Atualize ou ative suas configurações</p>
          </InfoCard>
          <InfoCard>
            <h3>Notificações</h3>
            <p>Veja suas mensagens e informaçoes recentes</p>
          </InfoCard>
        </InfoPanel>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
