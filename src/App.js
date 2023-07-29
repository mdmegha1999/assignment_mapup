import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Map from './components/Map';
import RegionInfoCard from './components/RegionInfoCard';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Map />
        <RegionInfoCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
