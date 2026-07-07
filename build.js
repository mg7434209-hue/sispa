/* SİSPA build — kök TR index.html'den /en /de /ru sayfalarını üretir.
   Gövde metinleri istemcide assets/js/i18n.js ile çevrilir; burada yalnızca
   lang/title/description/canonical/og ve yol düzeltmeleri statik gömülür. */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE = 'https://sispa.com.tr';
const LANGS = ['en', 'de', 'ru'];

const META = {
  en: {
    locale: 'en_US',
    title: 'SİSPA — Photovoltaic Water Heating Systems | Antalya / Manavgat',
    desc: 'SİSPA — new-generation photovoltaic (PV) water heaters: hot water at mains pressure, a cable to the roof instead of pipes. Launch special: 80L for 17,000 TL.',
    ogTitle: 'SİSPA — New-Generation Photovoltaic Water Heating',
    ogDesc: 'Electricity from the sun, hot water from the tap. Launch special: 80L water heater for 17,000 TL instead of 22,000 TL — first 50 units.'
  },
  de: {
    locale: 'de_DE',
    title: 'SİSPA — Photovoltaik-Warmwassersysteme | Antalya / Manavgat',
    desc: 'SİSPA — Photovoltaik-Warmwasserbereiter der neuen Generation: Warmwasser mit Leitungsdruck, ein Kabel statt Rohre aufs Dach. Zur Eröffnung: 80 L für 17.000 TL.',
    ogTitle: 'SİSPA — Photovoltaik-Warmwasser der neuen Generation',
    ogDesc: 'Strom von der Sonne, warmes Wasser aus dem Hahn. Eröffnungsangebot: 80-L-Gerät für 17.000 TL statt 22.000 TL — nur die ersten 50 Stück.'
  },
  ru: {
    locale: 'ru_RU',
    title: 'SİSPA — фотоэлектрические системы нагрева воды | Анталья / Манавгат',
    desc: 'SİSPA — водонагреватели нового поколения на фотоэлектрических панелях: горячая вода под давлением магистрали, на крышу идёт кабель, а не трубы. К открытию: 80 л за 17 000 TL.',
    ogTitle: 'SİSPA — нагрев воды нового поколения',
    ogDesc: 'Электричество от солнца, горячая вода из крана. Акция к открытию: водонагреватель 80 л за 17 000 TL вместо 22 000 TL — первые 50 шт.'
  }
};

function langSwitch(active, prefix) {
  // prefix: '' kökte, '../' dil klasöründe
  const items = [
    { code: 'tr', label: 'TR', href: prefix || './' },
    { code: 'en', label: 'EN', href: prefix + 'en/' },
    { code: 'de', label: 'DE', href: prefix + 'de/' },
    { code: 'ru', label: 'RU', href: prefix + 'ru/' }
  ];
  return '<nav class="lang-switch" aria-label="Dil / Language">\n        ' +
    items.map(i => `<a href="${i.href}"${i.code === active ? ' class="on"' : ''}>${i.label}</a>`).join('') +
    '\n      </nav>';
}

const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

for (const lang of LANGS) {
  const m = META[lang];
  let out = src;

  out = out.replace('<html lang="tr">', `<html lang="${lang}">`);
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${m.title}</title>`);
  out = out.replace(/(<meta name="description" content=")[^"]*(">)/, `$1${m.desc}$2`);
  out = out.replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${SITE}/${lang}/$2`);
  out = out.replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${m.ogTitle}$2`);
  out = out.replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${m.ogDesc}$2`);
  out = out.replace(/(<meta property="og:locale" content=")[^"]*(">)/, `$1${m.locale}$2`);

  // göreli varlık yolları bir üst dizine
  out = out.replace(/href="assets\//g, 'href="../assets/');
  out = out.replace(/src="assets\//g, 'src="../assets/');

  // dil değiştirici
  out = out.replace(/<nav class="lang-switch"[\s\S]*?<\/nav>/, langSwitch(lang, '../'));

  const dir = path.join(ROOT, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), out);
  console.log(`build: ${lang}/index.html`);
}

// kökteki dil değiştiriciyi de normalize et (TR aktif)
const rootOut = src.replace(/<nav class="lang-switch"[\s\S]*?<\/nav>/, langSwitch('tr', ''));
if (rootOut !== src) fs.writeFileSync(path.join(ROOT, 'index.html'), rootOut);
console.log('build: tamamlandı');
