import React from 'react';
import { Link } from 'react-router-dom';

const SegoMoto = () => {
  const motorcycles = [
    {
      name: 'Honda Activa',
      image: 'https://images.unsplash.com/photo-1558618667-fcdcfcebf531?w=500',
      dailyPrice: '150₺',
      weeklyPrice: '900₺',
      monthlyPrice: '3500₺',
      yearlyPrice: '35000₺',
      features: ['Düşük yakıt tüketimi', 'Konforlu sürüş', 'Güvenilir motor']
    },
    {
      name: 'Honda PCX',
      image: 'https://images.unsplash.com/photo-1607813734982-97e1b5dc0fce?w=500',
      dailyPrice: '200₺',
      weeklyPrice: '1200₺',
      monthlyPrice: '4500₺',
      yearlyPrice: '45000₺',
      features: ['Premium konfor', 'Yüksek performans', 'Modern tasarım']
    },
    {
      name: 'Yamaha NMAX',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500',
      dailyPrice: '180₺',
      weeklyPrice: '1100₺',
      monthlyPrice: '4200₺',
      yearlyPrice: '42000₺',
      features: ['Sportif görünüm', 'Ekonomik yakıt', 'Güçlü fren sistemi']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              🏍️ Sego Moto
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Kurye Motoru Kiralama Hizmeti
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Günlük, haftalık, aylık ve yıllık kiralama seçenekleriyle 
              işinize uygun motor kiralama çözümleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:05515501910" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                📞 Hemen Ara
              </a>
              <Link 
                to="/becerik-sigorta" 
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
              >
                🛡️ Sigorta Yaptır
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Motorcycles Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Motor Modellerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kurye işleriniz için en uygun motor modellerini kiralayın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((motorcycle, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={motorcycle.image} 
                alt={motorcycle.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {motorcycle.name}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Günlük:</span>
                    <span className="text-blue-600 font-bold">{motorcycle.dailyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Haftalık:</span>
                    <span className="text-blue-600 font-bold">{motorcycle.weeklyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Aylık:</span>
                    <span className="text-blue-600 font-bold">{motorcycle.monthlyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Yıllık:</span>
                    <span className="text-blue-600 font-bold">{motorcycle.yearlyPrice}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Özellikler:</h4>
                  <ul className="space-y-1">
                    {motorcycle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Kirala
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍💼</span>
                  <div>
                    <p className="font-semibold">Kamuran Becerik</p>
                    <a href="tel:05515501910" className="text-blue-200 hover:text-white">0551 550 19 10</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍💼</span>
                  <div>
                    <p className="font-semibold">Emre Becerik</p>
                    <a href="tel:05515501908" className="text-blue-200 hover:text-white">0551 550 19 08</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <a href="mailto:segomoto@gmail.com" className="text-blue-200 hover:text-white">segomoto@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p>İstanbul Avcılar</p>
                    <p>Yeşilkent Mah. G744 Sok. No: 7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Hızlı İletişim</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Adınız" 
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="tel" 
                  placeholder="Telefon" 
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Kiralama Süresi</option>
                  <option>Günlük</option>
                  <option>Haftalık</option>
                  <option>Aylık</option>
                  <option>Yıllık</option>
                </select>
                <textarea 
                  placeholder="Mesajınız" 
                  rows="4"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegoMoto;