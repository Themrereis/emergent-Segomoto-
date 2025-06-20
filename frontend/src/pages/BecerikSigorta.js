import React from 'react';

const BecerikSigorta = () => {
  const insuranceTypes = [
    {
      title: 'Araç Sigortası',
      icon: '🚗',
      services: ['Kasko Sigortası', 'Trafik Sigortası', 'Ferdi Kaza Sigortası', 'Cam Sigortası'],
      description: 'Araçlarınız için kapsamlı sigorta koruması'
    },
    {
      title: 'Moto Sigortası',
      icon: '🏍️',
      services: ['Motosiklet Kasko', 'Motosiklet Trafik', 'Sürücü Sigortası', 'Aksesuar Sigortası'],
      description: 'Motosikletleriniz için özel sigorta çözümleri'
    },
    {
      title: 'Konut Sigortası',
      icon: '🏠',
      services: ['Yangın Sigortası', 'Hırsızlık Sigortası', 'Su Baskını', 'Deprem Sigortası'],
      description: 'Evinizi ve eşyalarınızı koruyun'
    },
    {
      title: 'İşyeri Sigortası',
      icon: '🏢',
      services: ['İşyeri Yangın', 'İşveren Sorumluluk', 'Makine Kırılması', 'Elektronik Cihaz'],
      description: 'İşyeriniz için kapsamlı güvence'
    },
    {
      title: 'Sağlık Sigortası',
      icon: '⚕️',
      services: ['Özel Sağlık Sigortası', 'Tamamlayıcı Sağlık', 'Diş Tedavi', 'Yurtdışı Sağlık'],
      description: 'Sağlığınız için en iyi koruma'
    },
    {
      title: 'Hayat Sigortası',
      icon: '❤️',
      services: ['Bireysel Hayat Sigortası', 'Grup Hayat Sigortası', 'Eğitim Sigortası', 'Emeklilik'],
      description: 'Ailenizin geleceğini güvence altına alın'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              🛡️ Becerik Sigorta
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Güvenin Adresi, Korumanın Garantisi
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Bireysel ve kurumsal sigorta ihtiyaçlarınız için kapsamlı çözümler sunuyoruz. 
              Araç, konut, sağlık ve hayat sigortalarında uzman ekibimizle yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:05515501910" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                📞 Teklif Al
              </a>
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg">
                💬 WhatsApp Destek
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sigorta Türlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Her ihtiyacınız için özel sigorta çözümleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6 text-center">{insurance.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {insurance.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {insurance.description}
              </p>
              <ul className="space-y-2 mb-6">
                {insurance.services.map((service, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                Teklif Al
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Insurance Special Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                🚗 Araç Sigortası Uzmanı
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Sego Moto ve Sego Car müşterilerimize özel indirimli sigorta paketleri sunuyoruz. 
                Araç kiralama hizmetlerimizle entegre sigorta çözümleri.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold">Anında Poliçe</h4>
                    <p className="text-gray-600 text-sm">Online başvuru, 5 dakikada poliçe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold">En Uygun Fiyat</h4>
                    <p className="text-gray-600 text-sm">Tüm sigorta şirketlerini karşılaştırıyoruz</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold">24/7 Hasar Desteği</h4>
                    <p className="text-gray-600 text-sm">Kaza anında yanınızdayız</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold">Kiralama Entegrasyonu</h4>
                    <p className="text-gray-600 text-sm">Araç kiralama ile birlikte sigorta</p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
                <h4 className="font-bold text-indigo-800 mb-2">Özel Kampanya!</h4>
                <p className="text-indigo-700">
                  Sego Moto ve Sego Car müşterilerimize %20 indirimli sigorta!
                </p>
              </div>
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

      {/* Quick Quote Form */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Hızlı Sigorta Teklifi
              </h2>
              <p className="text-xl text-gray-600">
                2 dakikada sigorta teklifinizi alın
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Ad Soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="0XXX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sigorta Türü *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Sigorta türünü seçin</option>
                    <option>Araç Sigortası</option>
                    <option>Moto Sigortası</option>
                    <option>Konut Sigortası</option>
                    <option>İşyeri Sigortası</option>
                    <option>Sağlık Sigortası</option>
                    <option>Hayat Sigortası</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Bilgiler
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Araç modeli, yaşı, kullanım amacı vb."
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Teklif Al
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Sigorta Şirketi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-lg">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Hasar Desteği</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecerikSigorta;