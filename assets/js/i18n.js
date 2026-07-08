/* SİSPA i18n — TR kaynak, EN/DE/RU çevirileri.
   Sayfa <html lang="…"> değerine göre data-i18n içeriklerini değiştirir.
   Dil sayfaları build.js ile üretilir; bu sözlük tek doğru kaynaktır. */
(function () {
  'use strict';

  var DICT = {
    /* ---- Topbar ---- */
    'topbar.badge': { en: 'LAUNCH OFFER', de: 'AKTION', ru: 'АКЦИЯ' },
    'topbar.text': {
      en: 'Launch special: <strong>80L water heater — 17,000 TL instead of 22,000 TL</strong> — only <span data-stock-remaining>12</span> left!',
      de: 'Zur Eröffnung: <strong>80-L-Warmwasserbereiter für 17.000 TL statt 22.000 TL</strong> — nur noch <span data-stock-remaining>12</span> Stück!',
      ru: 'К открытию: <strong>водонагреватель 80 л — 17 000 TL вместо 22 000 TL</strong> — осталось <span data-stock-remaining>12</span> шт.!'
    },
    'topbar.link': { en: 'See the offer →', de: 'Zum Angebot →', ru: 'Смотреть →' },

    /* ---- Nav ---- */
    'nav.how': { en: 'How It Works', de: 'Funktionsweise', ru: 'Как работает' },
    'nav.adv': { en: 'Benefits', de: 'Vorteile', ru: 'Преимущества' },
    'nav.campaign': { en: 'Launch Offer', de: 'Aktion', ru: 'Акция' },
    'nav.compare': { en: 'Comparison', de: 'Vergleich', ru: 'Сравнение' },
    'nav.models': { en: 'Models', de: 'Modelle', ru: 'Модели' },
    'nav.contact': { en: 'Contact', de: 'Kontakt', ru: 'Контакты' },
    'nav.cta': { en: 'Get a Quote', de: 'Angebot anfordern', ru: 'Получить расчёт' },
    'nav.calc': { en: 'Calculator', de: 'Rechner', ru: 'Калькулятор' },
    'nav.hotels': { en: 'Hotels & Facilities', de: 'Hotels & Objekte', ru: 'Отели и объекты' },

    /* ---- Ana sayfa ---- */
    'home.campCta': { en: 'View the Offer →', de: 'Zum Angebot →', ru: 'Смотреть акцию →' },
    'home.advMore': {
      en: 'See all benefits and the comparison →',
      de: 'Alle Vorteile und den Vergleich ansehen →',
      ru: 'Все преимущества и сравнение →'
    },
    'foot.visits': { en: 'visitors', de: 'Besucher', ru: 'посетителей' },

    /* ---- Hero ---- */
    'hero.badge': {
      en: 'LAUNCH — the new generation of water heating',
      de: 'ERÖFFNUNG — Warmwasser der neuen Generation',
      ru: 'ОТКРЫТИЕ — новое поколение нагрева воды'
    },
    'hero.h1': {
      en: 'Electricity from the sun,<br><em>hot water from the tap.</em>',
      de: 'Strom von der Sonne,<br><em>warmes Wasser aus dem Hahn.</em>',
      ru: 'Электричество от солнца,<br><em>горячая вода из крана.</em>'
    },
    'hero.lead': {
      en: 'Meet SİSPA: the photovoltaic panel on your roof generates electricity, and the smart tank inside your home heats the water. <strong>Only a cable goes to the roof — no pipes</strong>: freezing, limescale, leaks and pressure problems become history.',
      de: 'Lernen Sie SİSPA kennen: Das Photovoltaikmodul auf dem Dach erzeugt Strom, der smarte Speicher im Haus erwärmt das Wasser. <strong>Aufs Dach führt nur ein Kabel — kein Rohr</strong>: Frost, Kalk, Leckagen und Druckprobleme gehören der Vergangenheit an.',
      ru: 'Знакомьтесь: SİSPA. Фотоэлектрическая панель на крыше вырабатывает электричество, а умный бак в доме нагревает воду. <strong>На крышу идёт только кабель — без труб</strong>: замерзание, накипь, протечки и слабый напор остаются в прошлом.'
    },
    'hero.cta1': { en: 'Request a Free Survey', de: 'Kostenlose Besichtigung', ru: 'Бесплатный выезд замерщика' },
    'hero.cta2': { en: 'Launch Offer', de: 'Eröffnungsangebot', ru: 'Акция открытия' },
    'hero.stat1': { en: 'years+ panel lifetime', de: 'Jahre+ Modul-Lebensdauer', ru: 'лет+ срок службы панели' },
    'hero.stat2': { en: 'L to 200L model range', de: 'L bis 200 L Modellpalette', ru: 'л — модели до 200 л' },
    'hero.stat3': { en: '% mains water pressure', de: '% Leitungsdruck', ru: '% давление магистрали' },
    'hero.chip1': { en: 'TÜV • CE • UL certified production', de: 'TÜV • CE • UL zertifizierte Produktion', ru: 'Производство с сертификатами TÜV • CE • UL' },
    'hero.chip2': { en: 'Enamel tank + magnesium anode', de: 'Emaille-Tank + Magnesiumanode', ru: 'Эмалированный бак + магниевый анод' },

    /* ---- Nasıl çalışır ---- */
    'how.kicker': { en: 'The System', de: 'Das System', ru: 'Система' },
    'how.h2': { en: 'How does it work?', de: 'Wie funktioniert es?', ru: 'Как это работает?' },
    'how.p': {
      en: 'Unlike classic solar thermal systems, it is <strong>electricity, not water</strong> that travels across your roof. Three simple steps:',
      de: 'Anders als bei klassischer Solarthermie fließt über das Dach <strong>Strom statt Wasser</strong>. Drei einfache Schritte:',
      ru: 'В отличие от классических солнечных систем, по крыше передаётся <strong>электричество, а не вода</strong>. Три простых шага:'
    },
    'how.s1h': { en: 'The panel generates power', de: 'Das Modul erzeugt Strom', ru: 'Панель вырабатывает ток' },
    'how.s1p': {
      en: 'The rooftop photovoltaic module produces DC electricity all day. No pipes, no circulation, no antifreeze.',
      de: 'Das PV-Modul auf dem Dach liefert den ganzen Tag Gleichstrom. Keine Rohre, keine Umwälzung, kein Frostschutz.',
      ru: 'Фотоэлектрический модуль на крыше весь день производит постоянный ток. Без труб, без циркуляции, без антифриза.'
    },
    'how.s2h': { en: 'The smart tank heats the water', de: 'Der smarte Speicher erwärmt das Wasser', ru: 'Умный бак нагревает воду' },
    'how.s2p': {
      en: 'The enamel tank next to the point of use heats water with panel electricity and automatically switches to grid support on cloudy days.',
      de: 'Der Emaille-Speicher nahe der Zapfstelle erwärmt das Wasser mit Solarstrom und schaltet an trüben Tagen automatisch auf Netzbetrieb um.',
      ru: 'Эмалированный бак рядом с точкой водоразбора греет воду солнечным электричеством, а в пасмурные дни автоматически подключает сеть.'
    },
    'how.s3h': { en: 'Instant hot water', de: 'Sofort warmes Wasser', ru: 'Мгновенно горячая вода' },
    'how.s3p': {
      en: 'Water is heated at mains pressure right where it is used: strong flow even on upper floors, hot water without waiting.',
      de: 'Das Wasser wird mit Leitungsdruck direkt am Verbrauchsort erwärmt: kräftiger Durchfluss auch in oberen Etagen, warmes Wasser ohne Wartezeit.',
      ru: 'Вода нагревается под давлением магистрали прямо в месте использования: сильный напор даже на верхних этажах, горячая вода без ожидания.'
    },

    /* ---- Avantajlar ---- */
    'adv.kicker': { en: 'Why SİSPA?', de: 'Warum SİSPA?', ru: 'Почему SİSPA?' },
    'adv.h2': { en: '8 big advantages', de: '8 große Vorteile', ru: '8 главных преимуществ' },
    'adv.p': {
      en: 'New-generation photovoltaic water heating eliminates every headache of classic systems.',
      de: 'Photovoltaische Warmwasserbereitung der neuen Generation beseitigt alle Schwächen klassischer Systeme.',
      ru: 'Фотоэлектрический нагрев воды нового поколения устраняет все недостатки классических систем.'
    },
    'adv.a1h': { en: 'Mains-pressure comfort', de: 'Komfort mit Leitungsdruck', ru: 'Комфорт при давлении сети' },
    'adv.a1p': { en: 'No roof tank; strong, steady flow on every floor.', de: 'Kein Dachspeicher; kräftiger, gleichmäßiger Durchfluss auf jeder Etage.', ru: 'Без бака на крыше; сильный и ровный напор на каждом этаже.' },
    'adv.a2h': { en: 'Free solar energy', de: 'Kostenlose Sonnenenergie', ru: 'Бесплатная энергия солнца' },
    'adv.a2p': { en: 'Zero fuel cost with electricity generated all day long.', de: 'Null Energiekosten dank ganztägig erzeugtem Solarstrom.', ru: 'Нулевые затраты на топливо — электричество вырабатывается весь день.' },
    'adv.a3h': { en: 'A cable, not a pipe', de: 'Kabel statt Rohr', ru: 'Кабель вместо труб' },
    'adv.a3p': { en: 'Only a cable goes to the roof; no hidden pipe-leak risk.', de: 'Aufs Dach führt nur ein Kabel; kein Risiko versteckter Rohrleckagen.', ru: 'На крышу идёт только кабель; нет риска скрытых протечек труб.' },
    'adv.a4h': { en: 'No roof load', de: 'Keine Dachlast', ru: 'Без нагрузки на крышу' },
    'adv.a4p': { en: 'Just a lightweight panel instead of a 200-300 kg full tank.', de: 'Nur ein leichtes Modul statt eines 200-300 kg schweren, vollen Tanks.', ru: 'Лёгкая панель вместо полного бака весом 200-300 кг.' },
    'adv.a5h': { en: 'Zero freezing risk', de: 'Kein Frostrisiko', ru: 'Нулевой риск замерзания' },
    'adv.a5p': { en: 'No water on the roof, so no antifreeze or winter maintenance.', de: 'Kein Wasser auf dem Dach — kein Frostschutzmittel, keine Winterwartung.', ru: 'На крыше нет воды — не нужны антифриз и зимнее обслуживание.' },
    'adv.a6h': { en: 'Long service life', de: 'Lange Lebensdauer', ru: 'Долгий срок службы' },
    'adv.a6p': { en: 'Panels last 25-30 years; enamel tank with magnesium anode protection.', de: 'Module halten 25-30 Jahre; Emaille-Tank mit Magnesiumanoden-Schutz.', ru: 'Панели служат 25-30 лет; эмалированный бак с защитой магниевым анодом.' },
    'adv.a7h': { en: 'Smart control', de: 'Smarte Steuerung', ru: 'Умное управление' },
    'adv.a7p': { en: 'Digital temperature control; automatic grid support in cloudy weather.', de: 'Digitale Temperaturregelung; automatische Netzunterstützung bei Bewölkung.', ru: 'Цифровое управление температурой; автоматическая поддержка от сети в пасмурную погоду.' },
    'adv.a8h': { en: 'Low carbon', de: 'Wenig CO₂', ru: 'Низкий углеродный след' },
    'adv.a8p': { en: 'Sun-heated water every day saves tonnes of CO₂ every year.', de: 'Täglich solar erwärmtes Wasser spart jedes Jahr Tonnen an CO₂.', ru: 'Вода, нагретая солнцем, экономит тонны CO₂ ежегодно.' },

    /* ---- Kampanya ---- */
    'camp.kicker': { en: 'Launch Campaign', de: 'Eröffnungsaktion', ru: 'Акция к открытию' },
    'camp.h2': {
      en: 'Grand-opening special: 80L model, <em>5,000 TL off</em>',
      de: 'Zur Eröffnung: 80-L-Modell, <em>5.000 TL Rabatt</em>',
      ru: 'К открытию: модель 80 л со <em>скидкой 5 000 TL</em>'
    },
    'camp.p': {
      en: 'We are celebrating the launch of SİSPA: our most popular 80-litre model at a special launch price for the first 50 units.',
      de: 'Wir feiern den Start von SİSPA: das beliebteste 80-Liter-Modell zum Aktionspreis — nur für die ersten 50 Stück.',
      ru: 'Мы празднуем открытие SİSPA: самая популярная модель на 80 литров по специальной цене — только первые 50 штук.'
    },
    'camp.stock': {
      en: 'Only <span data-stock-remaining>12</span> left!',
      de: 'Nur noch <span data-stock-remaining>12</span> Stück!',
      ru: 'Осталось <span data-stock-remaining>12</span> шт.!'
    },
    'camp.endsIn': { en: 'Offer ends in:', de: 'Aktion endet in:', ru: 'До конца акции:' },
    'camp.d': { en: 'days', de: 'Tage', ru: 'дней' },
    'camp.h': { en: 'hours', de: 'Std.', ru: 'часов' },
    'camp.m': { en: 'minutes', de: 'Min.', ru: 'минут' },
    'camp.s': { en: 'seconds', de: 'Sek.', ru: 'секунд' },
    'camp.ended': {
      en: 'The launch offer has ended — contact us for current pricing.',
      de: 'Die Eröffnungsaktion ist beendet — kontaktieren Sie uns für aktuelle Preise.',
      ru: 'Акция завершена — свяжитесь с нами, чтобы узнать актуальную цену.'
    },
    'camp.name': { en: '80L Photovoltaic Water Heater', de: '80-L-Photovoltaik-Warmwasserbereiter', ru: 'Фотоэлектрический водонагреватель 80 л' },
    'camp.sub': {
      en: 'Enamel tank + magnesium anode · 600W DC input · grid backup · <strong>panel not included</strong>',
      de: 'Emaille-Tank + Magnesiumanode · 600 W DC-Eingang · Netzunterstützung · <strong>ohne Modul</strong>',
      ru: 'Эмалированный бак + магниевый анод · вход 600 Вт DC · поддержка от сети · <strong>без панели</strong>'
    },
    'camp.oldLabel': { en: 'List price', de: 'Listenpreis', ru: 'Цена по прайсу' },
    'camp.newLabel': { en: 'Launch price', de: 'Aktionspreis', ru: 'Цена по акции' },
    'camp.save': { en: '5,000 TL<br>off', de: '5.000 TL<br>Rabatt', ru: 'Скидка<br>5 000 TL' },
    'camp.meter': {
      en: '<strong>Only <span data-stock-remaining>12</span> left</strong> of the <span data-stock-total>50</span>-unit campaign stock — back to list price once sold out',
      de: 'Vom Aktionskontingent (<span data-stock-total>50</span> Stück) sind <strong>nur noch <span data-stock-remaining>12</span></strong> übrig — danach gilt wieder der Listenpreis',
      ru: 'Из <span data-stock-total>50</span> акционных штук <strong>осталось <span data-stock-remaining>12</span></strong> — после распродажи вернётся цена по прайсу'
    },
    'camp.t1': {
      en: 'Ideal for 2-3 person households (compact 430 × 893 mm tank)',
      de: 'Ideal für 2-3-Personen-Haushalte (kompakter Tank, 430 × 893 mm)',
      ru: 'Идеально для семьи из 2-3 человек (компактный бак 430 × 893 мм)'
    },
    'camp.t2': { en: 'Free on-site survey and capacity sizing', de: 'Kostenlose Besichtigung und Kapazitätsberechnung', ru: 'Бесплатный выезд и расчёт мощности' },
    'camp.t3': {
      en: 'Panel and installation are quoted separately after the survey',
      de: 'Modul und Montage werden nach der Besichtigung separat angeboten',
      ru: 'Панель и монтаж рассчитываются отдельно после осмотра'
    },
    'camp.cta': { en: 'Claim the Offer', de: 'Angebot sichern', ru: 'Воспользоваться акцией' },
    'camp.fine': {
      en: 'Offer valid while stocks last; the photovoltaic panel is not included in the price. Prices include VAT and may change without notice.',
      de: 'Aktion nur solange der Vorrat reicht; das PV-Modul ist im Preis nicht enthalten. Preise inkl. MwSt.; Änderungen vorbehalten.',
      ru: 'Акция действует до исчерпания запаса; фотоэлектрическая панель в цену не входит. Цены включают НДС и могут меняться без уведомления.'
    },

    /* ---- Uzman ekip ---- */
    'team.kicker': { en: 'Expert Team', de: 'Fachteam', ru: 'Профессиональная команда' },
    'team.h2': {
      en: 'Proper installation, <em>expert team</em>',
      de: 'Fachgerechte Montage, <em>erfahrenes Team</em>',
      ru: 'Правильный монтаж, <em>опытная команда</em>'
    },
    'team.p': {
      en: 'The secret to efficiency in photovoltaic water heating is proper installation. SİSPA teams handle the whole process from survey to commissioning, with installations that fit your roof and plumbing and fully comply with standards.',
      de: 'Das Geheimnis effizienter PV-Warmwasserbereitung ist die fachgerechte Montage. Die SİSPA-Teams übernehmen den gesamten Prozess von der Besichtigung bis zur Inbetriebnahme — passend zu Dach und Installation, normgerecht ausgeführt.',
      ru: 'Секрет эффективности PV-нагрева воды — правильный монтаж. Команды SİSPA берут на себя весь процесс от осмотра до пуска: установка с учётом вашей крыши и разводки, в полном соответствии со стандартами.'
    },
    'team.t1': { en: 'Trained, experienced installation crew', de: 'Geschultes, erfahrenes Montageteam', ru: 'Обученная и опытная монтажная бригада' },
    'team.t2': {
      en: 'Mounting system matched to the roof type, watertight penetrations',
      de: 'Zum Dachtyp passende Unterkonstruktion, dichte Durchführungen',
      ru: 'Крепёж под тип крыши, герметичные проходы'
    },
    'team.t3': { en: 'DC wiring and protection to standards', de: 'Normgerechte DC-Verkabelung und Schutz', ru: 'Кабели DC и защита по стандартам' },
    'team.t4': {
      en: 'Commissioning, user training and workmanship warranty',
      de: 'Inbetriebnahme, Einweisung und Gewährleistung auf die Montage',
      ru: 'Пуск, обучение и гарантия на монтажные работы'
    },
    'team.c1': {
      en: 'Safe, standards-compliant panel installation on the roof',
      de: 'Sichere, normgerechte Panelmontage auf dem Dach',
      ru: 'Безопасный монтаж панелей на крыше по стандартам'
    },
    'team.c2': {
      en: 'The SİSPA field team at your door — survey to installation, one hand',
      de: 'Das SİSPA-Team vor Ihrer Tür — von der Besichtigung bis zur Montage aus einer Hand',
      ru: 'Выездная команда SİSPA у вашего порога — от осмотра до монтажа из одних рук'
    },

    /* ---- Vitrin ---- */
    'show.c1': {
      en: '<strong>Blue-Gold enamel inner tank</strong><br>Corrosion- and scale-resistant, with a thick magnesium anode.',
      de: '<strong>Blue-Gold-Emaille-Innentank</strong><br>Korrosions- und kalkbeständig, mit starker Magnesiumanode.',
      ru: '<strong>Внутренний бак с эмалью Blue-Gold</strong><br>Устойчив к коррозии и накипи, с усиленным магниевым анодом.'
    },
    'show.c2': {
      en: '<strong>Heating at the point of use</strong><br>Hot water does not cool in pipes; it flows instantly from the tap.',
      de: '<strong>Erwärmung am Verbrauchsort</strong><br>Warmwasser kühlt nicht in Leitungen ab; es kommt sofort aus dem Hahn.',
      ru: '<strong>Нагрев в точке использования</strong><br>Горячая вода не остывает в трубах — идёт из крана сразу.'
    },
    'show.c3': {
      en: '<strong>Fits every roof</strong><br>Villa, apartment, balcony… flexible installation options.',
      de: '<strong>Passt auf jedes Dach</strong><br>Villa, Wohnung, Balkon… flexible Montageoptionen.',
      ru: '<strong>Подходит для любой крыши</strong><br>Вилла, квартира, балкон… гибкие варианты монтажа.'
    },

    /* ---- Karşılaştırma ---- */
    'comp.kicker': { en: 'The Difference', de: 'Der Unterschied', ru: 'Разница' },
    'comp.h2': { en: 'Photovoltaic vs classic solar water heating', de: 'Photovoltaik vs. klassische Solaranlage', ru: 'Фотоэлектрика против классических гелиосистем' },
    'comp.p': {
      en: 'New-generation PV water heater compared with the classic vacuum-tube system:',
      de: 'PV-Warmwasserbereiter der neuen Generation im Vergleich zum klassischen Vakuumröhren-System:',
      ru: 'Сравнение PV-водонагревателя нового поколения с классической вакуумно-трубчатой системой:'
    },
    'comp.hPv': { en: 'Photovoltaic Water Heater <span>SİSPA</span>', de: 'Photovoltaik-Warmwasserbereiter <span>SİSPA</span>', ru: 'PV-водонагреватель <span>SİSPA</span>' },
    'comp.hCl': { en: 'Classic Solar Thermal <span>vacuum tube</span>', de: 'Klassische Solarthermie <span>Vakuumröhren</span>', ru: 'Классическая гелиосистема <span>вакуумные трубки</span>' },
    'comp.r1': { en: 'Water pressure', de: 'Wasserdruck', ru: 'Давление воды' },
    'comp.r1y': { en: 'Strong flow on every floor at mains pressure', de: 'Kräftiger Durchfluss auf jeder Etage dank Leitungsdruck', ru: 'Сильный напор на каждом этаже — давление магистрали' },
    'comp.r1n': { en: 'Weak gravity pressure from the roof tank, feeble flow upstairs', de: 'Schwacher Druck aus dem Dachtank, dünner Strahl in oberen Etagen', ru: 'Слабый напор из бака на крыше, на верхних этажах едва течёт' },
    'comp.r2': { en: 'Hot water comfort', de: 'Warmwasserkomfort', ru: 'Комфорт горячей воды' },
    'comp.r2y': { en: 'Heated at the point of use, arrives hot instantly', de: 'Erwärmung am Verbrauchsort, sofort heiß', ru: 'Нагрев у точки использования — горячая вода сразу' },
    'comp.r2n': { en: 'Cools on the way down; pipe water runs to waste', de: 'Kühlt auf dem Weg nach unten ab; Leitungswasser läuft ungenutzt weg', ru: 'Остывает по пути с крыши; вода из труб уходит впустую' },
    'comp.r3': { en: 'Leak risk', de: 'Leckagerisiko', ru: 'Риск протечек' },
    'comp.r3y': { en: 'A cable, not a pipe, goes to the roof — no leak risk', de: 'Aufs Dach führt ein Kabel statt Rohr — kein Leckagerisiko', ru: 'На крышу идёт кабель, а не труба — протечек нет' },
    'comp.r3n': { en: 'Hidden pipe leaks: inflated bills, damp, renovation costs', de: 'Versteckte Rohrlecks: hohe Rechnungen, Feuchtigkeit, Sanierungskosten', ru: 'Скрытые протечки труб: большие счета, сырость, ремонт' },
    'comp.r4': { en: 'Roof load', de: 'Dachlast', ru: 'Нагрузка на крышу' },
    'comp.r4y': { en: 'Only a lightweight panel — no structural risk', de: 'Nur ein leichtes Modul — kein statisches Risiko', ru: 'Только лёгкая панель — без риска для конструкции' },
    'comp.r4n': { en: 'A full 200-300 kg tank — constant load and risk', de: 'Voller Tank mit 200-300 kg — dauerhafte Last und Risiko', ru: 'Полный бак 200-300 кг — постоянная нагрузка и риск' },
    'comp.r5': { en: 'Freezing', de: 'Frost', ru: 'Замерзание' },
    'comp.r5y': { en: 'No water on the roof, no freezing — antifreeze-free', de: 'Kein Wasser auf dem Dach, kein Frost — ohne Frostschutzmittel', ru: 'На крыше нет воды — не замерзает, антифриз не нужен' },
    'comp.r5n': { en: 'Freezing risk in winter, antifreeze maintenance required', de: 'Frostgefahr im Winter, Frostschutz-Wartung nötig', ru: 'Зимой риск замерзания, нужен антифриз и обслуживание' },
    'comp.r6': { en: 'Lifetime & maintenance', de: 'Lebensdauer & Wartung', ru: 'Срок службы и уход' },
    'comp.r6y': { en: 'Panel 25-30 years; enamel tank + anode protection', de: 'Modul 25-30 Jahre; Emaille-Tank + Anodenschutz', ru: 'Панель 25-30 лет; эмалированный бак + анодная защита' },
    'comp.r6n': { en: 'Collector 10-15 years; tube breakage and limescale issues', de: 'Kollektor 10-15 Jahre; Röhrenbruch und Verkalkung', ru: 'Коллектор 10-15 лет; трубки бьются, образуется накипь' },

    /* ---- Modeller ---- */
    'mod.kicker': { en: 'Product Range', de: 'Produktpalette', ru: 'Модельный ряд' },
    'mod.h2': { en: 'A model for every home', de: 'Ein Modell für jedes Zuhause', ru: 'Модель для каждого дома' },
    'mod.p': {
      en: 'Horizontal (60-100L) and vertical (120-200L) options with internationally certified <em>(TÜV / CE / UL / UN38.3)</em> production.',
      de: 'Horizontale (60-100 L) und vertikale (120-200 L) Varianten, international zertifizierte Produktion <em>(TÜV / CE / UL / UN38.3)</em>.',
      ru: 'Горизонтальные (60-100 л) и вертикальные (120-200 л) варианты; производство с международными сертификатами <em>(TÜV / CE / UL / UN38.3)</em>.'
    },
    'mod.c1': { en: 'Capacity', de: 'Volumen', ru: 'Объём' },
    'mod.c2': { en: 'Panel (DC) Power', de: 'Modul-Leistung (DC)', ru: 'Мощность панели (DC)' },
    'mod.c3': { en: 'Tank Size (mm)', de: 'Tankmaße (mm)', ru: 'Размер бака (мм)' },
    'mod.c4': { en: 'Grid Backup (AC)', de: 'Netzunterstützung (AC)', ru: 'Поддержка от сети (AC)' },
    'mod.c5': { en: 'Inner Tank', de: 'Innentank', ru: 'Внутренний бак' },
    'mod.c6': { en: 'Recommended For', de: 'Empfohlen für', ru: 'Рекомендуется' },
    'mod.promo': { en: 'OFFER · 17,000 TL', de: 'AKTION · 17.000 TL', ru: 'АКЦИЯ · 17 000 TL' },
    'mod.enamel1': { en: 'Enamel', de: 'Emaille', ru: 'Эмаль' },
    'mod.enamel2': { en: 'Enamel', de: 'Emaille', ru: 'Эмаль' },
    'mod.enamel3': { en: 'Enamel', de: 'Emaille', ru: 'Эмаль' },
    'mod.enamel4': { en: 'Enamel', de: 'Emaille', ru: 'Эмаль' },
    'mod.enamel5': { en: 'Enamel', de: 'Emaille', ru: 'Эмаль' },
    'mod.enamel6': { en: 'Enamel', de: 'Emaille', ru: 'Эмаль' },
    'mod.u1': { en: '1-2 people', de: '1-2 Personen', ru: '1-2 человека' },
    'mod.u2': { en: '2-3 people', de: '2-3 Personen', ru: '2-3 человека' },
    'mod.u3': { en: '3-4 people', de: '3-4 Personen', ru: '3-4 человека' },
    'mod.u4': { en: '4-5 people', de: '4-5 Personen', ru: '4-5 человек' },
    'mod.u5': { en: '5-6 people', de: '5-6 Personen', ru: '5-6 человек' },
    'mod.u6': { en: 'Large family / facility', de: 'Großfamilie / Gewerbe', ru: 'Большая семья / объект' },
    'mod.proj1': { en: 'Project-based', de: 'Projektbezogen', ru: 'По проекту' },
    'mod.proj2': { en: 'Project-based', de: 'Projektbezogen', ru: 'По проекту' },
    'mod.vert': { en: 'Vertical series', de: 'Vertikale Serie', ru: 'Вертикальная серия' },
    'mod.note': {
      en: 'Call or message us on WhatsApp for prices and stock — the survey and capacity sizing are <strong>free</strong>.',
      de: 'Rufen Sie an oder schreiben Sie per WhatsApp für Preise und Verfügbarkeit — Besichtigung und Auslegung sind <strong>kostenlos</strong>.',
      ru: 'Звоните или пишите в WhatsApp о ценах и наличии — выезд и расчёт мощности <strong>бесплатны</strong>.'
    },
    'mod.cta': { en: 'Get Pricing', de: 'Preise anfragen', ru: 'Узнать цены' },
    'mod.calcLink': { en: 'Calculate Your Needs', de: 'Bedarf berechnen', ru: 'Рассчитать потребность' },

    /* ---- Hesaplayıcı ---- */
    'calcp.kicker': { en: 'Tools', de: 'Werkzeuge', ru: 'Инструменты' },
    'calcp.h2': {
      en: 'Hot water &amp; pool calculator',
      de: 'Warmwasser- &amp; Pool-Rechner',
      ru: 'Калькулятор горячей воды и бассейна'
    },
    'calcp.p': {
      en: 'Quick pre-sizing for hotels, homes and pools. Results are estimates; exact sizing is done during the free survey.',
      de: 'Schnelle Vorauslegung für Hotels, Wohnungen und Pools. Ergebnisse sind Richtwerte; die genaue Auslegung erfolgt bei der kostenlosen Besichtigung.',
      ru: 'Быстрый предварительный расчёт для отелей, домов и бассейнов. Результаты ориентировочны; точный расчёт — при бесплатном выезде.'
    },
    'hw.h3': { en: 'Daily Hot Water Demand', de: 'Täglicher Warmwasserbedarf', ru: 'Суточная потребность в горячей воде' },
    'hw.sub': {
      en: 'Demand estimate by number of users for hotels, aparthotels, homes and sports facilities.',
      de: 'Bedarfsermittlung nach Personenzahl für Hotels, Apartments, Wohnungen und Sportstätten.',
      ru: 'Расчёт по числу пользователей для отелей, апартаментов, домов и спортобъектов.'
    },
    'hw.people': { en: 'Daily number of users (people)', de: 'Nutzer pro Tag (Personen)', ru: 'Пользователей в день (чел.)' },
    'hw.type': { en: 'Usage type', de: 'Nutzungsart', ru: 'Тип использования' },
    'hw.tOtel': { en: 'Hotel / guesthouse', de: 'Hotel / Pension', ru: 'Отель / пансион' },
    'hw.tKonut': { en: 'Home / apartment', de: 'Wohnung / Apartment', ru: 'Дом / квартира' },
    'hw.tSpor': { en: 'Sports facility / showers', de: 'Sportstätte / Duschen', ru: 'Спортобъект / душевые' },
    'hw.rLiters': { en: 'Daily hot water demand', de: 'Täglicher Warmwasserbedarf', ru: 'Суточная потребность' },
    'hw.rEnergy': { en: 'Daily energy required', de: 'Täglicher Energiebedarf', ru: 'Требуемая энергия в сутки' },
    'hw.rKwp': { en: 'Recommended panel power', de: 'Empfohlene Modulleistung', ru: 'Рекомендуемая мощность панелей' },
    'hw.rPanels': { en: 'Number of panels', de: 'Anzahl Module', ru: 'Количество панелей' },
    'hw.rStorage': { en: 'Recommended tank capacity', de: 'Empfohlenes Speichervolumen', ru: 'Рекомендуемый объём бака' },
    'hw.rPer': { en: 'Per-person daily use', de: 'Verbrauch pro Person/Tag', ru: 'Расход на человека в сутки' },
    'pl.h3': { en: 'Pool Heating', de: 'Poolheizung', ru: 'Подогрев бассейна' },
    'pl.sub': {
      en: 'Photovoltaic panel power needed to bring pool water to the target temperature.',
      de: 'Benötigte PV-Modulleistung, um das Poolwasser auf Zieltemperatur zu bringen.',
      ru: 'Мощность PV-панелей, чтобы нагреть воду бассейна до нужной температуры.'
    },
    'pl.tons': { en: 'Water volume (tonnes / m³)', de: 'Wassermenge (Tonnen / m³)', ru: 'Объём воды (тонн / м³)' },
    'pl.start': { en: 'Starting temperature (°C)', de: 'Starttemperatur (°C)', ru: 'Начальная температура (°C)' },
    'pl.target': { en: 'Target temperature (°C)', de: 'Zieltemperatur (°C)', ru: 'Целевая температура (°C)' },
    'pl.days': { en: 'Heating time (days)', de: 'Aufheizdauer (Tage)', ru: 'Время нагрева (дней)' },
    'pl.rEnergy': { en: 'Heat energy required (incl. losses)', de: 'Benötigte Wärmeenergie (inkl. Verluste)', ru: 'Требуемая энергия (с учётом потерь)' },
    'pl.rKwp': { en: 'Recommended panel power', de: 'Empfohlene Modulleistung', ru: 'Рекомендуемая мощность панелей' },
    'pl.rPanels': { en: 'Number of panels', de: 'Anzahl Module', ru: 'Количество панелей' },
    'calc.note': {
      en: 'Results are estimates; they vary with insulation, weather and usage habits. Exact sizing is done during the free survey.',
      de: 'Die Ergebnisse sind Richtwerte; sie variieren je nach Dämmung, Wetter und Nutzungsverhalten. Die genaue Auslegung erfolgt bei der kostenlosen Besichtigung.',
      ru: 'Результаты ориентировочны и зависят от изоляции, погоды и режима использования. Точный расчёт выполняется при бесплатном выезде.'
    },

    /* ---- Oteller ---- */
    'hot.kicker': { en: 'Hotels & Large Facilities', de: 'Hotels & große Objekte', ru: 'Отели и крупные объекты' },
    'hot.h2': {
      en: 'A <em>cable</em>, not pipes, comes down from the roof',
      de: 'Vom Dach kommt ein <em>Kabel</em> — kein Rohr',
      ru: 'С крыши спускается <em>кабель</em>, а не трубы'
    },
    'hot.pShort': {
      en: 'Scalable photovoltaic hot water for hotels, aparthotels, dormitories and sports facilities.',
      de: 'Skalierbares PV-Warmwasser für Hotels, Apartments, Wohnheime und Sportstätten.',
      ru: 'Масштабируемая PV-система горячей воды для отелей, апартаментов, общежитий и спортобъектов.'
    },
    'hot.p': {
      en: 'Tonnes of collector load, pump stations and insulated piping costs disappear. With central or per-floor installation options, it is a scalable hot-water solution for hotels, aparthotels, dormitories and sports facilities.',
      de: 'Tonnenschwere Kollektorlasten, Pumpstationen und isolierte Rohrleitungen entfallen. Mit zentraler oder etagenweiser Installation ist es die skalierbare Warmwasserlösung für Hotels, Apartments, Wohnheime und Sportstätten.',
      ru: 'Исчезают тонны коллекторов, насосные станции и дорогие изолированные трубопроводы. Централизованный или поэтажный монтаж — масштабируемое решение для отелей, апартаментов, общежитий и спортивных объектов.'
    },
    'hot.t1': { en: 'No structural load or insulation costs', de: 'Keine statische Last, keine Dämmkosten', ru: 'Без нагрузки на конструкции и затрат на изоляцию' },
    'hot.t2': { en: 'Independent hot water per floor — no single point of failure', de: 'Unabhängiges Warmwasser je Etage — kein zentraler Ausfallpunkt', ru: 'Независимая горячая вода на каждом этаже — нет единой точки отказа' },
    'hot.t3': { en: 'Seasonal businesses winter safely with no freezing/maintenance worries', de: 'Saisonbetriebe überwintern ohne Frost- und Wartungssorgen', ru: 'Сезонные объекты зимуют без забот о замерзании и обслуживании' },
    'hot.t4': { en: 'Project-based capacity planning and site survey', de: 'Projektbezogene Kapazitätsplanung und Besichtigung', ru: 'Проектный расчёт мощности и выезд на объект' },
    'hot.cta': { en: 'Discuss Your Facility', de: 'Ihr Objekt besprechen', ru: 'Обсудить ваш объект' },

    /* ---- Hakkında ---- */
    'about.kicker': { en: 'Who is SİSPA?', de: 'Wer ist SİSPA?', ru: 'Кто такие SİSPA?' },
    'about.h2': { en: 'A new brand backed by GESPA Enerji', de: 'Eine neue Marke mit GESPA-Enerji-Garantie', ru: 'Новый бренд под защитой GESPA Enerji' },
    'about.p': {
      en: 'SİSPA (Water Heating Systems Marketing) was founded under <strong>GESPA Enerji</strong>, based in Manavgat, Antalya. We combine our turnkey solar experience with certified photovoltaic water-heating technology from the world\'s leading manufacturers.',
      de: 'SİSPA (Vermarktung von Warmwassersystemen) wurde unter dem Dach von <strong>GESPA Enerji</strong> mit Sitz in Manavgat, Antalya, gegründet. Wir verbinden unsere Erfahrung mit schlüsselfertigen Solaranlagen mit zertifizierter PV-Warmwassertechnik führender Hersteller.',
      ru: 'SİSPA (маркетинг систем нагрева воды) создана под крылом компании <strong>GESPA Enerji</strong> (Манавгат, Анталья). Мы соединяем опыт солнечных проектов «под ключ» с сертифицированными PV-технологиями ведущих мировых производителей.'
    },
    'about.f1': { en: 'years+ manufacturer experience', de: 'Jahre+ Herstellererfahrung', ru: 'лет+ опыта производителя' },
    'about.f2': { en: 'countries use this technology', de: 'Länder nutzen diese Technik', ru: 'стран используют технологию' },
    'about.f3': { en: 'international certificate families', de: 'internationale Zertifikatsfamilien', ru: 'семейства международных сертификатов' },
    'about.f4': { en: 'years tank warranty (up to)*', de: 'Jahre Tankgarantie (bis zu)*', ru: 'лет гарантии на бак (до)*' },
    'about.fine': {
      en: '* Warranty terms vary by model and component; details are shared at the quotation stage.',
      de: '* Garantiezeiten variieren je nach Modell und Komponente; Details im Angebot.',
      ru: '* Сроки гарантии зависят от модели и компонента; подробности — на этапе расчёта.'
    },

    /* ---- İletişim ---- */
    'cont.kicker': { en: 'Contact', de: 'Kontakt', ru: 'Контакты' },
    'cont.h2': { en: 'Reach us for a free survey', de: 'Kostenlose Besichtigung anfragen', ru: 'Свяжитесь с нами — выезд бесплатный' },
    'cont.p': {
      en: 'We reply the same day. On-site surveys are free in and around Antalya.',
      de: 'Wir antworten noch am selben Tag. Besichtigungen in und um Antalya sind kostenlos.',
      ru: 'Отвечаем в тот же день. Выезд по Анталье и окрестностям бесплатный.'
    },
    'cont.tel': { en: 'Phone', de: 'Telefon', ru: 'Телефон' },
    'cont.mail': { en: 'E-mail', de: 'E-Mail', ru: 'Эл. почта' },
    'cont.addr': { en: 'Address', de: 'Adresse', ru: 'Адрес' },

    /* ---- Footer ---- */
    'foot.p': {
      en: 'SİSPA — Water Heating Systems Marketing · A <a href="https://gespaenerji.com" target="_blank" rel="noopener">GESPA Enerji</a> brand.',
      de: 'SİSPA — Vermarktung von Warmwassersystemen · Eine Marke von <a href="https://gespaenerji.com" target="_blank" rel="noopener">GESPA Enerji</a>.',
      ru: 'SİSPA — маркетинг систем нагрева воды · Бренд компании <a href="https://gespaenerji.com" target="_blank" rel="noopener">GESPA Enerji</a>.'
    },
    'foot.fine': {
      en: '© <span id="year"></span> SİSPA. All rights reserved. Product images are illustrative; technical data is based on the manufacturer\'s catalogue.',
      de: '© <span id="year"></span> SİSPA. Alle Rechte vorbehalten. Produktbilder sind beispielhaft; technische Daten laut Herstellerkatalog.',
      ru: '© <span id="year"></span> SİSPA. Все права защищены. Изображения носят иллюстративный характер; технические данные — по каталогу производителя.'
    }
  };

  var lang = (document.documentElement.lang || 'tr').toLowerCase();
  if (lang === 'tr') return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var entry = DICT[el.getAttribute('data-i18n')];
    if (entry && entry[lang]) el.innerHTML = entry[lang];
  });
})();
