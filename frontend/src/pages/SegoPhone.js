import React from 'react';
import { Link } from 'react-router-dom';

const SegoPhone = () => {
  const phones = [
    {
      name: 'iPhone 15 Pro Max',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      price: '65.999₺',
      originalPrice: '69.999₺',
      discount: '6%',
      features: ['A17 Pro çip', '256GB depolama', '48MP kamera', 'Titanyum kasa']
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      price: '52.999₺',
      originalPrice: '55.999₺',
      discount: '5%',
      features: ['Snapdragon 8 Gen 3', '256GB depolama', '200MP kamera', 'S Pen dahil']
    },
    {
      name: 'iPhone 14',
      image: 'https://images.unsplash.com/photo-1663765970236-f2acfde22237?w=500',
      price: '45.999₺',
      originalPrice: '49.999₺',
      discount: '8%',
      features: ['A15 Bionic çip', '128GB depolama', '12MP kamera', 'Face ID']
    }
  ];

  const services = [
    {
      title: 'IMEI Kayıt Hizmeti',
      description: 'Yurtdışı cihazlarınız için IMEI kaydı',
      icon: '📱',
      features: ['Hızlı işlem', 'Güvenli kayıt', 'Uzman destek']
    },
    {
      title: 'IMEI Süre Uzatma',
      description: 'IMEI sürenizi uzatma hizmeti',
      icon: '⏰',
      features: ['Online işlem', 'Anında onay', '24/7 destek']
    },
    {
      title: 'eSIM Profil Hizmeti',
      description: '120 günde bir yeni eSIM profili',
      icon: '📶',
      features: ['Otomatik yenileme', 'QR kod ile kurulum', 'Çoklu operatör']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              📱 Sego Phone
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              iPhone ve Android Cihaz Satışı
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Yurt içi ve yurt dışı telefon satışı, IMEI kayıt ve uzatma hizmetleri. 
              En güncel modellerle teknolojiyi yakından takip edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/eticaret" 
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                🛒 Mağazaya Git
              </Link>
              <a 
                href="https://www.turkiye.gov.tr" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
              >
                📱 IMEI Sorgula
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Phones */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Öne Çıkan Modeller
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En yeni iPhone ve Android modellerini kampanyalı fiyatlarla keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phones.map((phone, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={phone.image} 
                  alt={phone.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {phone.discount} İndirim
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {phone.name}
                </h3>
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-purple-600">{phone.price}</span>
                    <span className="text-lg text-gray-500 line-through">{phone.originalPrice}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Özellikler:</h4>
                  <ul className="space-y-1">
                    {phone.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="/eticaret"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 block text-center"
                >
                  Satın Al
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              IMEI ve eSIM Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yurtdışı telefonlarınız için IMEI kayıt, süre uzatma ve eSIM profil hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Başvur
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMEI Tools Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              🔧 IMEI Araçları
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Hızlı erişim için QR kodları tarayın veya linklere tıklayın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-4">e-Devlet IMEI Sorgulama</h3>
              <p className="mb-6">IMEI numaranızı e-Devlet üzerinden sorgulayın</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="text-6xl">📱</div>
                <p className="text-sm mt-2">QR Kod ile e-Devlet</p>
              </div>
              <a 
                href="https://www.turkiye.gov.tr" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 inline-block"
              >
                e-Devlet'e Git
              </a>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-2xl font-bold mb-4">BTK IMEI Kontrol</h3>
              <p className="mb-6">BTK üzerinden IMEI durumunuzu kontrol edin</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="text-6xl">📊</div>
                <p className="text-sm mt-2">QR Kod ile BTK</p>
              </div>
              <a 
                href="https://www.btk.gov.tr" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 inline-block"
              >
                BTK'ya Git
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hacker Style Section */}
      <section className="py-20 bg-black text-green-400">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono">
              {'>'} ADVANCED_MOBILE_TECH {'<'}
            </h2>
            <p className="text-xl opacity-90 font-mono">
              [eSIM_PROFILE_GENERATOR_v2.0]
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <div className="font-mono text-sm space-y-2">
                <p>$ initializing_esim_system...</p>
                <p>$ loading_profile_database...</p>
                <p className="text-yellow-400">$ profile_generation: ACTIVE</p>
                <p className="text-green-400">$ auto_renewal: ENABLED [120_days_cycle]</p>
                <p>$ qr_code_generator: READY</p>
                <p className="text-blue-400">$ multi_operator_support: TRUE</p>
                <p>$ security_encryption: AES-256</p>
                <p className="text-green-400">$ system_status: ONLINE</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-bold mb-4 font-mono text-green-400">
                  [eSIM_FEATURES]
                </h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li>• Auto_profile_renewal: 120d</li>
                  <li>• QR_installation_method: TRUE</li>
                  <li>• IMEI_tracking_integration: ACTIVE</li>
                  <li>• Mobile_app_sync: ENABLED</li>
                  <li>• Multi_device_support: TRUE</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-bold mb-4 font-mono text-green-400">
                  [SYSTEM_INFO]
                </h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li>• Server_uptime: 99.9%</li>
                  <li>• Profile_generation_time: {'<'}2s</li>
                  <li>• Encryption_level: MAXIMUM</li>
                  <li>• API_response_time: 100ms</li>
                  <li>• Backup_systems: ACTIVE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegoPhone;