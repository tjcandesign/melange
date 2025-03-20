import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChefElias from './pages/ChefElias';
import Restaurants from './pages/Restaurants';
import Press from './pages/Press';
import MediaKit from './pages/MediaKit';
import CombinedLocation from './pages/CombinedLocation';

const App: React.FC = () => {
  return (
    <Router>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chef-elias" element={<ChefElias />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/combined-location" element={<CombinedLocation />} />
            <Route path="/press" element={<Press />} />
            <Route path="/media-kit" element={<MediaKit />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
