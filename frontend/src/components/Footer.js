import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const companies = [
    { name: 'Sego Moto', href: '/sego-moto' },
    { name: 'Sego Phone', href: '/sego-phone' },
    { name: 'Sego Car', href: '/sego-car' },
    { name: 'Sego İnşaat', href: '/sego-insaat' },
    { name: 'Becerikli Medikal', href: '/becerikli-medikal' },
    { name: 'Becerik Sigorta', href: '/becerik-sigorta' },
    { name: 'Becerikli E-ticaret', href: '/eticaret' },
    { name: 'Becerik Holding', href: '/becerik-holding' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">segomoto.online</h3>
                <p className="text-gray-400">Becerik Holding</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Otomotiv, teknoloji, inşaat, sağlık ve e-ticaret sektörlerinde 
              güvenilir çözümler sunuyoruz. 8 farklı şirketimizle size en iyi hizmeti sağlıyoruz.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📞</span>
                <span>0551 550 19 10 / 0551 550 19 08</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📧</span>
                <span>segomoto@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📍</span>
                <span>İstanbul Avcılar, Yeşilkent Mah. G744 Sok. No: 7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Şirketlerimiz</h4>
            <ul className="space-y-2">
              {companies.slice(0, 4).map((company) => (
                <li key={company.name}>
                  <Link 
                    to={company.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Diğer Hizmetler</h4>
            <ul className="space-y-2">
              {companies.slice(4).map((company) => (
                <li key={company.name}>
                  <Link 
                    to={company.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; 2024 Becerik Holding. Tüm hakları saklıdır.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Kullanım Şartları
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;