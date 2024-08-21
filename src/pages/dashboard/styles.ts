// components/DashboardStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f9;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #007bff;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SidebarItem = styled.div`
  margin: 15px 0;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const WelcomeMessage = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
`;

export const InfoPanel = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InfoCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;
