import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonPage from './pages/LessonPage';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [pathname, setPathname] = useState(window.location.pathname);
  const [openFaq, setOpenFaq] = useState(0);

  // 👇 ADD THESE (for ContactPage to work)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name) newErrors.name = "Name required";
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.message) newErrors.message = "Message required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // Theme Logic
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      
      <Navbar 
        theme={theme} 
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
      />

      {/* ROUTING (manual but extended) */}
      {pathname === '/contact' ? (
        <ContactPage 
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
        />
      ) : pathname.startsWith('/course') ? (
        <CourseDetailPage />
      ) : pathname.startsWith('/lesson') ? (
        <LessonPage />
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