import React from 'react';
import './MainContent.css'; // Pastikan CSS Anda sudah ada untuk styling

const MainContent = () => {
  return (
    <div className="main-content">
      <h2>About Me</h2>
      <div className="bio-section">
        {/* Gambar Bio */}
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        
        {/* Bio Text */}
        <div className="bio-text">
          <p>Hello! I’m Achwir, a passionate software developer with a focus on web technologies.</p>
          <p>I specialize in front-end development, and I love building beautiful, responsive, and user-friendly applications.</p>
          <p>"In my spare time, I enjoy building decentralized applications (dApps), exploring Web3 technologies, and experimenting with DeFi protocols."</p>
        </div>
      </div>

      {/* Project ARLink Section */}
      <div className="project-section">
        <h2>My ARLink Project</h2>
        <div className="project-details">
          {/* Gambar Proyek ARLink */}
          <img
            src="https://via.placeholder.com/300"
            alt="ARLink Project Screenshot"
            className="project-image"
          />

          {/* Deskripsi Proyek ARLink */}
          <div className="project-description">
            <p>
              ARLink is a project I am developing using Aerweave's decentralized network technology. 
              It aims to revolutionize how augmented reality experiences can be stored and shared over a decentralized platform.
            </p>
            <p>
              The project uses Aerweave’s blockchain technology to ensure that AR data is securely stored and accessible. 
              Users can interact with AR objects and experiences, which are uploaded and retrieved from the Aerweave network.
            </p>
            <p>
              I am currently working on integrating ARLink with various AR tools to make it more accessible and user-friendly. 
              The goal is to create a seamless bridge between augmented reality and decentralized storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
