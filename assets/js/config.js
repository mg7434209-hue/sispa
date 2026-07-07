/* SİSPA — TEK DOĞRU KAYNAK: kampanya ayarları + hesaplayıcı katsayıları.
   Stok, tarih ya da katsayı değişince SADECE bu dosyayı düzenle. */
window.SISPA_CONFIG = {
  campaign: {
    total: 50,                          // kampanya stoğu (adet)
    remaining: 12,                      // kalan adet — satış oldukça azalt
    end: '2026-08-26T23:59:59+03:00'    // kampanya bitişi (lansman + 50 gün)
  },

  calc: {
    specificHeat: 1.16,   // suyun ısınma enerjisi (Wh / L / °C)
    sunHours: 5.5,        // Antalya günlük ortalama tepe güneş saati
    sysEff: 0.85,         // panel→su sistem verimi
    poolLoss: 1.25,       // havuzda buharlaşma/ısı kaybı payı (×1.25)
    panelW: 585,          // referans panel gücü (Wp)
    coldWater: 15,        // şebeke suyu sıcaklığı (°C)
    storageTemp: 55,      // depo hedef sıcaklığı (°C)
    storageFactor: 0.8,   // önerilen depo ≈ günlük ihtiyaç × 0.8
    perPerson: {          // kişi başı günlük sıcak su (L, 55°C)
      otel: 60,
      konut: 40,
      spor: 35
    },
    defaults: {           // form varsayılanları
      people: 50,
      tons: 1,
      poolStart: 22,
      poolTarget: 40,
      days: 1
    }
  }
};
