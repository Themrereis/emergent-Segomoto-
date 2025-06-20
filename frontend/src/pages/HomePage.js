import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const companies = [
    {
      id: 'sego-moto',
      name: 'Sego Moto',
      description: 'Kurye motoru kiralama hizmeti',
      icon: '🏍️',
      color: 'from-blue-600 to-blue-800',
      link: '/sego-moto'
    },
    {
      id: 'sego-phone',
      name: 'Sego Phone',
      description: 'iPhone ve Android cihaz satışı',
      icon: '📱',
      color: 'from-purple-600 to-purple-800',
      link: '/sego-phone'
    },
    {
      id: 'sego-car',
      name: 'Sego Car',
      description: 'Araç kiralama hizmeti',
      icon: '🚗',
      color: 'from-green-600 to-green-800',
      link: '/sego-car'
    },
    {
      id: 'sego-insaat',
      name: 'Sego İnşaat',
      description: 'İnşaat ve arsa hizmetleri',
      icon: '🏗️',
      color: 'from-orange-600 to-orange-800',
      link: '/sego-insaat'
    },
    {
      id: 'becerikli-medikal',
      name: 'Becerikli Medikal',
      description: 'Sağlık ve OSGB hizmetleri',
      icon: '🏥',
      color: 'from-red-600 to-red-800',
      link: '/becerikli-medikal'
    },
    {
      id: 'becerik-sigorta',
      name: 'Becerik Sigorta',
      description: 'Sigorta hizmetleri',
      icon: '🛡️',
      color: 'from-indigo-600 to-indigo-800',
      link: '/becerik-sigorta'
    },
    {
      id: 'eticaret',
      name: 'Becerikli E-ticaret',
      description: 'Online alışveriş platformu',
      icon: '🛒',
      color: 'from-pink-600 to-pink-800',
      link: '/eticaret'
    },
    {
      id: 'becerik-holding',
      name: 'Becerik Holding',
      description: 'Ana holding şirketi',
      icon: '🏢',
      color: 'from-gray-700 to-gray-900',
      link: '/becerik-holding'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Becerik Holding
          </h1>
          <p className="text-2xl mb-8 opacity-90">
            Çok Sektörlü Hizmet Deneyimi
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
            Otomotiv, teknoloji, inşaat, sağlık ve e-ticaret sektörlerinde 
            güvenilir çözümler sunuyoruz. 8 farklı şirketimizle size en iyi hizmeti sağlıyoruz.
          </p>
          <Link 
            to="/becerik-holding" 
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Holding Hakkında
          </Link>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Şirketlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Her sektörde uzman ekiplerimizle size en kaliteli hizmeti sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <Link
              key={company.id}
              to={company.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${company.color} p-8 text-white relative z-10`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {company.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {company.name}
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  {company.description}
                </p>
                <div className="flex items-center text-sm font-semibold">
                  Detayları Gör
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-lg">Şirket</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            İletişime Geçin
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p className="text-gray-600">0551 550 19 10</p>
              <p className="text-gray-600">0551 550 19 08</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">E-posta</h3>
              <p className="text-gray-600">segomoto@gmail.com</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Adres</h3>
              <p className="text-gray-600">İstanbul Avcılar<br />Yeşilkent Mah. G744 Sok. No: 7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;