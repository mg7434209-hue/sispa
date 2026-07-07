# SİSPA — Su Isıtma Sistemleri Pazarlama

Yeni nesil **fotovoltaik (PV) su ısıtma sistemleri** lansman sitesi.
Saf HTML + CSS + Vanilla JS, tek sayfalık statik site.

## Yapı

```
index.html          Ana (lansman) sayfası — TR
assets/css/style.css
assets/js/main.js   Mobil menü, scroll reveal, sayaçlar
assets/img/         Logo (SVG) + üretici kataloğundan optimize ürün görselleri
server.js           Küçük Node statik sunucu (Railway / yerel)
```

## Çalıştırma

```bash
npm start   # http://localhost:3000
```

Harici bağımlılık yoktur; `npm install` gerekmez.

## İçerik kaynakları

- Ürün teknik verileri (60L–200L modeller, DC/AC güçler, tank ölçüleri):
  Sinospring PV Water Heater kataloğu.
- Karşılaştırma tablosu: SİSPA "Fotovoltaik vs Klasik" bilgilendirme görseli.
- İletişim bilgileri GESPA Enerji ile ortaktır (SİSPA, GESPA Enerji markasıdır):
  tel/WhatsApp 0543 743 42 09 · gesmarketim@gmail.com · Manavgat/Antalya.

## Notlar

- Sayfadaki fiyat yok; fiyatlar WhatsApp/telefon üzerinden veriliyor.
- Logo `assets/img/logo.svg` içinde vektörel olarak yeniden çizilmiştir;
  kurumsal logonun basılı orijinali gelirse bu dosya değiştirilebilir.
