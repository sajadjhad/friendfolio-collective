
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 px-4 border-t border-neutral-100 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 pt-4 border-t border-neutral-100">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Team leave it to God. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
