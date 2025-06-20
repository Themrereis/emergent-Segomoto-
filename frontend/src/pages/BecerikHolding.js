import React from 'react';
import { Link } from 'react-router-dom';

const BecerikHolding = () => {
  const companies = [
    {
      name: 'Sego Moto',
      sector: 'Otomotiv',
      description: 'Kurye motoru kiralama hizmetleri',
      icon: '🏍️',
      link: '/sego-moto',
      established: '2015',
      employees: '25+'
    },
    {
      name: 'Sego Phone',
      sector: 'Teknoloji',
      description: 'Mobil cihaz satışı ve IMEI hizmetleri',
      icon: '📱',
      link: '/sego-phone',
      established: '2018',
      employees: '15+'
    },
    {
      name: 'Sego Car',
      sector: 'Otomotiv',
      description: 'Araç kiralama hizmetleri',
      icon: '🚗',
      link: '/sego-car',
      established: '2016',
      employees: '30+'
    },
    {
      name: 'Sego İnşaat',
      sector: 'İnşaat',
      description: 'Kat karşılığı inşaat hizmetleri',
      icon: '🏗️',
      link: '/sego-insaat',
      established: '2012',
      employees: '50+'
    },
    {
      name: 'Becerikli Medikal',
      sector: 'Sağlık',
      description: 'Sağlık ve OSGB hizmetleri',
      icon: '🏥',
      link: '/becerikli-medikal',
      established: '2019',
      employees: '20+'
    },
    {
      name: 'Becerik Sigorta',
      sector: 'Sigorta',
      description: 'Kapsamlı sigorta hizmetleri',
      icon: '🛡️',
      link: '/becerik-sigorta',
      established: '2017',
      employees: '12+'
    },
    {
      name: 'Becerikli E-ticaret',
      sector: 'E-ticaret',
      description: 'Online satış platformu',
      icon: '🛒',
      link: '/eticaret',
      established: '2020',
      employees: '35+'
    }
  ];

  const values = [
    {
      title: 'Güvenilirlik',
      description: 'Müşterilerimize verdiğimiz sözlerin arkasında dururuz',
      icon: '🤝'
    },
    {
      title: 'Kalite',
      description: 'Her alanda en yüksek kalite standartlarını hedefliyoruz',
      icon: '⭐'
    },
    {
      title: 'İnovasyon',
      description: 'Teknoloji ve yenilikçi çözümlerle öncü olmaya devam ediyoruz',
      icon: '🚀'
    },
    {
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri memnuniyeti bizim için en önemli başarı kriteridir',
      icon: '😊'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="text-center">
            <h1 className="text-7xl font-bold mb-6">
              🏢 Becerik Holding
            </h1>
            <p className="text-3xl mb-8 opacity-90">
              Çok Sektörlü Güçlü Yapı
            </p>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-80">
              2010 yılından bu yana, otomotiv, teknoloji, inşaat, sağlık ve e-ticaret sektörlerinde 
              güvenilir hizmetler sunarak büyümeye devam eden köklü bir holding şirketiyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/eticaret" 
                className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors duration-300 shadow-2xl"
              >
                🛒 E-ticaret Mağazası
              </Link>
              <a 
                href="tel:05515501910" 
                className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-colors duration-300 shadow-2xl"
              >
                📞 İletişim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Hakkımızda
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Becerik Holding, 2010 yılında kurulduğu günden bu yana, müşteri memnuniyetini 
              en üst seviyede tutarak, kaliteli hizmet anlayışıyla büyümeye devam etmektedir.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Otomotiv sektöründe başladığımız yolculuğumuz, zamanla teknoloji, inşaat, 
              sağlık ve e-ticaret alanlarında da uzmanlaşmamızla devam etmiştir.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Yıl Deneyim</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600">Şirket</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600">Çalışan</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-600">Müşteri</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" 
              alt="Becerik Holding Binası" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Grup Şirketlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlerde uzman şirketlerimizle geniş hizmet yelpazesi sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Link
                key={index}
                to={company.link}
                className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {company.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {company.name}
                  </h3>
                  <div className="text-sm text-blue-600 font-semibold mb-4 uppercase tracking-wide">
                    {company.sector}
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {company.description}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mb-6">
                    <div>
                      <span className="block font-semibold">Kuruluş</span>
                      <span>{company.established}</span>
                    </div>
                    <div>
                      <span className="block font-semibold">Çalışan</span>
                      <span>{company.employees}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Detayları Gör
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Başarımızın temelini oluşturan değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Yönetim Kadromuz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">K</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Kamuran Becerik
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Yönetim Kurulu Başkanı
              </p>
              <p className="text-gray-600 mb-4">
                Holding'in kurucusu ve vizyoner lideri. 25 yıllık iş deneyimi ile 
                şirketimizi bugünkü konumuna taşıyan değerli başkanımız.
              </p>
              <a 
                href="tel:05515501910" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                📞 0551 550 19 10
              </a>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">E</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Emre Becerik
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                Genel Müdür
              </p>
              <p className="text-gray-600 mb-4">
                Genç ve dinamik yaklaşımıyla şirketimizin gelişiminde önemli rol oynayan, 
                teknoloji odaklı vizyoner liderimiz.
              </p>
              <a 
                href="tel:05515501908" 
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                📞 0551 550 19 08
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Hizmetlerimiz hakkında daha fazla bilgi almak için iletişime geçin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gray-800 rounded-2xl">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-4">Telefon</h3>
              <p className="opacity-90 mb-2">Kamuran Becerik: 0551 550 19 10</p>
              <p className="opacity-90">Emre Becerik: 0551 550 19 08</p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-4">E-posta</h3>
              <p className="opacity-90">segomoto@gmail.com</p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-4">Adres</h3>
              <p className="opacity-90">İstanbul Avcılar</p>
              <p className="opacity-90">Yeşilkent Mah. G744 Sok. No: 7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecerikHolding;