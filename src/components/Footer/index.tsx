import React from "react";
import "./style.css";

interface FooterSection {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  const sections: FooterSection[] = [
    {
      title: "Support",
      links: ["Contact", "FAQs", "Pricing Plans", "Sitemap"],
    },
    {
      title: "Quick Links",
      links: ["Jobs", "Courses", "Paid Training", "Blog"],
    },
    {
      title: "Category",
      links: ["Graphics", "Programming", "eCommerce", "Freelancing"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div>
            <h2 className="text-white text-xl font-bold mb-2">Flexy UI</h2>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p className="mt-2">Phone: (407) 515-0128</p>
            <p className="mt-2">Mail: info@learningonline.com</p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-lg font-semibold mb-3">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="mb-2 hover:text-white cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 flex justify-between items-center text-sm">
          <span>Learning Online © 2023. Developed by Abdul Basit</span>
          <div className="flex gap-4">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




