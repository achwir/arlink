import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import './Dashboard.css'; // Tambahkan CSS untuk styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-area">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
