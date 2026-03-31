import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-3">
            <div className="w-7 h-7 rounded-lg bg-hero-gradient flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="text-foreground">Learn<span className="text-gradient">X</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">Master in-demand tech skills with expert-led courses.</p>
        </div>
        {[
          { title: "Platform", items: ["Courses", "Pricing", "Instructors"] },
          { title: "Company", items: ["About", "Blog", "Careers"] },
          { title: "Support", items: ["Help Center", "Contact", "Privacy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{col.title}</h4>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 LearnX. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
