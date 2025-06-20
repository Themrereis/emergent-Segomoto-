import React from 'react';
import { Link } from 'react-router-dom';

const SegoCar = () => {
  const cars = [
    {
      name: 'Ekonomik Araçlar',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=500',
      dailyPrice: '300₺',
      weeklyPrice: '1800₺',
      monthlyPrice: '7000₺',
      features: ['Düşük yakıt tüketimi', 'Manuel vites', 'Klima', 'Bluetooth']
    },
    {
      name: 'Orta Segment',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500',
      dailyPrice: '450₺',
      weeklyPrice: '2700₺',
      monthlyPrice: '10500₺',
      features: ['Otomatik vites', 'Navigasyon', 'Deri koltuk', 'Park sensörü']
    },
    {
      name: 'Lüks Araçlar',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500',
      dailyPrice: '800₺',
      weeklyPrice: '4800₺',
      monthlyPrice: '18000₺',
      features: ['Premium iç mekan', 'Panoramik tavan', 'Harman Kardon', 'Adaptif hız']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              🚗 Sego Car
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Araç Kiralama Hizmeti
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Günlük, haftalık ve aylık araç kiralama hizmetleri. 
              Sigortalı araçlarla güvenli yolculuklar yapın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:05515501910" 
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                📞 Rezervasyon
              </a>
              <Link 
                to="/becerik-sigorta" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                🛡️ Sigorta Hizmeti
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Araç Kategorilerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun araç kategorisini seçin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {car.name}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Günlük:</span>
                    <span className="text-green-600 font-bold">{car.dailyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Haftalık:</span>
                    <span className="text-green-600 font-bold">{car.weeklyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Aylık:</span>
                    <span className="text-green-600 font-bold">{car.monthlyPrice}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Özellikler:</h4>
                  <ul className="space-y-1">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  Rezervasyon Yap
                </button>
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
              Araç Kiralama Avantajları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Tam Sigorta</h3>
              <p className="text-gray-600">Tüm araçlarımız kapsamlı sigorta ile korunmaktadır</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">24/7 Destek</h3>
              <p className="text-gray-600">Yol yardımı ve teknik destek hizmeti</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Temiz Araçlar</h3>
              <p className="text-gray-600">Her kiralama öncesi detaylı temizlik</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-2">Esnek Ödeme</h3>
              <p className="text-gray-600">Nakit ve kredi kartı ile ödeme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                🛡️ Becerik Sigorta ile Güvence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Araç kiralama hizmetimizle birlikte Becerik Sigorta'dan 
                kapsamlı sigorta hizmetleri alabilirsiniz.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Kasko sigortası</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Trafik sigortası</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Ferdi kaza sigortası</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Cam sigortası</span>
                </div>
              </div>
              <Link 
                to="/becerik-sigorta" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block"
              >
                Sigorta Detayları
              </Link>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500" 
                alt="Araç Sigortası" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegoCar;