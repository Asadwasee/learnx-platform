import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [pathname, setPathname] = useState(window.location.pathname);
  const [openFaq, setOpenFaq] = useState(0);

  // Theme Logic
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      
      {pathname === '/contact' ? (
        <ContactPage 
          formData={{}} 
          errors={{}} 
          openFaq={openFaq} 
          setOpenFaq={setOpenFaq} 
        />
      ) : (
        <main className="pt-32 text-center h-screen">
          <h1 className="text-5xl font-bold">Welcome to LearnX</h1>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;