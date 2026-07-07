# SİSPA — Su Isıtma Sistemleri Pazarlama

Yeni nesil **fotovoltaik (PV) su ısıtma sistemleri** lansman sitesi.
Saf HTML + CSS + Vanilla JS, tek sayfalık statik site. Çok dilli: TR (kaynak) + EN/DE/RU.

## Yapı

```
index.html          TR ana sayfa — TEK KAYNAK (elle düzenlenen tek sayfa)
en/ de/ ru/         build.js ile üretilir (elle düzenlenmez, repoda tutulur)
build.js            Dil sayfalarını üretir (lang/title/meta/canonical statik gömülür)
assets/css/style.css
assets/js/i18n.js   Çeviri sözlüğü (data-i18n anahtarları, EN/DE/RU) — gövde metinleri
assets/js/main.js   Mobil menü, scroll reveal, sayaçlar
assets/img/         Logo (SVG) + üretici kataloğundan optimize ürün görselleri
server.js           Küçük Node statik sunucu (dizin index desteğiyle)
```

## Çalıştırma

```bash
npm run build   # /en /de /ru sayfalarını üretir
npm start       # build + http://localhost:3000
```

Harici bağımlılık yoktur; `npm install` gerekmez.

## Çok dil kuralları

- TR sayfası kaynaktır; metin değişince `data-i18n` anahtarının EN/DE/RU karşılığını
  `assets/js/i18n.js` içindeki `DICT`'e ekle/güncelle.
- Sayfa `<title>`/description çevirileri `build.js` içindeki `META` tablosundadır.
- Kaynak değişince `node build.js` çalıştırıp `/en /de /ru` çıktısını da commit'le.
- `hreflang` etiketleri kaynak head'de statiktir; canonical'ı build.js dil başına yazar.

## Kampanya (lansman)

- 80L model: liste 22.000 ₺ → lansmana özel **17.000 ₺** (panel hariç), ilk **50 adet**.
- Kampanya bittiğinde: `index.html` içindeki `#kampanya` bölümü, topbar metni,
  modeller tablosundaki `tr.promo` satırı rozeti ve JSON-LD `Product.offers` fiyatı
  güncellenmeli; ardından `node build.js`.

## İçerik kaynakları

- Ürün teknik verileri (60L-200L modeller, DC/AC güçler, tank ölçüleri):
  Sinospring PV Water Heater kataloğu.
- Karşılaştırma tablosu: SİSPA "Fotovoltaik vs Klasik" bilgilendirme görseli.
- İletişim bilgileri GESPA Enerji ile ortaktır (SİSPA, GESPA Enerji markasıdır):
  tel/WhatsApp 0543 743 42 09 · gesmarketim@gmail.com · Manavgat/Antalya.

## Notlar

- Görsel `alt` metinleri ve WhatsApp ön-yazıları tüm dillerde TR kalır (firma TR konuşur).
- Logo `assets/img/logo.svg` içinde vektörel olarak yeniden çizilmiştir;
  kurumsal logonun basılı orijinali gelirse bu dosya değiştirilebilir.
