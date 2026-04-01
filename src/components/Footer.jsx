import { Link } from 'react-router-dom';
import { Rocket, Code, Send, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold gradient-text">LearnX</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Empowering the next generation of creators with cutting-edge tech skills.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Code size={18} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Send size={18} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Platform</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-primary transition-colors">Browse Courses</Link></li>
            <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
            <li><Link to="/mentors" className="hover:text-primary transition-colors">Mentors</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Get the latest updates on new courses and features.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow"
            />
            <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 LearnX. Built for Codecelix Intern Task.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
          <a href="#" className="hover:text-foreground">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
