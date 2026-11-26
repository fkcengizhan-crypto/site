/* AÖL Türk Dili ve Edebiyatı 6 — soru bankası
   source: "official" = MEB çalışma sorusu, "extra" = konu tekrarı / muhtemel soru
   answer: seçeneklerin karıştırılmadan önceki doğru cevap indeksi */
window.QUESTIONS = [
  /* ================= ROMAN ================= */
  {
    id: "R01",
    topic: "Roman",
    source: "official",
    passage: "Bu havasız, karanlık ve daracık yerde gecenin bu saatinde en çok parıldayan üç şey; kandilin alevi, muhasebecinin ışıltılı gözleri ve dövme demirden yapılma, kapağı açık, yedi kilitli bir dolabın içine istif edilmiş kuruşlardı. Duvardaki rafta sicil defterleri diziliydi. Buna ek olarak senelerdir birikmiş çeşitli evrak, çengellere asılmış torbalarda muhafaza ediliyordu.",
    q: "Bu parçada romanın yapı unsurlarından hangisi yoktur?",
    options: ["Olay", "Kişi", "Zaman", "Mekân"],
    answer: 0,
    explanation: "Parçada mekân (havasız, karanlık, daracık yer; duvar, raf), zaman (gece) ve kişi (muhasebeci) yer alır. Ancak bir olay örgüsü, yani yaşanan bir olay anlatılmaz.",
    tip: "Romanın yapı unsurları: olay, kişi, mekân, zaman ve çatışma. Bir parçada bunlardan hangisinin bulunmadığını ararken metinde “ne oldu?” sorusunun cevabına bakın."
  },
  {
    id: "R02",
    topic: "Roman",
    source: "official",
    q: "Aşağıdakilerin hangisi 1970 ile 1980 yılları arasında romanlarda işlenen konulardan değildir?",
    options: ["Sosyal medyanın getirdiği sorunlar", "Yurt dışına giden işçilerin sorunları", "Kadınların karşılaştıkları sorunlar", "Gecekondu halkının yaşadığı sorunlar"],
    answer: 0,
    explanation: "1970-1980 arası Türk romanında işçi göçü, gecekondu yaşamı, kadın sorunları, siyasi çalkantılar ve bireyin yalnızlığı gibi konular öne çıkar. Sosyal medya ise 2000'li yıllarda yaygınlaşan bir olgudur.",
    tip: "Dönem sorularında teknoloji ve güncel yaşamla ilgili seçenekler genellikle tuzaktır. 1970-1980 Türkiye'sinde sosyal medya yoktu."
  },
  {
    id: "R03",
    topic: "Roman",
    source: "extra",
    q: "Romanın yapı unsurlarından “olay” aşağıdakilerden hangisiyle açıklanır?",
    options: ["Kişilerin başından geçen ve bir çatışma etrafında gelişen olaylar zinciri", "Olayların geçtiği yer ve çevre", "Olayların yaşandığı zaman dilimi", "Yazarın kendi yaşam öyküsü"],
    answer: 0,
    explanation: "Olay, roman kişilerinin başından geçen ve genellikle bir çatışma etrafında gelişen olaylar zinciridir. Yer ve çevre mekânı, zaman dilimi zamanı, yazarın yaşam öyküsü ise biyografiyi karşılar.",
    tip: "Olay örgüsü “ne oldu?”, mekân “nerede?”, zaman “ne zaman?”, kişi “kim?” sorularına cevap verir."
  },
  {
    id: "R04",
    topic: "Roman",
    source: "extra",
    q: "Roman kahramanlarının duygu ve düşüncelerini, geçmişini ve geleceğini her şeyiyle bilen anlatıcının bakış açısı hangisidir?",
    options: ["İlahi (hâkim) bakış açısı", "Kahraman anlatıcı bakış açısı", "Gözlemci anlatıcı bakış açısı", "Çoğul anlatıcı bakış açısı"],
    answer: 0,
    explanation: "İlahi (hâkim) bakış açısında anlatıcı her şeyi bilir; kahramanların iç dünyasını, geçmişini ve geleceğini aktarabilir. Gözlemci anlatıcı yalnızca gördüğünü, kahraman anlatıcı ise kendi yaşadıklarını anlatır.",
    tip: "Anlatıcı “ben” diyorsa kahraman, dışarıdan “o” diyor ve sadece gözlemliyorsa gözlemci, her şeyi biliyorsa ilahi bakış açısıdır."
  },
  {
    id: "R05",
    topic: "Roman",
    source: "extra",
    q: "Bir romanda olayların tanıtıldığı, çatışmanın başladığı ve sonuca bağlandığı bölümler sırasıyla hangisidir?",
    options: ["Serim – düğüm – çözüm", "Düğüm – serim – çözüm", "Çözüm – düğüm – serim", "Serim – çözüm – düğüm"],
    answer: 0,
    explanation: "Romanın planı serim (giriş), düğüm (gelişme) ve çözüm (sonuç) bölümlerinden oluşur. Serimde kişi ve mekân tanıtılır, düğümde çatışma gelişir, çözümde olay sonuçlanır.",
    tip: "Serim = tanıtım, düğüm = çatışma, çözüm = sonuç. Bu sıralamayı “S-D-Ç” kısaltmasıyla aklınızda tutabilirsiniz."
  },
  {
    id: "R06",
    topic: "Roman",
    source: "extra",
    q: "Bir toplumun belirli bir dönemdeki yaşayışını, geleneklerini ve sorunlarını geniş bir biçimde yansıtan roman türü hangisidir?",
    options: ["Toplumsal roman", "Psikolojik roman", "Fantastik roman", "Polisiye roman"],
    answer: 0,
    explanation: "Toplumsal roman, toplumun sorunlarını ve değişimini geniş bir çerçevede ele alır. Psikolojik roman bireyin iç dünyasına, polisiye roman suç ve çözümüne, fantastik roman ise olağanüstü dünyalara odaklanır.",
    tip: "Roman türünü belirlerken eserin ağırlıklı odağına bakın: toplum mu, bireyin iç dünyası mı, suç mu, olağanüstülük mü?"
  },
  {
    id: "R07",
    topic: "Roman",
    source: "extra",
    q: "İlk Türkçe roman olarak kabul edilen eser hangisidir?",
    options: ["Taaşşuk-ı Talat ve Fitnat", "Araba Sevdası", "Eylül", "Çalıkuşu"],
    answer: 0,
    explanation: "Şemsettin Sami'nin 1872'de yayımlanan Taaşşuk-ı Talat ve Fitnat adlı eseri ilk Türkçe roman kabul edilir. Araba Sevdası ilk realist roman denemesi, Eylül ilk psikolojik roman, Çalıkuşu ise Cumhuriyet Dönemi romanıdır.",
    tip: "İlkler sık sorulur: ilk yerli roman Taaşşuk-ı Talat ve Fitnat; ilk realist roman denemesi Araba Sevdası; ilk psikolojik roman Eylül."
  },
  {
    id: "R08",
    topic: "Roman",
    source: "extra",
    q: "Aşağıdaki eser-yazar eşleştirmelerinden hangisi yanlıştır?",
    options: ["İnce Memed – Reşat Nuri Güntekin", "Yaban – Yakup Kadri Karaosmanoğlu", "Ateşten Gömlek – Halide Edip Adıvar", "Dokuzuncu Hariciye Koğuşu – Peyami Safa"],
    answer: 0,
    explanation: "İnce Memed, Yaşar Kemal'in eseridir. Diğer eşleştirmeler doğrudur: Yaban Yakup Kadri'ye, Ateşten Gömlek Halide Edip'e, Dokuzuncu Hariciye Koğuşu Peyami Safa'ya aittir.",
    tip: "İnce Memed'i Reşat Nuri ile karıştırmayın. Reşat Nuri'nin bilinen romanları Çalıkuşu, Yaprak Dökümü ve Dudaktan Kalbe'dir."
  },
  {
    id: "R09",
    topic: "Roman",
    source: "extra",
    q: "1950-1980 arası Türk romanında köy ve kasaba yaşamını, toprak ağalığını ve köylünün sorunlarını işleyen yazar hangisidir?",
    options: ["Yaşar Kemal", "Ahmet Hamdi Tanpınar", "Peyami Safa", "Halide Edip Adıvar"],
    answer: 0,
    explanation: "Yaşar Kemal, İnce Memed ve Çukurova'yı anlatan romanlarıyla köy ve kasaba yaşamını, toprak ağalığını ve köylünün sorunlarını işler. Tanpınar ve Peyami Safa daha çok bireyin iç dünyasına, Halide Edip ise Kurtuluş Savaşı'na yönelir.",
    tip: "1950-1980 köy romanı denince akla Yaşar Kemal, Orhan Kemal, Kemal Tahir ve Fakir Baykurt gelir."
  },
  {
    id: "R10",
    topic: "Roman",
    source: "extra",
    q: "Roman ile hikâye arasındaki farkla ilgili hangisi doğrudur?",
    options: ["Roman, hikâyeye göre daha geniş zaman, mekân ve kişi kadrosuna sahiptir.", "Roman her zaman manzum olarak yazılır.", "Hikâyede olay ve kişi bulunmaz.", "Romanın yalnızca tek bir kahramanı olmak zorundadır."],
    answer: 0,
    explanation: "Roman; olay, kişi, mekân ve zaman bakımından hikâyeye göre daha geniştir. Hikâye daha kısa ve yoğundur; roman ise uzun soluklu bir anlatıdır. Romanlar genellikle mensur (düzyazı) yazılır.",
    tip: "Hikâye “kısa soluklu”, roman “uzun soluklu” anlatıdır. İkisinde de olay, kişi, mekân ve zaman bulunur; fark kapsam ve uzunluktadır."
  },

  /* ================= TİYATRO ================= */
  {
    id: "T01",
    topic: "Tiyatro",
    source: "official",
    q: "Aşağıdakilerden hangisi Cumhuriyet Dönemi tiyatro yazarlarından değildir?",
    options: ["Necip Fazıl Kısakürek", "Ahmet Kutsi Tecer", "Recaizâde Mahmut Ekrem", "Melih Cevdet Anday"],
    answer: 2,
    explanation: "Recaizâde Mahmut Ekrem Tanzimat Dönemi yazarıdır. Necip Fazıl Kısakürek, Ahmet Kutsi Tecer ve Melih Cevdet Anday Cumhuriyet Dönemi'nde tiyatro eserleri vermiştir.",
    tip: "Tanzimat tiyatro yazarları: Şinasi, Namık Kemal, Ahmet Vefik Paşa, Recaizâde Mahmut Ekrem. Cumhuriyet tiyatrosunda Necip Fazıl, Ahmet Kutsi, Melih Cevdet ve Haldun Taner gibi isimler öne çıkar."
  },
  {
    id: "T02",
    topic: "Tiyatro",
    source: "official",
    passage: "ODABAŞI: Seni biz kendi isteğimizle bütün boyların başına seçtik. Bizim beyimiz artık sensin. Kutlu olsun!\nSESLER: Kutlu olsun! (Şimdi sahne karanlıktır. Yalnız ortada bir ışık sütunu vardır. Köroğlu tamamen bu ışık sütunu içindedir.)\nODABAŞI: (Konuşmasına devamla) Oğuz'un içinde zulüm yok artık. Bize can üfledin, Oğuz töresini canlandırdın. Adın dillere destan!\nKÖROĞLU: Yurdunuzu candan sevin. Sıradan, saygıdan çıkmayın. Oğuz'un başına Tanrı acı vermesin! (Kır At'ın kişnemeleri duyulur.)",
    q: "Bu parçayla ilgili aşağıdakilerden hangisi söylenemez?",
    options: ["Açıklamalar ayraç içinde verilmiştir.", "Diyalog şeklinde yazılmıştır.", "Konu olarak “vatan sevgisi” işlenmiştir.", "Mimik ve jestlere yer verilmiştir."],
    answer: 3,
    explanation: "Parçada ayraç içinde sahne açıklamaları vardır, konuşmalar diyalog biçimindedir ve vatan sevgisi işlenmiştir. Ancak oyuncuların yüz ifadeleri (mimik) ve el-kol hareketleri (jest) ayrıntılı olarak belirtilmemiştir.",
    tip: "Tiyatro metinlerinde ayraç içi ifadeler sahne açıklamalarıdır. Mimik yüz, jest ise beden hareketidir; metinde bunlar açıkça yer almıyorsa “mimik ve jestlere yer verilmiştir” denemez."
  },
  {
    id: "T03",
    topic: "Tiyatro",
    source: "extra",
    q: "Trajedi türüyle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: ["Sıradan insanların günlük yaşamını konu alır.", "Korku ve acıma duygusu uyandırır.", "Üç birlik kuralına uyulur.", "Kahramanları soylu kişilerdir."],
    answer: 0,
    explanation: "Trajedi, soylu kişilerin yaşadığı büyük acıları ve çatışmaları konu alır; sıradan insanların günlük yaşamı komedinin konusudur. Trajedide korku ve acıma duygusu uyandırılır, üç birlik kuralına uyulur.",
    tip: "Trajedi = soylu kişiler + acıklı son + üç birlik. Komedi = sıradan insanlar + gülmece. Dram = ikisinin birleşimi."
  },
  {
    id: "T04",
    topic: "Tiyatro",
    source: "extra",
    q: "Sahnede bir oyuncunun kendi kendine konuşmasına ne denir?",
    options: ["Monolog", "Diyalog", "Replik", "Tirat"],
    answer: 0,
    explanation: "Monolog, bir oyuncunun sahnede kendi kendine konuşmasıdır. Diyalog iki veya daha fazla kişinin karşılıklı konuşması, replik bir konuşmaya verilen karşılık, tirat ise uzun ve coşkulu konuşmadır.",
    tip: "Mono = tek, dia = iki. Monolog tek kişinin, diyalog karşılıklı konuşmanın adıdır."
  },
  {
    id: "T05",
    topic: "Tiyatro",
    source: "extra",
    q: "Aşağıdakilerden hangisi tiyatro terimi değildir?",
    options: ["Dekor", "Kostüm", "Replik", "Tezhip"],
    answer: 3,
    explanation: "Dekor, kostüm ve replik tiyatro terimleridir. Tezhip ise özellikle kitap süsleme sanatında kullanılan bir süsleme terimidir.",
    tip: "Tiyatro terimleri: perde, sahne, dekor, kostüm, makyaj, replik, monolog, diyalog, tirat, jest, mimik, suflör."
  },
  {
    id: "T06",
    topic: "Tiyatro",
    source: "extra",
    q: "Türk edebiyatının ilk yerli tiyatro eseri hangisidir?",
    options: ["Şair Evlenmesi", "Vatan Yahut Silistre", "Celaleddin Harzemşah", "Araba Sevdası"],
    answer: 0,
    explanation: "Şinasi'nin Şair Evlenmesi (1859) ilk yerli tiyatro eserimizdir. Vatan Yahut Silistre ve Celaleddin Harzemşah Namık Kemal'in, Araba Sevdası ise Recaizâde Mahmut Ekrem'in romanıdır.",
    tip: "İlkler: ilk yerli tiyatro Şair Evlenmesi – Şinasi; ilk sahnelenen tiyatro Vatan Yahut Silistre – Namık Kemal."
  },
  {
    id: "T07",
    topic: "Tiyatro",
    source: "extra",
    q: "Namık Kemal'in sahnelenen ilk tiyatro eseri hangisidir?",
    options: ["Vatan Yahut Silistre", "Şair Evlenmesi", "Koçyiğit Köroğlu", "Keşanlı Ali Destanı"],
    answer: 0,
    explanation: "Vatan Yahut Silistre, Namık Kemal'in 1873'te sahnelenen ve büyük yankı uyandıran tiyatro eseridir. Şair Evlenmesi Şinasi'nin, Koçyiğit Köroğlu Ahmet Kutsi Tecer'in, Keşanlı Ali Destanı Haldun Taner'in eseridir.",
    tip: "Vatan Yahut Silistre, vatan sevgisini işleyen ilk sahnelenen tiyatro eserimizdir."
  },
  {
    id: "T08",
    topic: "Tiyatro",
    source: "extra",
    q: "Keşanlı Ali Destanı adlı eser kime aittir?",
    options: ["Haldun Taner", "Necip Fazıl Kısakürek", "Ahmet Kutsi Tecer", "Melih Cevdet Anday"],
    answer: 0,
    explanation: "Keşanlı Ali Destanı, Haldun Taner'in epik tiyatro anlayışıyla yazdığı ünlü eseridir. Haldun Taner'in diğer önemli oyunu Gözlerimi Kaparım Vazifemi Yaparım'dır.",
    tip: "Haldun Taner = Keşanlı Ali Destanı + epik tiyatro. Necip Fazıl = Bir Adam Yaratmak; Ahmet Kutsi = Koçyiğit Köroğlu; Melih Cevdet = İçerdekiler."
  },
  {
    id: "T09",
    topic: "Tiyatro",
    source: "extra",
    q: "Köroğlu'nu konu alan Koçyiğit Köroğlu adlı tiyatro eseri kime aittir?",
    options: ["Ahmet Kutsi Tecer", "Namık Kemal", "Şinasi", "Turan Oflazoğlu"],
    answer: 0,
    explanation: "Koçyiğit Köroğlu, Ahmet Kutsi Tecer'in Köroğlu destanından yararlanarak yazdığı tiyatro eseridir. Tecer, halk kültürü ve Anadolu motiflerine yönelen eserleriyle tanınır.",
    tip: "Ahmet Kutsi Tecer, halk edebiyatı ve Anadolu kültürüne ilgi duymuştur; Koçyiğit Köroğlu ve Köşebaşı onun tiyatro eserleridir."
  },

  /* ================= ŞİİR ================= */
  {
    id: "S01",
    topic: "Şiir",
    source: "extra",
    q: "Aşağıdakilerden hangisi Beş Hececiler'den biri değildir?",
    options: ["Ahmet Haşim", "Faruk Nafiz Çamlıbel", "Enis Behiç Koryürek", "Halit Fahri Ozansoy"],
    answer: 0,
    explanation: "Beş Hececiler; Faruk Nafiz Çamlıbel, Enis Behiç Koryürek, Halit Fahri Ozansoy, Orhan Seyfi Orhon ve Yusuf Ziya Ortaç'tır. Ahmet Haşim ise sembolizm etkisindeki şiirleriyle Fecriati ve sonrasında bağımsız bir şair olarak tanınır.",
    tip: "Beş Hececiler: Faruk Nafiz, Enis Behiç, Halit Fahri, Orhan Seyfi, Yusuf Ziya. Hece ölçüsü ve sade dil kullanmışlardır."
  },
  {
    id: "S02",
    topic: "Şiir",
    source: "extra",
    q: "Aşağıdakilerden hangisi Garip (Birinci Yeni) akımının temsilcilerinden değildir?",
    options: ["Cemal Süreya", "Orhan Veli Kanık", "Oktay Rifat Horozcu", "Melih Cevdet Anday"],
    answer: 0,
    explanation: "Garip akımının üç temsilcisi Orhan Veli Kanık, Oktay Rifat Horozcu ve Melih Cevdet Anday'dır. Cemal Süreya ise İkinci Yeni şiirinin önemli şairlerindendir.",
    tip: "Garip = Orhan Veli + Oktay Rifat + Melih Cevdet. İkinci Yeni = Cemal Süreya, İlhan Berk, Turgut Uyar, Edip Cansever, Ece Ayhan..."
  },
  {
    id: "S03",
    topic: "Şiir",
    source: "extra",
    q: "Toplumcu gerçekçi şiir anlayışının öncüsü kabul edilen şair hangisidir?",
    options: ["Nazım Hikmet", "Ahmet Haşim", "Yahya Kemal Beyatlı", "Faruk Nafiz Çamlıbel"],
    answer: 0,
    explanation: "Nazım Hikmet, toplumcu gerçekçi şiirin öncüsüdür; şiirde emek, sömürü, özgürlük ve halkın sorunlarını işlemiştir. Ahmet Haşim sembolist, Yahya Kemal klasik şiir geleneğine bağlı, Faruk Nafiz ise Beş Hececiler'dendir.",
    tip: "Toplumcu gerçekçi şiirde biçimden çok içerik ve toplumsal mesaj öne çıkar. Nazım Hikmet bu anlayışın en bilinen adıdır."
  },
  {
    id: "S04",
    topic: "Şiir",
    source: "extra",
    q: "Millî Edebiyat Dönemi'nin şiir anlayışı için aşağıdakilerden hangisi söylenemez?",
    options: ["Ağır ve süslü bir dil kullanılmıştır.", "Hece ölçüsü kullanılmıştır.", "Sade Türkçe savunulmuştur.", "Anadolu ve millî değerler işlenmiştir."],
    answer: 0,
    explanation: "Millî Edebiyat Dönemi'nde sade Türkçe, hece ölçüsü ve Anadolu'ya yönelme öne çıkar. Ağır ve süslü dil ise daha çok Divan ve Servetifünun şiirinin özelliğidir.",
    tip: "Millî Edebiyat = sade dil + hece ölçüsü + Anadolu + millî değerler. Ağır dil bu dönemin karşı çıktığı bir özelliktir."
  },
  {
    id: "S05",
    topic: "Şiir",
    source: "extra",
    passage: "Gözlerinden akan yaşlar bir nehir gibiydi.",
    q: "Bu dizede aşağıdaki söz sanatlarından hangisi vardır?",
    options: ["Teşbih (benzetme)", "Tezat (karşıtlık)", "Kinaye", "Tekrir (yineleme)"],
    answer: 0,
    explanation: "Gözyaşları “nehir”e benzetilmiştir; “gibi” benzetme edatı kullanıldığı için bu bir teşbihtir. Tezat karşıt kavramların bir arada kullanılması, kinaye iğneleyici söz, tekrir ise sözcük yinelemesidir.",
    tip: "Benzetme edatları (“gibi”, “kadar”, “sanki”) varsa teşbih; benzetilen söylenmeden mecaz varsa istiare düşünün."
  },
  {
    id: "S06",
    topic: "Şiir",
    source: "extra",
    passage: "Yırtarım dağları, enginlere sığmam, taşarım.",
    q: "Bu dizede ağır basan söz sanatı hangisidir?",
    options: ["Mübalağa (abartma)", "Teşhis (kişileştirme)", "Tezat", "Hüsnütalil"],
    answer: 0,
    explanation: "Dağları yırtmak, enginlere sığmamak ve taşmak gibi ifadeler gerçekte mümkün olmayan abartılı durumları anlatır; bu nedenle mübalağa vardır. Teşhis insan dışı varlıklara insan özelliği vermek, tezat karşıtlık, hüsnütalil ise güzel bir nedene bağlamadır.",
    tip: "Abartma, bir duyguyu güçlendirmek için gerçekte olamayacak kadar büyütmektir."
  },
  {
    id: "S07",
    topic: "Şiir",
    source: "extra",
    passage: "Bir garip rüya rengiyle\nUyur gibiydi her şey.",
    q: "Bu dizelerde aşağıdaki söz sanatlarından hangisi vardır?",
    options: ["Teşhis (kişileştirme)", "Teşbih", "Mübalağa", "Kinaye"],
    answer: 0,
    explanation: "“Her şey”in uyuması, insana özgü bir eylemin doğadaki varlıklara verilmesidir; bu da teşhis (kişileştirme) sanatıdır. “Gibi” burada benzetme değil, uyuma durumunu betimleyen bir ifadedir.",
    tip: "İnsan dışı varlıklar konuşuyor, üzülüyor, uyuyor veya gülüyorsa teşhis vardır."
  },
  {
    id: "S08",
    topic: "Şiir",
    source: "extra",
    q: "Şairin şiirlerinde kullandığı takma ada ne denir?",
    options: ["Mahlas", "Tapşırma", "Matla", "Makta"],
    answer: 0,
    explanation: "Mahlas, şairin şiirlerinde kullandığı takma addır. Halk şiirinde bu adın son dörtlükte söylenmesine tapşırma denir. Matla gazelin ilk beyti, makta ise son beytidir.",
    tip: "Mahlas = takma ad. Divan şiirinde mahlas genellikle son beyitte yer alır; halk şiirinde tapşırma son dörtlükte bulunur."
  },

  /* ================= MAKALE / ELEŞTİRİ / MÜLAKAT ================= */
  {
    id: "M01",
    topic: "Makale, Eleştiri, Mülakat",
    source: "official",
    passage: "Türk edebiyatında eleştiri - - - - Dönemi'nde gazeteler sayesinde gelişmiştir. Recaizâde Mahmut Ekrem “Takdir-i Elhan” ile “Zemzeme Mukaddimesi”ni bu dönemde kaleme almıştır.",
    q: "Bu parçada boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?",
    options: ["Millî Edebiyat", "Tanzimat Edebiyatı", "Fecriati Edebiyatı", "Servetifünun Edebiyatı"],
    answer: 1,
    explanation: "Eleştiri, Tanzimat Dönemi'nde gazetelerin yaygınlaşmasıyla gelişmiştir. Recaizâde Mahmut Ekrem'in Takdir-i Elhan ve Zemzeme Mukaddimesi bu dönemin önemli eleştiri metinleridir.",
    tip: "Tanzimat = gazete + eleştiri + makale. Recaizâde'nin Takdir-i Elhan'ı, Namık Kemal'in Tahrib-i Harabat'ı bu dönemin eleştiri örnekleridir."
  },
  {
    id: "M02",
    topic: "Makale, Eleştiri, Mülakat",
    source: "official",
    q: "Mülakat türü ile ilgili aşağıdakilerden hangisi söylenebilir?",
    options: ["Hüseyin Cahit Yalçın, Türk edebiyatındaki ilk temsilcisidir.", "Dil, ağırlıklı olarak sanatsal işlevde kullanılır.", "Yazar, kişisel görüşlerini ekleyerek yazısını kaleme alır.", "Sorular, konunun bütününü kapsayacak nitelikte hazırlanır."],
    answer: 3,
    explanation: "Mülakatta amaç, konuyu bütün yönleriyle öğrenmektir; bu nedenle sorular konunun bütününü kapsayacak biçimde hazırlanır. Mülakat bilgilendirici bir türdür, dil genellikle açık ve sadedir; yazarın kişisel görüşlerini eklemesi değil, görüşülen kişinin sözlerini aktarması esastır.",
    tip: "Mülakat = soru-cevap + bilgi alma. Sorular eksik veya konu dışı olursa mülakat amacına ulaşmaz."
  },
  {
    id: "M03",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Makale türü için aşağıdakilerden hangisi söylenemez?",
    options: ["Hayal gücüne dayalı, olağanüstü olaylar anlatılır.", "Kanıtlayıcı anlatım kullanılır.", "Görüşler örneklerle desteklenir.", "Gazete ve dergilerde yayımlanır."],
    answer: 0,
    explanation: "Makale, bir görüşü kanıtlamak amacıyla yazılan bilgilendirici bir türdür; örnekler ve kanıtlarla desteklenir, gazete ve dergilerde yayımlanır. Olağanüstü olaylar ve hayal gücü ise masal, destan veya fantastik anlatıların özelliğidir.",
    tip: "Makale = kanıt + örnek + açıklama. Hayal ve olağanüstülük varsa tür değişir."
  },
  {
    id: "M04",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Eleştiri (tenkit) türünün temel amacı nedir?",
    options: ["Bir eserin değerini ve eksiklerini ölçütlere göre belirlemek", "Bir olayı kurgusal biçimde anlatmak", "Sadece eserin özetini vermek", "Yazarın hayatını romanlaştırmak"],
    answer: 0,
    explanation: "Eleştiri, bir eseri olumlu ve olumsuz yönleriyle değerlendirerek değerini belirlemeyi amaçlar. Özet vermek, kurgu oluşturmak veya biyografi yazmak eleştirinin temel amacı değildir.",
    tip: "Eleştiri hem tanıtır hem değerlendirir; ölçütlere dayanır ve gerekçelidir."
  },
  {
    id: "M05",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Aşağıdakilerden hangisi mülakat türünün özelliklerinden değildir?",
    options: ["Olayların kurgusal bir biçimde anlatılması", "Soru-cevap esasına dayanması", "Konunun uzmanıyla görüşülmesi", "Soruların konunun bütününü kapsaması"],
    answer: 0,
    explanation: "Mülakat, bir konuda uzman kişiyle soru-cevap biçiminde yapılan görüşmedir. Kurgusal anlatım ise roman, hikâye gibi türlerin özelliğidir.",
    tip: "Mülakatı röportajdan ayıran temel özellik, mülakatın ağırlıklı olarak soru-cevap ve bilgi alma amacı taşımasıdır."
  },
  {
    id: "M06",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Namık Kemal'in, Ziya Paşa'nın Harabat adlı eserini eleştirdiği yapıtı hangisidir?",
    options: ["Tahrib-i Harabat", "Takdir-i Elhan", "Zemzeme Mukaddimesi", "Şair Evlenmesi"],
    answer: 0,
    explanation: "Namık Kemal, Ziya Paşa'nın Harabat antolojisini Tahrib-i Harabat adlı eserinde eleştirmiştir. Takdir-i Elhan ve Zemzeme Mukaddimesi Recaizâde Mahmut Ekrem'in, Şair Evlenmesi ise Şinasi'nin eseridir.",
    tip: "Tahrib-i Harabat = Namık Kemal'in eleştirisi. “Tahrib” yıkma, “Harabat” ise Ziya Paşa'nın eserinin adıdır."
  },
  {
    id: "M07",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Makale ile fıkra arasındaki temel fark aşağıdakilerden hangisidir?",
    options: ["Makale kanıtlayıcıdır; fıkra daha çok güncel ve kişisel görüşe dayanır.", "Makale yalnızca şiir biçiminde yazılır.", "Fıkrada kanıt zorunludur.", "Makale sadece konuşma diliyle yazılır."],
    answer: 0,
    explanation: "Makalede bir görüş kanıtlanmaya çalışılır; fıkrada ise güncel bir konu üzerine yazarın kişisel görüşü, daha serbest bir üslupla anlatılır. İki tür de düzyazıyla yazılır.",
    tip: "Makale “kanıtlar”, fıkra “yorumlar”. Fıkra daha kısa ve samimi bir üsluba sahiptir."
  },

  /* ================= ANLATIM BOZUKLUKLARI ================= */
  {
    id: "A01",
    topic: "Anlatım Bozuklukları",
    source: "official",
    q: "Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?",
    options: ["Araştırmalarımız yaklaşık üç ay kadar devam edecek.", "Resmî yazışmalar dil bilgisi kurallarına uygun yapılmalıdır.", "Öğretmenler, başarılı öğrencilerini tebrik ettiler.", "Şiddetli rüzgâr nedeniyle balıkçı tekneleri denize açılamadı."],
    answer: 0,
    explanation: "“Yaklaşık üç ay kadar” ifadesinde “yaklaşık” ve “kadar” aynı anlamı verdiği için gereksiz sözcük kullanılmıştır. Cümle “Yaklaşık üç ay” veya “üç ay kadar” biçiminde düzeltilmelidir.",
    tip: "Aynı anlamı taşıyan sözcüklerin bir arada kullanılması gereksiz sözcük kullanımıdır: “yaklaşık üç ay kadar”, “yukarıya doğru tırmanmak” gibi."
  },
  {
    id: "A02",
    topic: "Anlatım Bozuklukları",
    source: "official",
    passage: "Üzgün bir haber alınca moralimiz hemen bozulurdu.",
    q: "Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?",
    options: ["Anlam belirsizliği", "Mantık ve sıralama hatası", "Kelimenin yanlış anlamda kullanılması", "Kelimenin yanlış yerde kullanılması"],
    answer: 2,
    explanation: "“Üzgün” sözcüğü insanlar için kullanılır; haber için “üzücü” denmelidir. Bu nedenle cümlede kelime yanlış anlamda kullanılmıştır.",
    tip: "Üzgün insan, üzücü haber. Sözcüğün hangi varlığa uygun düştüğünü kontrol edin."
  },
  {
    id: "A03",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan anlatım bozukluğu vardır?",
    options: ["Dağcılar yukarıya doğru tırmanarak zirveye ulaştı.", "Öğrenciler sınavdan önce konuları tekrar etti.", "Toplantı saat onda başlayacak.", "Kütüphaneden iki kitap ödünç aldım."],
    answer: 0,
    explanation: "“Tırmanmak” zaten yukarıya doğru hareket etmeyi ifade eder; “yukarıya doğru” ifadesi gereksizdir. Cümle “Dağcılar tırmanarak zirveye ulaştı.” biçiminde düzeltilmelidir.",
    tip: "Gereksiz sözcük: anlamı zaten karşılanan bir ifadenin yeniden kullanılmasıdır."
  },
  {
    id: "A04",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?",
    options: ["Kuşlar gökyüzünde uçuyorlar.", "Her öğrenci sınavdan önce derslerine çalıştı.", "Öğretmen sınıfa yeni bir konu anlattı.", "Çocuk bahçede oyun oynuyor."],
    answer: 0,
    explanation: "İnsan dışı çoğul özneler tekil yüklem alır: “Kuşlar gökyüzünde uçuyor.” “Kuşlar gökyüzünde uçuyorlar.” cümlesinde “uçuyorlar” çoğul olduğu için özne-yüklem uyumsuzluğu vardır. Diğer cümlelerde özne ve yüklem uyumludur.",
    tip: "İnsan dışı çoğul özneler tekil yüklem alır: “Ağaçlar çiçek açtı.” Bu kurala uymayan çoğul yüklemler özne-yüklem uyumsuzluğu oluşturur."
  },
  {
    id: "A05",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde anlam belirsizliği vardır?",
    options: ["Onu çok sevdiğini söyledi.", "Ali, arkadaşına kitabı verdi.", "Öğretmen, sınıfa yeni bir ödev verdi.", "Kardeşim bahçede top oynuyor."],
    answer: 0,
    explanation: "“Onu” zamirinin kimi veya neyi karşıladığı belirsizdir. Cümlede zamirin yerine açık bir isim kullanılmalıdır: “Ali'yi çok sevdiğini söyledi.” gibi.",
    tip: "Zamirlerin (o, onu, bunu) neyi karşıladığı açık değilse anlam belirsizliği oluşur."
  },
  {
    id: "A06",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde mantık ve sıralama hatası vardır?",
    options: ["Kitabı bitirdikten sonra okumaya başladı.", "Önce konuları öğrendi, sonra soru çözdü.", "Sınava girmeden önce hazırlık yaptı.", "Yemekten sonra çay içti."],
    answer: 0,
    explanation: "Bir kitabın önce okunması, sonra bitirilmesi gerekir. “Bitirdikten sonra okumaya başladı” ifadesinde olayların sırası mantık hatası taşır.",
    tip: "Mantık ve sıralama hatasında neden-sonuç veya önce-sonra ilişkisi bozulur."
  },
  {
    id: "A07",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerden hangisinde anlatım bozukluğu yoktur?",
    options: ["Anlıyorum ki bu konuda haklısın.", "Araştırmalarımız yaklaşık üç ay kadar sürecek.", "Kuşlar gökyüzünde uçuyorlar.", "Kitabı bitirdikten sonra okumaya başladı."],
    answer: 0,
    explanation: "“Anlıyorum ki bu konuda haklısın.” cümlesinde “ki” bağlacı ayrı yazılmış ve cümle anlam bakımından açıktır; anlatım bozukluğu yoktur. Diğerlerinde sırasıyla gereksiz sözcük, özne-yüklem uyumsuzluğu ve mantık hatası vardır.",
    tip: "Anlatım bozukluğu sorularında cümleyi sadeleştirerek okuyun; anlamı bozan fazlalık veya uyumsuzluk hemen görünür."
  },

  /* ================= YAZIM VE NOKTALAMA ================= */
  {
    id: "Y01",
    topic: "Yazım ve Noktalama",
    source: "official",
    q: "Aşağıdaki cümlelerin hangisinde “ki”nin yazımıyla ilgili bir yanlışlık yapılmıştır?",
    options: ["Türk dili, dillerin en zenginlerindendir; yeter ki bu dil, şuurla işlensin.", "Anlıyorumki hatalarınızdan ders çıkarmaya pek niyetiniz yok.", "Hâlbuki “Kaldırımlar Şairi” olmaktan ziyade “Çile” isimli şiirimin şairi olmayı tercih ederim.", "Çeşit çeşit yemek yapmış, bunları ne ara hazırladı ki?"],
    answer: 1,
    explanation: "Bağlaç olan “ki” her zaman ayrı yazılır: “Anlıyorum ki...” “Anlıyorumki” biçiminde bitişik yazılması yanlıştır. “Hâlbuki” ise kalıplaşmış bir sözcük olduğu için bitişik yazılır.",
    tip: "Bağlaç “ki” ayrı yazılır. Ancak “belki, çünkü, hâlbuki, mademki, sanki, oysaki” gibi kalıplaşmış sözcüklerde bitişiktir."
  },
  {
    id: "Y02",
    topic: "Yazım ve Noktalama",
    source: "official",
    passage: "Hayatın bizi şiir kılan yüzünde önce camlara yağmur damlaları dokunur (I) Sulu sepken üzerine açılan bir paragrafla bir kış romanı başlar uzaklarda (II) Derken ilk kar taneleri gökyüzünden dökülmeye başlar (III) Yaldızlı ve mutlu bir yılbaşı kartı karesinde kalabalık caddeler, ışıklı mağazalar, insanlar, mutlu kış akşamları (IV)",
    q: "Bu parçadaki numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?",
    options: ["I", "II", "III", "IV"],
    answer: 3,
    explanation: "I, II ve III numaralı yerlerde tamamlanmış cümleler bittiği için nokta konur. IV numaralı yerde ise sıralama devam ettiği ve cümle eksiltili bırakıldığı için üç nokta (...) getirilmelidir.",
    tip: "Tamamlanmış cümleler nokta ile biter; sıralama sürüyorsa veya söz bitmemişse üç nokta kullanılır."
  },
  {
    id: "Y03",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “de/da” yazımıyla ilgili yanlışlık vardır?",
    options: ["Bu konuda bende sizinle aynı fikirdeyim.", "Sen de bizimle gelir misin?", "Bu akşam bende kalabilirsin.", "Onlar da bu fikri destekledi."],
    answer: 0,
    explanation: "“Bu konuda bende sizinle aynı fikirdeyim.” cümlesinde “ben de” bağlacı ayrı yazılmalıdır: “Bu konuda ben de sizinle aynı fikirdeyim.” “Bende” biçimi “benim evimde” anlamına gelen bulunma ekiyle yazımdır ve bu cümleye uymaz.",
    tip: "“De/da” çıkarıldığında cümle anlamını yitirmiyorsa bağlaçtır, ayrı yazılır. “Bende, sende, onda” ise bulunma ekidir."
  },
  {
    id: "Y04",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde büyük harf kullanımıyla ilgili yanlışlık vardır?",
    options: ["Okulumuzda türkçe dersi için etkinlik yapıldı.", "Türkçe dersini çok seviyorum.", "Karadeniz'de tatil yaptık.", "Yarın Ankara'ya gideceğiz."],
    answer: 0,
    explanation: "Dil adları büyük harfle başlar: “Türkçe”. “Okulumuzda türkçe dersi...” cümlesinde “türkçe” küçük yazıldığı için yanlıştır. Diğer seçeneklerde özel yer adları ve dil adı doğru yazılmıştır.",
    tip: "Dil, millet, ülke, şehir ve özel kurum adları büyük harfle başlar."
  },
  {
    id: "Y05",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde sayıların yazımıyla ilgili yanlışlık vardır?",
    options: ["Bin dokuz yüz seksen beş'te doğdu.", "Sınava 12. sınıf öğrencileri katıldı.", "Toplantı saat 14.30'da başlayacak.", "Kitabın 3'üncü baskısı çıktı."],
    answer: 0,
    explanation: "Sayılar yazıyla yazıldığında gelen ek kesmeyle ayrılmaz: “Bin dokuz yüz seksen beşte doğdu.” “Bin dokuz yüz seksen beş'te” yazımında gereksiz kesme işareti kullanılmıştır.",
    tip: "Rakamla yazılan sayılara ek kesmeyle ayrılabilir (1985'te); yazıyla yazılan sayılarda kesme kullanılmaz (bin dokuz yüz seksen beşte)."
  },
  {
    id: "Y06",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde noktalama işareti yanlış kullanılmıştır?",
    options: ["Kitap; defter, kalem ve silgi aldım.", "Kitap, defter, kalem ve silgi aldım.", "Ali, Ayşe ve Mehmet sinemaya gitti.", "Sınava hazırlanıyor, soru çözüyor ve tekrar yapıyor."],
    answer: 0,
    explanation: "Eş görevli sözcükler virgülle sıralanır. “Kitap; defter, kalem ve silgi aldım.” cümlesinde “kitap” ile diğerleri arasında noktalı virgül kullanılması gereksiz ve yanlıştır; cümle “Kitap, defter, kalem ve silgi aldım.” olmalıdır.",
    tip: "Virgül eş görevli sözcükleri ayırır; noktalı virgül daha çok anlamca birbirinden ayrılan grupları ayırmak için kullanılır."
  },
  {
    id: "Y07",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde kesme işareti yanlış kullanılmıştır?",
    options: ["Türkçe'nin kurallarını öğrenmeliyiz.", "Ankara'ya gittik.", "MEB'in kararı açıklandı.", "1985'te doğdu."],
    answer: 0,
    explanation: "Dil adlarına gelen ekler kesmeyle ayrılmaz: “Türkçenin”. Özel yer adlarına, kısaltmalara ve rakamlara gelen ekler ise kesmeyle ayrılabilir: Ankara'ya, MEB'in, 1985'te.",
    tip: "Kesme işareti özel adlara gelen ekleri ayırır; dil adlarına gelen eklerde kullanılmaz."
  },
  {
    id: "Y08",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde iki nokta yanlış kullanılmıştır?",
    options: ["Kardeşim: okula gitti.", "Şunu söylemeliyim: Bu iş böyle olmaz.", "Toplantıda şu karar alındı: Herkes zamanında gelecek.", "Sınavda üç konu sorumlu: roman, tiyatro ve şiir."],
    answer: 0,
    explanation: "İki nokta, kendisinden sonra açıklama veya örnek verilecek ifadelerden sonra kullanılır. “Kardeşim: okula gitti.” cümlesinde özne ile yüklem arasında kullanılması yanlıştır; cümle “Kardeşim okula gitti.” olmalıdır.",
    tip: "İki nokta, açıklama, örnek veya alıntı öncesinde kullanılır; özne-yüklem arasına konmaz."
  },

  /* ================= EDEBİ DÖNEMLER ================= */
  {
    id: "E01",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Türk edebiyatında Tanzimat Dönemi'nin başlangıcı olarak hangi yıl kabul edilir?",
    options: ["1860", "1839", "1896", "1908"],
    answer: 0,
    explanation: "Tanzimat Fermanı 1839'da ilan edilmiş olsa da edebiyat dönemi, Şinasi'nin Tercüman-ı Ahval gazetesini çıkardığı 1860 yılında başlar. 1896 Servetifünun, 1908 ise II. Meşrutiyet'in ilan yılıdır.",
    tip: "Siyasi Tanzimat 1839, edebî Tanzimat 1860. Bu ayrımı unutmayın."
  },
  {
    id: "E02",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Aşağıdaki edebiyat dönemlerinden hangisi diğerlerinden daha sonra gelir?",
    options: ["Millî Edebiyat", "Tanzimat", "Servetifünun", "Fecriati"],
    answer: 0,
    explanation: "Kronolojik sıra Tanzimat (1860-1896), Servetifünun (1896-1901), Fecriati (1909-1912) ve Millî Edebiyat (1911-1923) biçimindedir. Bu nedenle en son Millî Edebiyat gelir.",
    tip: "Sıralama: Tanzimat → Servetifünun → Fecriati → Millî Edebiyat → Cumhuriyet."
  },
  {
    id: "E03",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Cumhuriyet Dönemi'nin ilk yıllarında roman ve hikâyede en çok işlenen konu hangisidir?",
    options: ["Kurtuluş Savaşı ve Anadolu'nun içinde bulunduğu durum", "Sosyal medyanın getirdiği sorunlar", "Uzay yolculukları", "Orta Çağ Avrupa'sının yaşamı"],
    answer: 0,
    explanation: "1923 sonrası ilk yıllarda Kurtuluş Savaşı, Anadolu'nun yoksulluğu, halkın yaşayışı ve yeni devletin kuruluşu öne çıkar. Sosyal medya ve uzay yolculuğu bu dönemin konuları değildir.",
    tip: "Cumhuriyet'in ilk yılları = Kurtuluş Savaşı + Anadolu + yeni hayat. 1950 sonrasında köy, gecekondu ve işçi sorunları ağırlık kazanır."
  },
  {
    id: "E04",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Servetifünun Dönemi'nin özelliklerinden hangisi yanlıştır?",
    options: ["Sade ve halkçı bir dil kullanılmıştır.", "Sanat sanat içindir anlayışı benimsenmiştir.", "Sembolizm ve parnasizm etkisi vardır.", "Serbest müstezat kullanılmıştır."],
    answer: 0,
    explanation: "Servetifünun Dönemi'nde ağır ve süslü bir dil kullanılmış, halkçılık değil sanat sanat içindir anlayışı benimsenmiştir. Sembolizm, parnasizm etkisi ve serbest müstezat bu dönemin belirgin özellikleridir.",
    tip: "Servetifünun = ağır dil + sanat sanat içindir + sembolizm/parnasizm + serbest müstezat. Sade ve halkçı dil Millî Edebiyat'ın özelliğidir."
  },
  {
    id: "E05",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Aşağıdaki eserlerden hangisi İslamiyet sonrası Türk edebiyatının ilk eserlerinden biri değildir?",
    options: ["Şair Evlenmesi", "Kutadgu Bilig", "Divanü Lügati't-Türk", "Atabetü'l-Hakayık"],
    answer: 0,
    explanation: "Kutadgu Bilig, Divanü Lügati't-Türk ve Atabetü'l-Hakayık İslamiyet sonrası Türk edebiyatının ilk dönem eserleridir. Şair Evlenmesi ise Tanzimat Dönemi'nde Şinasi'nin yazdığı ilk yerli tiyatro eseridir.",
    tip: "İslamiyet sonrası ilk eserler: Kutadgu Bilig (Yusuf Has Hacip), Divanü Lügati't-Türk (Kâşgarlı Mahmud), Atabetü'l-Hakayık (Edip Ahmet Yükneki), Divan-ı Hikmet (Ahmed Yesevi)."
  }
];
