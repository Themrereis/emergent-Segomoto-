import React from 'react';
import { Link } from 'react-router-dom';

const BecerikliMedikal = () => {
  const services = [
    {
      title: 'İSG Hizmetleri',
      description: 'İş Sağlığı ve Güvenliği danışmanlık hizmetleri',
      icon: '🛡️',
      features: [
        'Risk analizi ve değerlendirmesi',
        'İSG eğitimleri',
        'Periyodik kontroller',
        'İş kazası araştırması'
      ]
    },
    {
      title: 'OSGB Hizmetleri',
      description: 'Ortak Sağlık ve Güvenlik Birimi hizmetleri',
      icon: '⚕️',
      features: [
        'İşyeri hekimliği',
        'İş güvenliği mühendisliği',
        'Sağlık kontrolları',
        'Meslek hastalıkları takibi'
      ]
    },
    {
      title: 'Laboratuvar Hizmetleri',
      description: 'Kapsamlı laboratuvar test ve analiz hizmetleri',
      icon: '🔬',
      features: [
        'Kan tahlilleri',
        'İdrar analizleri',
        'Mikrobiyolojik testler',
        'Biyokimya analizleri'
      ]
    },
    {
      title: 'Sağlık Ürünleri',
      description: 'Tıbbi cihaz ve sağlık ürünleri satışı',
      icon: '🏥',
      features: [
        'Tıbbi cihazlar',
        'İlk yardım malzemeleri',
        'Koruyucu ekipmanlar',
        'Sağlık monitörleri'
      ]
    }
  ];

  const mobileEquipment = [
    { name: 'Kan basıncı ölçer', icon: '🩺' },
    { name: 'Stetoskop', icon: '🔊' },
    { name: 'Termometre', icon: '🌡️' },
    { name: 'Nabız ölçer', icon: '💓' },
    { name: 'Kan şekeri ölçer', icon: '🩸' },
    { name: 'Tartı ve boy ölçer', icon: '⚖️' },
    { name: 'Görme testi', icon: '👁️' },
    { name: 'EKG cihazı', icon: '📈' },
    { name: 'Odyometri cihazı', icon: '👂' },
    { name: 'Röntgen cihazı', icon: '🦴' },
    { name: 'Ultrason cihazı', icon: '📡' },
    { name: 'Aşılama ekipmanları', icon: '💉' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                🏥 Becerikli Medikal
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Sağlık ve İş Güvenliği Alanında Uzman Çözümler
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚕️</span>
                  <span className="text-lg">OSGB Hizmetleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-lg">İSG Danışmanlığı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚐</span>
                  <span className="text-lg">Gezici Sağlık Aracı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔬</span>
                  <span className="text-lg">Laboratuvar Hizmetleri</span>
                </div>
              </div>
              <Link 
                to="/eticaret" 
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg inline-block"
              >
                Sağlık Ürünleri Mağazası
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-red-600 mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>0551 550 19 10</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>0551 550 19 08</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span>segomoto@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📍</span>
                    <span className="text-center">İstanbul Avcılar<br />Yeşilkent Mah. G744 Sok. No: 7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sağlık ve iş güvenliği alanında kapsamlı hizmetler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Health Vehicle Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                🚐 Gezici Sağlık Tarama Aracımız
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                En son teknoloji tıbbi cihazlarla donatılmış mobil sağlık aracımızla 
                kapınıza kadar geliyoruz. İşyeri sağlık taramalarında uzman ekibimizle hizmet veriyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {mobileEquipment.map((equipment, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{equipment.icon}</span>
                    <span className="font-medium text-gray-700">{equipment.name}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h4 className="font-bold text-red-800 mb-2">Mobil Hizmet Avantajları:</h4>
                <ul className="space-y-1 text-red-700">
                  <li>• İşyerinize geliyoruz</li>
                  <li>• Hızlı sonuç alıyorsunuz</li>
                  <li>• Kapsamlı sağlık taraması</li>
                  <li>• Uzman doktor kontrolü</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1547116262-a7365d627e61" 
                alt="Gezici Sağlık Tarama Aracı" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <p className="text-gray-500 mt-4 text-sm">Becerikli Medikal Gezici Sağlık Aracı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">İşyeri Müşterimiz</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Sağlık Taraması</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Acil Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Sağlık Hizmetlerimizden Yararlanın
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            İşyeriniz için kapsamlı sağlık ve güvenlik çözümleri. Uzman ekibimizle hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/eticaret" 
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
            >
              🛒 Sağlık Ürünleri Mağazası
            </Link>
            <a 
              href="tel:05515501910" 
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecerikliMedikal;