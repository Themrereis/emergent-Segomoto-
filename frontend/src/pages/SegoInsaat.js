import React, { useState } from 'react';

const SegoInsaat = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    landType: '',
    message: ''
  });

  const districts = [
    'Merkez', 'Akhisar', 'Alaşehir', 'Demirci', 'Gölmarmara', 
    'Gördes', 'Kırkağaç', 'Köprübaşı', 'Kula', 'Salihli', 
    'Sarıgöl', 'Saruhanlı', 'Selendi', 'Soma', 'Şehzadeler', 
    'Turgutlu', 'Yunusemre'
  ];

  const landTypes = [
    'Konut', 'Ticari', 'Sanayi', 'Tarım', 'Turizm', 'Karma Kullanım'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    alert('Mesajınız alındı! En kısa sürede dönüş yapacağız.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-orange-700 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              🏗️ Sego İnşaat
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Manisa Akhisar Bölgesi İnşaat Hizmetleri
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Becerik Holding bünyesinde faaliyet gösteren Sego İnşaat, 
              Manisa Akhisar bölgesinde kat karşılığı inşaat hizmetleri sunmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Akhisar bölgesinde kapsamlı inşaat çözümleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl mb-6">🏠</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Kat Karşılığı İnşaat
            </h3>
            <p className="text-gray-600 mb-6">
              Arsa sahipleri için kat karşılığı inşaat hizmetleri
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Proje tasarımı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>İnşaat ruhsatı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Yapı denetimi</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Anahtar teslimi</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl mb-6">📐</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Mimari Tasarım
            </h3>
            <p className="text-gray-600 mb-6">
              Modern ve fonksiyonel mimari tasarım hizmetleri
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>3D modelleme</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>İç mekan tasarımı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Peyzaj tasarımı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Teknik çizimler</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl mb-6">🔨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Genel İnşaat
            </h3>
            <p className="text-gray-600 mb-6">
              Her türlü inşaat ve yapı işleri
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Villa inşaatı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Apartman inşaatı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>İş merkezi</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Tadilat işleri</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Land Selection Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Akhisar Bölgesi Arsa Seçimi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manisa Akhisar bölgesinde uygun arsanızı seçin ve bizimle iletişime geçin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Bölge Seçimi</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {districts.map((district, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDistrict(district)}
                    className={`p-4 rounded-lg border-2 transition-colors duration-300 ${
                      selectedDistrict === district
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    {district}
                  </button>
                ))}
              </div>
              
              {selectedDistrict && (
                <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="text-xl font-bold text-orange-800 mb-4">
                    📍 {selectedDistrict} Bölgesi
                  </h4>
                  <p className="text-orange-700 mb-4">
                    {selectedDistrict} bölgesinde kat karşılığı inşaat hizmetleri için 
                    detaylı bilgi almak istiyorsanız aşağıdaki formu doldurun.
                  </p>
                  <div className="text-sm text-orange-600">
                    • Arsa analizi yapılır<br/>
                    • Proje önerileri sunulur<br/>
                    • Maliyet hesabı çıkarılır<br/>
                    • Kat dağılımı planlanır
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">İletişim Formu</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Ad Soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="0XXX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Arsa Türü
                  </label>
                  <select
                    value={formData.landType}
                    onChange={(e) => setFormData({...formData, landType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Arsa türünü seçin</option>
                    {landTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Proje detayları, arsa bilgileri vb."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-300"
                >
                  Mesaj Gönder
                </button>
              </form>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-3">Hızlı İletişim</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>0551 550 19 10 / 0551 550 19 08</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>segomoto@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>İstanbul Avcılar, Yeşilkent Mah.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegoInsaat;