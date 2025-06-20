import React, { useState } from 'react';

const BecerikliEticaret = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tüm Ürünler', icon: '🛒' },
    { id: 'printing', name: 'Matbaa Ürünleri', icon: '🖨️' },
    { id: 'phones', name: 'Telefon & Teknoloji', icon: '📱' },
    { id: 'medical', name: 'Sağlık Ürünleri', icon: '🏥' },
    { id: 'automotive', name: 'Otomotiv', icon: '🚗' },
    { id: 'office', name: 'Ofis Malzemeleri', icon: '📋' },
    { id: 'electronics', name: 'Elektronik', icon: '💻' }
  ];

  const products = [
    // Matbaa Ürünleri
    {
      id: 1,
      name: 'Kartvizit Baskısı',
      category: 'printing',
      price: '150₺',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
      description: '500 adet kartvizit, premium kalite',
      inStock: true
    },
    {
      id: 2,
      name: 'Broşür Baskısı',
      category: 'printing',
      price: '300₺',
      image: 'https://images.unsplash.com/photo-1586953208455-d3cded40fa29?w=400',
      description: 'A4 broşür, 1000 adet',
      inStock: true
    },
    {
      id: 3,
      name: 'Afiş Baskısı',
      category: 'printing',
      price: '25₺',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      description: 'A3 afiş baskısı, renkli',
      inStock: true
    },
    
    // Telefon & Teknoloji
    {
      id: 4,
      name: 'iPhone 15 Pro Max',
      category: 'phones',
      price: '65.999₺',
      originalPrice: '69.999₺',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      description: '256GB, Titanyum, A17 Pro',
      inStock: true,
      discount: '6%'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24',
      category: 'phones',
      price: '42.999₺',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      description: '256GB, Snapdragon 8 Gen 3',
      inStock: true
    },
    {
      id: 6,
      name: 'Bluetooth Kulaklık',
      category: 'phones',
      price: '299₺',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      description: 'Kablosuz, gürültü önleyici',
      inStock: true
    },

    // Sağlık Ürünleri
    {
      id: 7,
      name: 'Kan Basıncı Ölçer',
      category: 'medical',
      price: '450₺',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      description: 'Dijital, otomatik',
      inStock: true
    },
    {
      id: 8,
      name: 'Termometre',
      category: 'medical',
      price: '89₺',
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400',
      description: 'Temassız, infrared',
      inStock: true
    },
    {
      id: 9,
      name: 'İlk Yardım Çantası',
      category: 'medical',
      price: '250₺',
      image: 'https://images.unsplash.com/photo-1603398938877-00d1fb3e9f20?w=400',
      description: 'Komple set, ev/ofis için',
      inStock: true
    },

    // Otomotiv
    {
      id: 10,
      name: 'Araç Aksesuar Seti',
      category: 'automotive',
      price: '199₺',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400',
      description: 'Cam silecek, paspas seti',
      inStock: true
    },
    {
      id: 11,
      name: 'Motor Yağı',
      category: 'automotive',
      price: '285₺',
      image: 'https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=400',
      description: '5W-30, 4 litre',
      inStock: true
    },

    // Ofis Malzemeleri
    {
      id: 12,
      name: 'Ofis Sandalyesi',
      category: 'office',
      price: '899₺',
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400',
      description: 'Ergonomik, ayarlanabilir',
      inStock: true
    },
    {
      id: 13,
      name: 'Yazıcı Kağıdı',
      category: 'office',
      price: '45₺',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400',
      description: 'A4, 500 yaprak',
      inStock: true
    },

    // Elektronik
    {
      id: 14,
      name: 'Laptop',
      category: 'electronics',
      price: '15.999₺',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      description: '15.6", Intel i5, 8GB RAM',
      inStock: true
    },
    {
      id: 15,
      name: 'Tablet',
      category: 'electronics',
      price: '3.299₺',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      description: '10.1", 64GB, Android',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              🛒 Becerikli E-ticaret
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Her İhtiyacınız İçin Online Alışveriş
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
              Matbaa ürünlerinden teknolojiye, sağlık ürünlerinden otomotive 
              kadar geniş ürün yelpazesiyle hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-6 py-4 text-gray-800 rounded-full text-lg w-80 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
              />
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                🔍 Ara
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {categories.find(c => c.id === selectedCategory)?.name || 'Ürünler'}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} ürün bulundu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount} İndirim
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Stokta Yok</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                  {product.inStock && (
                    <span className="text-green-500 text-sm font-medium">✓ Stokta</span>
                  )}
                </div>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    product.inStock
                      ? 'bg-pink-600 text-white hover:bg-pink-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ürün bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinizi değiştirip tekrar deneyin.</p>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Neden Becerikli E-ticaret?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Türkiye geneli 24-48 saat teslimat</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Güvenli Alışveriş</h3>
              <p className="text-gray-600">SSL sertifikası ile güvenli ödeme</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">↩️</div>
              <h3 className="text-xl font-bold mb-2">Kolay İade</h3>
              <p className="text-gray-600">14 gün içinde ücretsiz iade</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-2">Çoklu Ödeme</h3>
              <p className="text-gray-600">Kredi kartı, havale, kapıda ödeme</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Alışverişe Başlayın!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Binlerce ürün, uygun fiyatlar ve kaliteli hizmet için 
            hemen alışverişe başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:05515501910" 
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              📞 Sipariş Hattı
            </a>
            <a 
              href="mailto:segomoto@gmail.com" 
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
            >
              📧 E-posta Destek
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecerikliEticaret;