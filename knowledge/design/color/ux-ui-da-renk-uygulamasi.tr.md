# [← Renk Teorisine Dön](intro.tr.md)

# UX/UI'da Renk Uygulaması Kılavuzu 2024 🎨

## İçindekiler
1. [Tasarım Sistemi Renk Yönergeleri](#tasarim-sistemi-renk-yonergeleri)
2. [Arayüz Durum Renkleri](#arayuz-durum-renkleri)
3. [Erişilebilirlik Standartları](#erisilebilirlik-standartlari)
4. [Mobil ve Responsive Düşünceler](#mobil-ve-responsive-dusunceler)
5. [Uygulama Görevleri](#uygulama-gorevleri)

## Tasarım Sistemi Renk Yönergeleri

### Temel Renk Yapısı
```scss
// Ana Marka Renkleri
$marka-birincil: #1A73E8;     // Ana marka rengi
$marka-ikincil: #34A853;      // İkincil aksiyonlar
$marka-vurgu: #FF5722;        // Öne çıkanlar & CTA'lar

// Nötr Renkler
$notr-100: #FFFFFF;
$notr-200: #F8F9FA;
$notr-300: #E9ECEF;
$notr-400: #CED4DA;
$notr-500: #ADB5BD;
$notr-600: #6C757D;
$notr-700: #495057;
$notr-800: #343A40;
$notr-900: #212529;

// Anlamsal Renkler
$basari: #28A745;
$uyari: #FFC107;
$hata: #DC3545;
$bilgi: #17A2B8;
```

### Renk Skalası Oluşturma
```javascript
// Her ana renk için renk skalaları oluştur
function renkSkalasiOlustur(temelRenk, adimlar = 9) {
  const skala = [];
  for (let i = 0; i < adimlar; i++) {
    const aydinlik = 100 - (i * (100 / (adimlar - 1)));
    skala.push(aydinlikAyarla(temelRenk, aydinlik));
  }
  return skala;
}
```

**Kaynak**: "Renk Sistemleri Oluşturma" - Material Design Dokümantasyonu, 2024

## Arayüz Durum Renkleri

### Standart Durum Eşleştirmesi
| Durum | Renk | Kullanım | Erişilebilirlik |
|-------|-------|-------|---------------|
| Varsayılan | `$notr-700` | Normal metin & ikonlar | 4.5:1 kontrast |
| Hover | `darken($renk, 10%)` | Etkileşimli öğeler | Min. 3:1 |
| Aktif | `darken($renk, 15%)` | Şu an aktif | Min. 4.5:1 |
| Devre Dışı | `opacity(0.5)` | Kullanılamayan aksiyonlar | N/A |
| Fokus | `$marka-birincil` | Klavye navigasyonu | Min. 3:1 |

### Uygulama Örneği
```scss
.buton {
  &.birincil {
    background: $marka-birincil;
    
    &:hover {
      background: darken($marka-birincil, 10%);
    }
    
    &:active {
      background: darken($marka-birincil, 15%);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &:focus {
      outline: 3px solid rgba($marka-birincil, 0.5);
      outline-offset: 2px;
    }
  }
}
```

**Kaynak**: "Tasarım Sistemlerinde Arayüz Durumları" - Airbnb Tasarım Sistemi, 2024

## Erişilebilirlik Standartları

### WCAG 2.2 Gereksinimleri
- Metin Kontrastı: 4.5:1 (normal metin), 3:1 (büyük metin)
- Etkileşimli Öğeler: Minimum 3:1 kontrast
- Fokus Göstergeleri: Görünür fokus durumları gerekli
- Hata Durumları: Sadece renge bağlı kalınmamalı

### Renk Körlüğü Düşünceleri
```scss
// Renk körü dostu palet
$renk-koru-guvenli: (
  kirmizi: #EF4444,
  yesil: #22C55E,
  mavi: #3B82F6,
  sari: #EAB308,
  mor: #A855F7,
  turuncu: #F97316,
  turkuaz: #14B8A6
);
```

**Kaynak**: "WCAG 2.2 Yönergeleri" - W3C, 2024

## Mobil ve Responsive Düşünceler

### Dokunmatik Hedef Renkleri
```scss
// Mobil için geliştirilmiş dokunmatik hedefler
.dokunmatik-hedef {
  background: $notr-200;
  min-height: 44px;
  min-width: 44px;
  
  @media (hover: none) {
    &:active {
      background: darken($notr-200, 10%);
    }
  }
}
```

### Karanlık Mod Uygulaması
```scss
@mixin karanlik-mod {
  --arkaplan: #{$notr-900};
  --metin-birincil: #{$notr-100};
  --metin-ikincil: #{$notr-400};
  
  @media (prefers-color-scheme: dark) {
    @content;
  }
}
```

**Kaynak**: "Mobil Öncelikli Tasarım" - Nielsen Norman Group, 2024

## Uygulama Görevleri

### Kurulum Aşaması
- [ ] Renk belirteci dokümantasyonu oluştur
- [ ] Renk skalaları oluştur
- [ ] CSS özel özelliklerini ayarla
- [ ] Karanlık mod desteği ekle

### Geliştirme Aşaması
- [ ] Durum renklerini uygula
- [ ] Hover/fokus durumlarını ekle
- [ ] Anlamsal renk eşleştirmesi oluştur
- [ ] Bileşen renk varyantları oluştur

### Test Aşaması
- [ ] Kontrast oranlarını doğrula
- [ ] Renk körlüğü desteğini test et
- [ ] Karanlık mod uygulamasını kontrol et
- [ ] Mobil cihaz testi yap

### Marka Uygulama Alıştırması
1. Bir marka seç (örn. Trendyol, Getir veya kendi markan)
2. Ana renkleri belgele
3. Renk skalaları oluştur
4. Durum eşleştirmeleri oluştur
5. Erişilebilirliği test et

```scss
// Örnek: Trendyol Marka Uygulaması
$trendyol: (
  birincil: #F27A1A,
  siyah: #333333,
  beyaz: #FFFFFF,
  // Skalaları oluştur...
);
```

### Dinamik Marka Seçimi
```typescript
interface MarkaRenkleri {
  birincil: string;
  ikincil: string;
  vurgu: string;
  durumlar: {
    hover: string;
    aktif: string;
    devreDisi: string;
  };
}

const markalar: Record<string, MarkaRenkleri> = {
  trendyol: {
    birincil: '#F27A1A',
    ikincil: '#333333',
    vurgu: '#FFFFFF',
    durumlar: {
      hover: '#ff8c2c',
      aktif: '#d66a12',
      devreDisi: '#f27a1a80'
    }
  },
  getir: {
    birincil: '#5D3EBC',
    ikincil: '#000000',
    vurgu: '#FFD300',
    durumlar: {
      hover: '#6e4bd8',
      aktif: '#4c32a0',
      devreDisi: '#5d3ebc80'
    }
  }
  // Daha fazla marka ekle...
};
```

**Kaynak**: "Ölçeklenebilir Tasarım Sistemleri Oluşturma" - Tasarım Sistemleri El Kitabı, 2024

## En İyi Uygulamalar Kontrol Listesi

✅ Dinamik tema için CSS Özel Özelliklerini kullan
✅ Uygun renk kontrast oranlarını uygula
✅ Varsayılan olarak karanlık modu destekle
✅ Hover/fokus durumlarını ekle
✅ Renk körlüğü simülatörleriyle test et
✅ Renk kullanım yönergelerini belgele
✅ Anlamsal renk isimlendirmesi oluştur
✅ Birden fazla cihaz tipini destekle

---

# İlgili Kaynaklar
- [Renk Teorisi Temelleri](renk-teorisi.md)
- [Erişilebilirlik Yönergeleri](erisilebilirlik.md)
- [Tasarım Sistemi Kurulumu](tasarim-sistemi.md)

**Temel Kaynaklar**:
1. Material Design Yönergeleri 2024
2. WCAG 2.2 Dokümantasyonu
3. Nielsen Norman Group Renk Çalışmaları
4. Figma Tasarım Sistemi Kılavuzu
5. Apple İnsan Arayüzü Yönergeleri