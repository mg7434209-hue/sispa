/* SİSPA build — kök TR sayfalarından /en /de /ru sürümlerini üretir.
   Gövde metinleri istemcide assets/js/i18n.js ile çevrilir; burada yalnızca
   lang/title/description/canonical/og, dil değiştirici ve yollar statik gömülür.
   Ayrıca sitemap.xml üretir. Yeni sayfa eklenince PAGES ve META'ya satır ekle. */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const SITE = 'https://sispa.com.tr';
const LANGS = ['en', 'de', 'ru'];
const PAGES = ['index.html', 'avantajlar.html', 'kampanya.html', 'modeller.html',
  'hesaplayici.html', 'oteller.html', 'iletisim.html'];

const LOCALES = { en: 'en_US', de: 'de_DE', ru: 'ru_RU' };

const META = {
  en: {
    'index.html': {
      title: 'SİSPA — Photovoltaic Water Heating Systems | Antalya / Manavgat',
      desc: 'SİSPA — new-generation photovoltaic (PV) water heaters: hot water at mains pressure, a cable to the roof instead of pipes. Launch special: 80L for 17,000 TL.'
    },
    'avantajlar.html': {
      title: 'Benefits & Comparison — SİSPA Photovoltaic Water Heating',
      desc: '8 big advantages of photovoltaic water heaters and a side-by-side comparison with classic vacuum-tube solar systems.'
    },
    'kampanya.html': {
      title: 'Launch Offer: 80L for 17,000 TL — SİSPA',
      desc: 'Grand-opening special: 80L PV water heater for 17,000 TL instead of 22,000 TL (panel not included). Limited stock, countdown running.'
    },
    'modeller.html': {
      title: 'Models & Technical Specs — SİSPA',
      desc: 'PV water heater models from 60L to 200L: DC panel power, tank dimensions, grid backup and recommended use.'
    },
    'hesaplayici.html': {
      title: 'Hot Water & Pool Heating Calculator — SİSPA',
      desc: 'Estimate daily hot water demand for hotels and homes, and the PV panel power needed to heat your pool.'
    },
    'oteller.html': {
      title: 'Hotels & Large Facilities — SİSPA',
      desc: 'Scalable photovoltaic hot water for hotels, aparthotels, dormitories and sports facilities. Backed by GESPA Enerji.'
    },
    'iletisim.html': {
      title: 'Contact — SİSPA | Manavgat / Antalya',
      desc: 'SİSPA contact: +90 543 743 42 09 · gesmarketim@gmail.com · Manavgat/Antalya. Free on-site survey.'
    }
  },
  de: {
    'index.html': {
      title: 'SİSPA — Photovoltaik-Warmwassersysteme | Antalya / Manavgat',
      desc: 'SİSPA — PV-Warmwasserbereiter der neuen Generation: Warmwasser mit Leitungsdruck, ein Kabel statt Rohre aufs Dach. Zur Eröffnung: 80 L für 17.000 TL.'
    },
    'avantajlar.html': {
      title: 'Vorteile & Vergleich — SİSPA Photovoltaik-Warmwasser',
      desc: '8 große Vorteile von PV-Warmwasserbereitern und der direkte Vergleich mit klassischen Vakuumröhren-Anlagen.'
    },
    'kampanya.html': {
      title: 'Eröffnungsaktion: 80 L für 17.000 TL — SİSPA',
      desc: 'Zur Eröffnung: 80-L-PV-Warmwasserbereiter für 17.000 TL statt 22.000 TL (ohne Modul). Begrenzter Vorrat, Countdown läuft.'
    },
    'modeller.html': {
      title: 'Modelle & technische Daten — SİSPA',
      desc: 'PV-Warmwasserbereiter von 60 L bis 200 L: DC-Modulleistung, Tankmaße, Netzunterstützung und Einsatzempfehlung.'
    },
    'hesaplayici.html': {
      title: 'Warmwasser- & Pool-Heizungsrechner — SİSPA',
      desc: 'Täglichen Warmwasserbedarf für Hotels und Wohnungen sowie die nötige PV-Leistung zur Poolheizung berechnen.'
    },
    'oteller.html': {
      title: 'Hotels & große Objekte — SİSPA',
      desc: 'Skalierbares PV-Warmwasser für Hotels, Apartments, Wohnheime und Sportstätten. Mit GESPA-Enerji-Garantie.'
    },
    'iletisim.html': {
      title: 'Kontakt — SİSPA | Manavgat / Antalya',
      desc: 'SİSPA Kontakt: +90 543 743 42 09 · gesmarketim@gmail.com · Manavgat/Antalya. Kostenlose Besichtigung.'
    }
  },
  ru: {
    'index.html': {
      title: 'SİSPA — фотоэлектрические системы нагрева воды | Анталья / Манавгат',
      desc: 'SİSPA — водонагреватели нового поколения на PV-панелях: горячая вода под давлением магистрали, на крышу идёт кабель, а не трубы. К открытию: 80 л за 17 000 TL.'
    },
    'avantajlar.html': {
      title: 'Преимущества и сравнение — SİSPA',
      desc: '8 главных преимуществ PV-водонагревателей и сравнение с классическими вакуумно-трубчатыми системами.'
    },
    'kampanya.html': {
      title: 'Акция открытия: 80 л за 17 000 TL — SİSPA',
      desc: 'К открытию: PV-водонагреватель 80 л за 17 000 TL вместо 22 000 TL (без панели). Лимит по количеству, отсчёт запущен.'
    },
    'modeller.html': {
      title: 'Модели и характеристики — SİSPA',
      desc: 'Модели PV-водонагревателей от 60 до 200 л: мощность панели (DC), размеры бака, поддержка от сети.'
    },
    'hesaplayici.html': {
      title: 'Калькулятор горячей воды и подогрева бассейна — SİSPA',
      desc: 'Рассчитайте суточную потребность в горячей воде для отеля или дома и мощность панелей для подогрева бассейна.'
    },
    'oteller.html': {
      title: 'Отели и крупные объекты — SİSPA',
      desc: 'Масштабируемая PV-система горячей воды для отелей, апартаментов, общежитий и спортобъектов. Под защитой GESPA Enerji.'
    },
    'iletisim.html': {
      title: 'Контакты — SİSPA | Манавгат / Анталья',
      desc: 'SİSPA: +90 543 743 42 09 · gesmarketim@gmail.com · Манавгат/Анталья. Бесплатный выезд на объект.'
    }
  }
};

