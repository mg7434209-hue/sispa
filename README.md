# SİSPA — Su Isıtma Sistemleri Pazarlama

Yeni nesil **fotovoltaik (PV) su ısıtma sistemleri** lansman sitesi.
Saf HTML + CSS + Vanilla JS, tek sayfalık statik site. Çok dilli: TR (kaynak) + EN/DE/RU.

## Yapı

**Çok sayfalı site.** TR sayfaları kök dizinde KAYNAKTIR; `/en /de /ru` üretilir.

```
index.html          Ana sayfa (hero, nasıl çalışır, kampanya teaser, avantaj özeti)
avantajlar.html     8 avantaj + görsel bant + PV vs klasik karşılaştırma
kampanya.html       Lansman kampanyası (fiyat, stok, geri sayım) + Product JSON-LD
modeller.html       Model/teknik özellik tablosu
hesaplayici.html    Sıcak su ihtiyacı (kişi sayısına göre) + havuz ısıtma hesaplayıcı
oteller.html        Oteller & büyük tesisler + hakkında (GESPA)
iletisim.html       İletişim kartları
en/ de/ ru/         build.js ile üretilir (elle düzenlenmez, repoda tutulur)
build.js            Dil sayfalarını + sitemap.xml üretir (PAGES ve META tabloları)
assets/js/config.js TEK DOĞRU KAYNAK: kampanya + hesaplayıcı katsayıları
assets/js/i18n.js   Çeviri sözlüğü (data-i18n anahtarları, EN/DE/RU)
assets/js/main.js   Menü, reveal, sayaçlar, geri sayım, hesaplayıcı, ziyaretçi rozeti
server.js           Statik sunucu + /api/visits ziyaretçi sayacı ucu
```

Yeni sayfa eklerken: TÜM sayfalardaki nav'a link ekle, `build.js` içindeki
`PAGES` listesine ve `META` tablosuna (3 dil) satır ekle, `node build.js` çalıştır.

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

- 80L model: liste 22.000 ₺ → lansmana özel **17.000 ₺** (panel hariç), 50 adetlik stok.
- **Kalan stok ve bitiş tarihi TEK yerden yönetilir: `assets/js/config.js`**
  (`remaining`, `total`, `end`). Satış oldukça `remaining` değerini azalt —
  topbar, rozet, stok çubuğu ve geri sayım otomatik güncellenir; build gerekmez.
- Süre dolunca geri sayım yerine "kampanya sona erdi" mesajı çıkar.
- Kampanya tamamen kalkacaksa: `index.html` içindeki `#kampanya` bölümü, topbar
  metni, modeller tablosundaki `tr.promo` satırı rozeti ve JSON-LD
  `Product.offers` fiyatı güncellenmeli; ardından `node build.js`.

## Hesaplayıcı (hesaplayici.html)

Katsayılar `assets/js/config.js` → `calc` içindedir; koda sayı GÖMME.

- Sıcak su: `litre = kişi × perPerson[tip]` · `enerji = litre × (depoT − şebekeT) × 1,16/1000 kWh`
  `panel kWp = enerji / (güneşSaati × verim)` · depo önerisi `litre × storageFactor`.
- Havuz: `enerji = ton × ΔT × 1,16 × kayıpPayı kWh` · `kWp = enerji / (gün × güneşSaati × verim)`.

## Ziyaretçi sayacı

- `server.js` → `GET /api/visits` (`?hit=1` artırır); sayı `visits.json`'da tutulur
  (`.gitignore`'da — Railway'de yeniden dağıtımda sıfırlanır).
- İstemci oturum başına 1 kez artırır (sessionStorage); API yoksa (ör. GitHub
  Pages aynası) rozet kendini gizler.

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
