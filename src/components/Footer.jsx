import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Browse Courses", href: "/courses" },
      { name: "Instructor Highlights", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Learning Flow", href: "#" },
    ],
    categories: [
      { name: "Web Development", href: "#" },
      { name: "Artificial Intelligence", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Data Science", href: "#" },
    ],
    support: [
      { name: "FAQs", href: "/contact" },
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              LearnX
            </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering learners worldwide with cutting-edge tech skills. Join
              our community and start your journey today.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all shadow-sm"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400 transition-all shadow-sm"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest updates on new courses.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2026 LearnX Platform. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built by Team Codecelix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