/* Varlık sürüm damgası: dosya içeriği değişince ?v=hash değişir,
   tarayıcı önbelleği otomatik kırılır. */
const ASSETS = ['assets/css/style.css', 'assets/js/config.js',
  'assets/js/i18n.js', 'assets/js/main.js'];
const ASSET_VER = {};
for (const a of ASSETS) {
  const buf = fs.readFileSync(path.join(ROOT, a));
  ASSET_VER[a] = crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
}
function stampAssets(html) {
  return html.replace(/(assets\/(?:css|js)\/[A-Za-z0-9._-]+)(\?v=[0-9a-f]+)?/g,
    (m, p1) => ASSET_VER[p1] ? p1 + '?v=' + ASSET_VER[p1] : p1);
}

function langSwitch(active, prefix, page) {
  // prefix: '' kökte, '../' dil klasöründe · page: 'index.html' → dizin URL'si
  const target = (pre) => page === 'index.html' ? (pre || './') : pre + page;
  const items = [
    { code: 'tr', label: 'TR', href: target(prefix) },
    { code: 'en', label: 'EN', href: prefix + 'en/' + (page === 'index.html' ? '' : page) },
    { code: 'de', label: 'DE', href: prefix + 'de/' + (page === 'index.html' ? '' : page) },
    { code: 'ru', label: 'RU', href: prefix + 'ru/' + (page === 'index.html' ? '' : page) }
  ];
  return '<nav class="lang-switch" aria-label="Dil / Language">\n        ' +
    items.map(i => `<a href="${i.href}"${i.code === active ? ' class="on"' : ''}>${i.label}</a>`).join('') +
    '\n      </nav>';
}

for (const page of PAGES) {
  const src = fs.readFileSync(path.join(ROOT, page), 'utf8');

  for (const lang of LANGS) {
    const m = META[lang][page];
    let out = src;

    out = out.replace('<html lang="tr">', `<html lang="${lang}">`);
    out = out.replace(/<title>[^<]*<\/title>/, `<title>${m.title}</title>`);
    out = out.replace(/(<meta name="description" content=")[^"]*(">)/, `$1${m.desc}$2`);
    const canonical = page === 'index.html' ? `${SITE}/${lang}/` : `${SITE}/${lang}/${page}`;
    out = out.replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${canonical}$2`);
    out = out.replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${m.title}$2`);
    out = out.replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${m.desc}$2`);
    out = out.replace(/(<meta property="og:locale" content=")[^"]*(">)/, `$1${LOCALES[lang]}$2`);

    // göreli varlık yolları bir üst dizine
    out = out.replace(/href="assets\//g, 'href="../assets/');
    out = out.replace(/src="assets\//g, 'src="../assets/');

    // dil değiştirici
    out = out.replace(/<nav class="lang-switch"[\s\S]*?<\/nav>/, langSwitch(lang, '../', page));

    out = stampAssets(out);

    const dir = path.join(ROOT, lang);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, page), out);
  }

  // kökteki dil değiştiriciyi normalize et (TR aktif) + varlık sürümlerini damgala
  const rootOut = stampAssets(
    src.replace(/<nav class="lang-switch"[\s\S]*?<\/nav>/, langSwitch('tr', '', page))
  );
  if (rootOut !== src) fs.writeFileSync(path.join(ROOT, page), rootOut);
  console.log(`build: ${page} → en/ de/ ru/`);
}

// sitemap.xml
const urls = [];
for (const page of PAGES) {
  for (const pre of ['', 'en/', 'de/', 'ru/']) {
    urls.push(`${SITE}/${pre}${page === 'index.html' ? '' : page}`);
  }
}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
console.log(`build: sitemap.xml (${urls.length} URL)`);
console.log('build: tamamlandı');
