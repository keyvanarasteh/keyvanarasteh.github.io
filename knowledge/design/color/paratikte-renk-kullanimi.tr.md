# Pratikte Renk Kullanımı
## Gerçek Dünya Renk Uygulamaları için Profesyonel Kılavuz 🎨

### İçindekiler
1. [Sektör Liderlerinin Renk Paletleri](#sektor-liderlerinin-renk-paletleri)
2. [Sık Yapılan Hatalar](#sik-yapilan-hatalar)
3. [Test ve Doğrulama Yöntemleri](#test-ve-dogrulama-yontemleri)
4. [Önerilen Araçlar](#onerilen-araclar)

## Sektör Liderlerinin Renk Paletleri

### Teknoloji Devleri Analizi

#### Büyük Teknoloji Renk Sistemleri
```scss
// Trendyol Renk Sistemi
$trendyol: (
  turuncu: #F27A1A,
  siyah: #333333,
  beyaz: #FFFFFF,
  gri: #666666
);

// Getir Tasarım Sistemi
$getir: (
  birincil: #5D3EBC,
  ikincil: #FFD300,
  teslimat: #4C3398,
  yemek: #FF4B55
);

// Hepsiburada Arayüzü
$hepsiburada: (
  aydinlik: (
    arkaplan: #FFFFFF,
    metin: #484848,
    vurgu: #FF6000
  ),
  karanlik: (
    arkaplan: #484848,
    metin: #FFFFFF,
    vurgu: #FF7020
  )
);
```

**Kaynak**: "Türkiye'de Teknoloji Tasarım Sistemleri Analizi" - UX Collective, 2024

### Finans Sektörü

#### Bankacılık & Fintech
```scss
// Modern Fintech Paleti
$fintech-modern: (
  birincil: #635BFF,    // Stripe-esinli
  ikincil: #00D4FF,     // Modern bankacılık
  vurgu: #FF7B00,       // Aksiyon öğeleri
  basari: #36B37E,      // Pozitif durumlar
  hata: #FF5630         // Kritik durumlar
);
```

**Kaynak**: "Finans Hizmetleri Tasarım Kılavuzu" - Forrester Research, 2024

## Sık Yapılan Hatalar

### 1. Erişilebilirlik Hataları
❌ Düşük kontrast oranları
❌ Sadece renkle bilgi verme
❌ Tutarsız durum renkleri

### 2. Uygulama Sorunları
❌ Sabit kodlanmış renk değerleri
❌ Karanlık mod desteği eksikliği
❌ Tutarsız renk belirteçleri

### 3. Tasarım Sistemi Hataları
❌ Çok fazla renk varyasyonu
❌ Belirsiz renk amacı
❌ Eksik dokümantasyon

**Kaynak**: "UX Tasarım Hataları Araştırması" - Nielsen Norman Group, 2024

## Test ve Doğrulama Yöntemleri

### Otomatik Test Paketi
```javascript
// Renk kontrast kontrolcüsü
function kontrastKontrol(onPlan, arkaPlan) {
  const oran = kontrastOraniHesapla(onPlan, arkaPlan);
  
  return {
    AA_normal: oran >= 4.5,
    AA_buyuk: oran >= 3,
    AAA_normal: oran >= 7,
    AAA_buyuk: oran >= 4.5
  };
}

// Renk körlüğü simülatörü
function renkKorluguSimulasyonu(renk, tip) {
  const tipler = {
    protanopi: matrisler.protanopi,
    deuteranopi: matrisler.deuteranopi,
    tritanopi: matrisler.tritanopi
  };
  
  return renkMatrisiUygula(renk, tipler[tip]);
}
```

### Kullanıcı Test Protokolü
1. **Tercih Testleri**
    - Renk varyasyonlarıyla A/B testi
    - Isı haritası analizi
    - Kullanıcı anketleri

2. **Erişilebilirlik Testleri**
    - Ekran okuyucu uyumluluğu
    - Klavye navigasyonu
    - Renk körlüğü testi

3. **Performans Testleri**
    - Yüklenme süresi etkisi
    - Animasyon akıcılığı
    - Cihaz uyumluluğu

**Kaynak**: "Renk Erişilebilirlik Testleri" - WebAIM, 2024

## Önerilen Araçlar

### Tasarım Araçları
1. **Renk Paleti Oluşturucular**
    - [Coolors](https://coolors.co) - Renk şemaları
    - [Adobe Color](https://color.adobe.com) - Renk çarkı
    - [Palette.app](https://palette.app) - Yapay zeka destekli

2. **Erişilebilirlik Araçları**
    - [Contrast](https://usecontrast.com) - Kontrast kontrolcüsü
    - [Stark](https://www.getstark.co) - Erişilebilirlik paketi
    - [Who Can Use](https://whocanuse.com) - Hedef kitle simülatörü

3. **Geliştirme Araçları**
    - [ColorBox](https://www.colorbox.io) - Skala oluşturucu
    - [Chroma.js](https://gka.github.io/chroma.js) - Renk manipülasyonu
    - [Theme UI](https://theme-ui.com) - Tema sistemi

### Kod Uygulaması
```typescript
// Renk Sistemi Tip Tanımlamaları
interface RenkSistemi {
  birincil: string;
  ikincil: string;
  vurgu: string;
  anlamsal: {
    basari: string;
    uyari: string;
    hata: string;
    bilgi: string;
  };
  notr: {
    [key: number]: string;
  };
  durumlar: {
    hover: string;
    aktif: string;
    devreDisi: string;
  };
}

// Renk Sistemi Uygulaması
const renkSistemi: RenkSistemi = {
  birincil: '#0066CC',
  ikincil: '#65B741',
  vurgu: '#FF6B6B',
  anlamsal: {
    basari: '#28A745',
    uyari: '#FFC107',
    hata: '#DC3545',
    bilgi: '#17A2B8'
  },
  notr: {
    100: '#FFFFFF',
    200: '#F8F9FA',
    300: '#E9ECEF',
    400: '#DEE2E6',
    500: '#ADB5BD',
    600: '#6C757D',
    700: '#495057',
    800: '#343A40',
    900: '#212529'
  },
  durumlar: {
    hover: 'rgba(0, 0, 0, 0.1)',
    aktif: 'rgba(0, 0, 0, 0.2)',
    devreDisi: 'rgba(0, 0, 0, 0.5)'
  }
};
```

**Kaynak**: "Modern Renk Sistemleri" - Tasarım Sistemleri El Kitabı, 2024

### En İyi Uygulamalar Kontrol Listesi
✅ CSS Özel Özelliklerini kullan
✅ Renk belirteçlerini uygula
✅ Karanlık modu destekle
✅ Erişilebilirliği test et
✅ Renk kullanımını belgele
✅ Renk skalaları oluştur
✅ Anlamsal renkleri tanımla
✅ Kontrast oranlarını doğrula

## Uygulama Görevleri

### 1. Kurulum Aşaması
- [ ] Renk sistemi mimarisini tanımla
- [ ] Renk belirteçlerini oluştur
- [ ] Test ortamını kur
- [ ] Renk yönergelerini belgele

### 2. Geliştirme Aşaması
- [ ] Renk sistemini uygula
- [ ] Bileşen varyantlarını oluştur
- [ ] Karanlık mod desteği ekle
- [ ] Doğrulama araçları geliştir

### 3. Test Aşaması
- [ ] Erişilebilirlik testlerini çalıştır
- [ ] Kullanıcı testleri gerçekleştir
- [ ] Renk kontrastını doğrula
- [ ] Cihaz uyumluluğunu kontrol et

### 4. Dokümantasyon Aşaması
- [ ] Kullanım yönergeleri oluştur
- [ ] Renk belirteçlerini belgele
- [ ] Uygulama örnekleri sağla
- [ ] Bakım planı oluştur

**Kaynak**: "Renk Sistemi Uygulama Kılavuzu" - Tasarım Sistemleri Saha Rehberi, 2024

## Ek Kaynaklar
- [Renk Teorisi Temelleri](renk-teorisi.md)
- [Erişilebilirlik Yönergeleri](erisilebilirlik.md)
- [Tasarım Sistemi Dokümantasyonu](tasarim-sistemi.md)