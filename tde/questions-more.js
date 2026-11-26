/* AÖL Türk Dili ve Edebiyatı 6 — genişletilmiş soru bankası
   Bu dosya questions.js'teki 54 sorunun üzerine 120 yeni soru ekler.
   source: "extra" = konu tekrarı / muhtemel soru
   answer: seçenekler karıştırılmadan önceki doğru cevap indeksi */
window.QUESTIONS = (window.QUESTIONS || []).concat([
  /* ================= ROMAN (25) ================= */
  {
    id: "R11",
    topic: "Roman",
    source: "extra",
    q: "Aşağıdakilerden hangisi roman türünün bir özelliği değildir?",
    options: ["Olayları geniş bir zaman ve mekân içinde anlatması", "Kişilerin iç dünyasını ayrıntılı biçimde işleyebilmesi", "Genellikle tek bir olayı kısa ve yoğun biçimde anlatması", "Toplumsal ve bireysel konuları ele alabilmesi"],
    answer: 2,
    explanation: "Roman, olayları geniş bir zaman ve mekân içinde, çok sayıda kişi ve ayrıntıyla anlatır. Tek bir olayı kısa ve yoğun biçimde anlatma özelliği hikâyeye aittir.",
    tip: "Roman “geniş ve ayrıntılı”, hikâye “kısa ve yoğun”dur. Tür sorularında bu karşıtlığı hatırla."
  },
  {
    id: "R12",
    topic: "Roman",
    source: "extra",
    q: "Türk edebiyatındaki ilk çeviri roman hangisidir?",
    options: ["Telemak", "Taaşşuk-ı Talat ve Fitnat", "İntibah", "Cezmi"],
    answer: 0,
    explanation: "Yusuf Kamil Paşa'nın Fénelon'dan çevirdiği Telemak (1862), Türk edebiyatında ilk çeviri roman kabul edilir. Taaşşuk-ı Talat ve Fitnat ilk yerli roman, İntibah ilk edebî roman, Cezmi ilk tarihî romandır.",
    tip: "İlkler karışır: çeviri Telemak, yerli Taaşşuk-ı Talat ve Fitnat, edebî İntibah, tarihî Cezmi."
  },
  {
    id: "R13",
    topic: "Roman",
    source: "extra",
    q: "Türk edebiyatının ilk edebî romanı hangisidir?",
    options: ["İntibah", "Cezmi", "Araba Sevdası", "Karabibik"],
    answer: 0,
    explanation: "Namık Kemal'in 1876'da yayımlanan İntibah adlı eseri ilk edebî roman kabul edilir. Cezmi ilk tarihî roman, Araba Sevdası ilk realist roman denemesi, Karabibik ilk köy romanıdır.",
    tip: "İntibah = ilk edebî roman. Namık Kemal'in romancılığı Tanzimat'ın birinci dönemini temsil eder."
  },
  {
    id: "R14",
    topic: "Roman",
    source: "extra",
    q: "Türk edebiyatının ilk tarihî romanı hangisidir?",
    options: ["Cezmi", "İntibah", "Telemak", "Eylül"],
    answer: 0,
    explanation: "Namık Kemal'in Cezmi adlı eseri, tarihî bir konuyu işleyen ilk Türk romanı kabul edilir. İntibah ilk edebî roman, Telemak ilk çeviri roman, Eylül ilk psikolojik romandır.",
    tip: "Cezmi'nin konusu XVI. yüzyıl Osmanlı-İran ilişkilerine dayanır; bu yönüyle tarihî romandır."
  },
  {
    id: "R15",
    topic: "Roman",
    source: "extra",
    q: "Türk edebiyatının ilk köy romanı hangisidir?",
    options: ["Karabibik", "İnce Memed", "Yaban", "Bereketli Topraklar Üzerinde"],
    answer: 0,
    explanation: "Nabizade Nazım'ın 1890'da yayımlanan Karabibik adlı eseri ilk köy romanı kabul edilir. İnce Memed, Yaban ve Bereketli Topraklar Üzerinde Cumhuriyet Dönemi romanlarıdır.",
    tip: "Karabibik kısa bir eserdir; Anadolu köyünün gerçekçi bir tablosunu çizer."
  },
  {
    id: "R16",
    topic: "Roman",
    source: "extra",
    q: "Türk edebiyatının ilk psikolojik romanı hangisidir?",
    options: ["Eylül", "Mai ve Siyah", "Araba Sevdası", "Çalıkuşu"],
    answer: 0,
    explanation: "Mehmet Rauf'un 1901'de yayımlanan Eylül adlı eseri ilk psikolojik roman kabul edilir. Mai ve Siyah Servetifünun Dönemi'nin önemli romanlarındandır; Araba Sevdası realist, Çalıkuşu ise Cumhuriyet Dönemi romanıdır.",
    tip: "Eylül'de olaydan çok kişilerin iç dünyası ve duyguları öne çıkar; bu yüzden psikolojik romanın ilk örneğidir."
  },
  {
    id: "R17",
    topic: "Roman",
    source: "extra",
    q: "İlk realist roman denemesi kabul edilen eser hangisidir?",
    options: ["Araba Sevdası", "İntibah", "Eylül", "Taaşşuk-ı Talat ve Fitnat"],
    answer: 0,
    explanation: "Recaizade Mahmut Ekrem'in Araba Sevdası, Batılı anlamda realizme yönelen ilk roman denemesi kabul edilir. Eserde Batı'yı yanlış anlayan Bihruz Bey'in tutumu eleştirilir.",
    tip: "Araba Sevdası'nın başkişisi Bihruz Bey, yanlış Batılılaşmanın simgesidir."
  },
  {
    id: "R18",
    topic: "Roman",
    source: "extra",
    q: "Mai ve Siyah adlı roman kime aittir?",
    options: ["Halit Ziya Uşaklıgil", "Mehmet Rauf", "Recaizade Mahmut Ekrem", "Hüseyin Cahit Yalçın"],
    answer: 0,
    explanation: "Mai ve Siyah, Servetifünun Dönemi yazarlarından Halit Ziya Uşaklıgil'in romanıdır. Eserde Ahmet Cemil'in edebiyat ve hayat arasındaki hayal kırıklıkları anlatılır.",
    tip: "Halit Ziya'nın başlıca romanları: Mai ve Siyah, Aşk-ı Memnu, Kırık Hayatlar."
  },
  {
    id: "R19",
    topic: "Roman",
    source: "extra",
    q: "Aşk-ı Memnu adlı roman kime aittir?",
    options: ["Halit Ziya Uşaklıgil", "Mehmet Rauf", "Yakup Kadri Karaosmanoğlu", "Peyami Safa"],
    answer: 0,
    explanation: "Aşk-ı Memnu, Halit Ziya Uşaklıgil'in en tanınmış romanlarından biridir. Yasak bir aşkı ve aile içindeki çatışmaları realist bir tutumla anlatır.",
    tip: "Aşk-ı Memnu, Batılı anlamda modern Türk romanının önemli örneklerinden kabul edilir."
  },
  {
    id: "R20",
    topic: "Roman",
    source: "extra",
    q: "Yaban adlı romanın yazarı kimdir?",
    options: ["Yakup Kadri Karaosmanoğlu", "Reşat Nuri Güntekin", "Halide Edip Adıvar", "Peyami Safa"],
    answer: 0,
    explanation: "Yaban, Yakup Kadri Karaosmanoğlu'nun 1932'de yayımlanan romanıdır. Aydın ile Anadolu köylüsü arasındaki kopukluğu Ahmet Celal'in gözünden anlatır.",
    tip: "Yaban'ın başkişisi Ahmet Celal'dir; roman Kurtuluş Savaşı döneminde Anadolu'yu konu alır."
  },
  {
    id: "R21",
    topic: "Roman",
    source: "extra",
    q: "Tutunamayanlar adlı roman kime aittir?",
    options: ["Oğuz Atay", "Ahmet Hamdi Tanpınar", "Yusuf Atılgan", "Kemal Tahir"],
    answer: 0,
    explanation: "Tutunamayanlar, Oğuz Atay'ın 1971-1972'de yayımlanan romanıdır. Toplumla uyum sağlayamayan aydınların iç dünyasını, ironiyi ve farklı anlatım tekniklerini öne çıkarır.",
    tip: "Tutunamayanlar, Türk edebiyatında postmodern anlatımın öncülerinden kabul edilir."
  },
  {
    id: "R22",
    topic: "Roman",
    source: "extra",
    q: "Saatleri Ayarlama Enstitüsü adlı roman kime aittir?",
    options: ["Ahmet Hamdi Tanpınar", "Oğuz Atay", "Peyami Safa", "Tarık Buğra"],
    answer: 0,
    explanation: "Saatleri Ayarlama Enstitüsü, Ahmet Hamdi Tanpınar'ın 1961'de yayımlanan romanıdır. Batılılaşma sürecindeki toplumsal değişimi ironik bir dille ele alır.",
    tip: "Ahmet Hamdi Tanpınar'ın diğer önemli romanı Huzur'dur; her iki eserde de zaman ve medeniyet teması öne çıkar."
  },
  {
    id: "R23",
    topic: "Roman",
    source: "extra",
    q: "Aşağıdaki eserlerden hangisi Yaşar Kemal'e ait değildir?",
    options: ["Tutunamayanlar", "İnce Memed", "Ortadirek", "Yer Demir Gök Bakır"],
    answer: 0,
    explanation: "İnce Memed, Ortadirek ve Yer Demir Gök Bakır Yaşar Kemal'in eserleridir. Tutunamayanlar ise Oğuz Atay'a aittir.",
    tip: "Yaşar Kemal, Çukurova'yı ve köylünün sorunlarını destansı bir dille anlatmasıyla tanınır."
  },
  {
    id: "R24",
    topic: "Roman",
    source: "extra",
    q: "Bereketli Topraklar Üzerinde adlı roman kime aittir?",
    options: ["Orhan Kemal", "Yaşar Kemal", "Kemal Tahir", "Sabahattin Ali"],
    answer: 0,
    explanation: "Bereketli Topraklar Üzerinde, Orhan Kemal'in 1954'te yayımlanan romanıdır. Çukurova'da çalışan işçilerin yoksulluğunu ve emek sömürüsünü gerçekçi biçimde anlatır.",
    tip: "Orhan Kemal'in romanlarında işçiler, çiftçiler ve kent yoksulları öne çıkar."
  },
  {
    id: "R25",
    topic: "Roman",
    source: "extra",
    q: "Devlet Ana adlı roman kime aittir?",
    options: ["Kemal Tahir", "Orhan Kemal", "Tarık Buğra", "Mustafa Necati Sepetçioğlu"],
    answer: 0,
    explanation: "Devlet Ana, Kemal Tahir'in 1967'de yayımlanan romanıdır. Osmanlı Devleti'nin kuruluş sürecini ve Anadolu'daki toplumsal yapıyı geniş bir çerçevede ele alır.",
    tip: "Kemal Tahir, tarihî ve toplumsal romanlarıyla tanınır; Devlet Ana kuruluş dönemini anlatır."
  },
  {
    id: "R26",
    topic: "Roman",
    source: "extra",
    q: "Kürk Mantolu Madonna adlı roman kime aittir?",
    options: ["Sabahattin Ali", "Peyami Safa", "Reşat Nuri Güntekin", "Halide Edip Adıvar"],
    answer: 0,
    explanation: "Kürk Mantolu Madonna, Sabahattin Ali'nin 1943'te yayımlanan romanıdır. Raif Bey'in Maria Puder'e duyduğu aşkı ve iç dünyasını anlatır.",
    tip: "Sabahattin Ali'nin diğer önemli eserleri arasında Kuyucaklı Yusuf ve İçimizdeki Şeytan yer alır."
  },
  {
    id: "R27",
    topic: "Roman",
    source: "extra",
    q: "Dokuzuncu Hariciye Koğuşu adlı roman kime aittir?",
    options: ["Peyami Safa", "Sabahattin Ali", "Ahmet Hamdi Tanpınar", "Yakup Kadri Karaosmanoğlu"],
    answer: 0,
    explanation: "Dokuzuncu Hariciye Koğuşu, Peyami Safa'nın 1930'da yayımlanan romanıdır. Hasta bir gencin hastalık, yalnızlık ve aşk etrafındaki iç dünyasını anlatır.",
    tip: "Peyami Safa bu romanda psikolojik çözümlemeye ve bireyin iç dünyasına ağırlık verir."
  },
  {
    id: "R28",
    topic: "Roman",
    source: "extra",
    q: "Çalıkuşu adlı roman kime aittir?",
    options: ["Reşat Nuri Güntekin", "Halide Edip Adıvar", "Yakup Kadri Karaosmanoğlu", "Refik Halit Karay"],
    answer: 0,
    explanation: "Çalıkuşu, Reşat Nuri Güntekin'in 1922'de yayımlanan romanıdır. Feride'nin Anadolu'da öğretmenlik yaparken yaşadıklarını ve güçlü kişiliğini anlatır.",
    tip: "Çalıkuşu'nun başkişisi Feride'dir; eser Anadolu'nun eğitim sorunlarına da değinir."
  },
  {
    id: "R29",
    topic: "Roman",
    source: "extra",
    q: "Gelecekte geçen olayları, bilim ve teknolojideki gelişmeleri konu alan roman türü hangisidir?",
    options: ["Bilim kurgu", "Fantastik roman", "Polisiye roman", "Tarihî roman"],
    answer: 0,
    explanation: "Bilim kurgu, gelecekte geçen veya bilimsel gelişmelere dayanan olayları konu alır. Fantastik romanda olağanüstü dünyalar, polisiyede suç ve çözümü, tarihî romanda ise geçmişteki olaylar öne çıkar.",
    tip: "Bilim kurgu “bilim ve teknoloji”, fantastik “olağanüstü ve büyülü” dünyalarla ilişkilidir."
  },
  {
    id: "R30",
    topic: "Roman",
    source: "extra",
    q: "Bir suçun işlenmesini ve bu suçun çözülmesini konu alan roman türü hangisidir?",
    options: ["Polisiye roman", "Psikolojik roman", "Toplumsal roman", "Bilim kurgu"],
    answer: 0,
    explanation: "Polisiye roman, genellikle bir cinayet veya suçun aydınlatılması etrafında gelişir. Psikolojik roman bireyin iç dünyasına, toplumsal roman toplumun sorunlarına, bilim kurgu ise bilimsel geleceklere odaklanır.",
    tip: "Polisiyede merak unsuru ve çözüm süreci belirleyicidir."
  },
  {
    id: "R31",
    topic: "Roman",
    source: "extra",
    q: "Yazarın kendi yaşamını anlattığı roman türü hangisidir?",
    options: ["Otobiyografik roman", "Biyografik roman", "Tezli roman", "Pikaresk roman"],
    answer: 0,
    explanation: "Otobiyografik romanda yazar kendi yaşamından yola çıkar. Biyografik romanda başka bir kişinin hayatı, tezli romanda bir düşüncenin savunulması, pikaresk romanda ise serüvenler öne çıkar.",
    tip: "Oto = kendi; biyo = başkasının hayatı. Bu kök bilgisi türleri ayırt etmeyi kolaylaştırır."
  },
  {
    id: "R32",
    topic: "Roman",
    source: "extra",
    q: "Bir düşünceyi savunmak ve kanıtlamak amacıyla yazılan roman türü hangisidir?",
    options: ["Tezli roman", "Psikolojik roman", "Macera romanı", "Fantastik roman"],
    answer: 0,
    explanation: "Tezli roman, yazarın savunduğu bir düşünceyi olay örgüsü içinde kanıtlamaya çalıştığı romandır. Psikolojik roman bireyin iç dünyasına, macera romanı hareketli olaylara, fantastik roman olağanüstü dünyalara yönelir.",
    tip: "Tezli romanda yazarın düşüncesi olaylardan önce gelir; bu yönüyle didaktik bir işlev taşır."
  },
  {
    id: "R33",
    topic: "Roman",
    source: "extra",
    q: "Roman kişisinin kendi iç dünyasında yaşadığı çatışma türü hangisidir?",
    options: ["Kişinin kendisiyle çatışması", "Kişinin doğayla çatışması", "Kişinin toplumla çatışması", "İki kişi arasındaki çatışma"],
    answer: 0,
    explanation: "Kişinin kendisiyle çatışması, roman kahramanının iç dünyasında yaşadığı ikilemleri ve ruhsal gerilimleri anlatır. Doğa, toplum ve diğer kişilerle çatışmalar ise dış çatışmalardır.",
    tip: "İç çatışma “vicdan, korku, kararsızlık” gibi duygularla; dış çatışma ise karşıt güçlerle görünür."
  },
  {
    id: "R34",
    topic: "Roman",
    source: "extra",
    q: "Anlatıcının olayları dışarıdan gözlemlediği ve kişilerin iç dünyasını bilmediği bakış açısı hangisidir?",
    options: ["Gözlemci bakış açısı", "İlahi bakış açısı", "Kahraman anlatıcı bakış açısı", "Çoğul bakış açısı"],
    answer: 0,
    explanation: "Gözlemci bakış açısında anlatıcı yalnızca gördüklerini ve duyduklarını aktarır; kişilerin iç dünyasını bilmez. İlahi bakış açısında her şeyi bilir, kahraman anlatıcıda ise olayları yaşayan kişi anlatır.",
    tip: "Gözlemci anlatıcı bir kamera gibidir: dışarıdan görüneni kaydeder, iç dünyaya girmez."
  },
  {
    id: "R35",
    topic: "Roman",
    source: "extra",
    q: "Kahraman anlatıcı bakış açısıyla yazılan bir romanda anlatım hangi kişiyle yapılır?",
    options: ["Birinci tekil kişi", "Üçüncü tekil kişi", "İkinci tekil kişi", "Üçüncü çoğul kişi"],
    answer: 0,
    explanation: "Kahraman anlatıcı, olayları yaşayan kişilerden biridir ve genellikle “ben” diliyle anlatır. Bu nedenle anlatım birinci tekil kişiyle yapılır.",
    tip: "“Ben” dili = kahraman anlatıcı; dışarıdan “o” dili = gözlemci veya ilahi anlatıcı olabilir."
  },

  /* ================= TİYATRO (20) ================= */
  {
    id: "T10",
    topic: "Tiyatro",
    source: "extra",
    q: "Tiyatroda olayların başlangıç, gelişme ve sonuç biçiminde düzenlenmesine ne denir?",
    options: ["Dramatik örgü", "Dekor", "Replik", "Suflör"],
    answer: 0,
    explanation: "Dramatik örgü, tiyatro eserindeki olayların neden-sonuç ilişkisi içinde düzenlenmesidir. Dekor sahne düzeni, replik oyuncunun sözü, suflör ise oyuncuya yardım eden kişidir.",
    tip: "Dramatik örgü romanın “olay örgüsü”ne benzer; tiyatroda sahnede görünen eyleme dönüşür."
  },
  {
    id: "T11",
    topic: "Tiyatro",
    source: "extra",
    q: "Oyuncunun el, kol ve beden hareketleriyle duygularını anlatmasına ne denir?",
    options: ["Jest", "Mimik", "Tirat", "Replik"],
    answer: 0,
    explanation: "Jest, oyuncunun beden hareketleriyle anlatım yapmasıdır. Mimik yüz ifadeleriyle anlatımdır; tirat uzun ve coşkulu konuşma, replik ise oyuncunun sözüdür.",
    tip: "Jest = beden, mimik = yüz. Bu ikisini karıştırmamak için “jest hareket, mimik ifade” diye düşün."
  },
  {
    id: "T12",
    topic: "Tiyatro",
    source: "extra",
    q: "Oyuncunun yüz kaslarıyla duygu ve düşüncelerini anlatmasına ne denir?",
    options: ["Mimik", "Jest", "Dekor", "Suflör"],
    answer: 0,
    explanation: "Mimik, yüz ifadeleriyle duygu aktarmaktır. Jest beden hareketleriyle yapılır; dekor sahne düzeni, suflör ise oyuncuya replik hatırlatan kişidir.",
    tip: "Mimik “yüz”, jest “beden” ile ilgilidir."
  },
  {
    id: "T13",
    topic: "Tiyatro",
    source: "extra",
    q: "Oyuncuya repliklerini unuttuğunda fısıldayarak hatırlatan kişiye ne denir?",
    options: ["Suflör", "Rejisör", "Dekoratör", "Makyöz"],
    answer: 0,
    explanation: "Suflör, oyun sırasında oyuncuya repliklerini hatırlatan kişidir. Rejisör oyunu yöneten, dekoratör sahneyi düzenleyen, makyöz ise oyuncunun makyajını yapan kişidir.",
    tip: "Suflör “fısıldayan yardımcı”dır; sahne arkasında bulunur."
  },
  {
    id: "T14",
    topic: "Tiyatro",
    source: "extra",
    q: "Bir oyuncunun sahnede uzun ve coşkulu biçimde yaptığı konuşmaya ne denir?",
    options: ["Tirat", "Diyalog", "Monolog", "Replik"],
    answer: 0,
    explanation: "Tirat, oyuncunun sahnede uzun ve etkili bir biçimde yaptığı konuşmadır. Monolog tek kişinin kendi kendine konuşması, diyalog karşılıklı konuşma, replik ise oyuncunun sözüdür.",
    tip: "Tirat genellikle duygusal yoğunluğun arttığı anlarda kullanılır."
  },
  {
    id: "T15",
    topic: "Tiyatro",
    source: "extra",
    q: "İki oyuncunun sahnede karşılıklı konuşmasına ne denir?",
    options: ["Diyalog", "Monolog", "Tirat", "Perde"],
    answer: 0,
    explanation: "Diyalog, iki veya daha fazla kişinin karşılıklı konuşmasıdır. Monolog tek kişinin konuşması, tirat uzun coşkulu konuşma, perde ise oyunun ana bölümlerinden biridir.",
    tip: "Diyalog = karşılıklı; monolog = tek kişi. “Di” iki, “mono” tek anlamına gelir."
  },
  {
    id: "T16",
    topic: "Tiyatro",
    source: "extra",
    q: "Trajedinin ortaya çıktığı uygarlık hangisidir?",
    options: ["Antik Yunan", "Antik Roma", "Antik Mısır", "Mezopotamya"],
    answer: 0,
    explanation: "Trajedi, MÖ 5. yüzyılda Antik Yunan'da Dionysos şenliklerinden doğmuştur. Aiskhylos, Sophokles ve Euripides trajedinin ilk önemli yazarlarıdır.",
    tip: "Trajedi = Antik Yunan + Dionysos şenlikleri. İlk tragedya yazarları Aiskhylos, Sophokles ve Euripides'tir."
  },
  {
    id: "T17",
    topic: "Tiyatro",
    source: "extra",
    q: "Komedi türünün temel amacı aşağıdakilerden hangisidir?",
    options: ["Güldürerek düşündürmek ve toplumsal aksaklıkları eleştirmek", "Acıma ve korku duyguları uyandırmak", "Tarihî olayları belgelemek", "Seyirciyi eğlendirmeden bilgilendirmek"],
    answer: 0,
    explanation: "Komedi, gülmece unsurlarıyla seyirciyi güldürürken toplumun aksayan yönlerini eleştirir ve düşündürür. Acıma ve korku duyguları trajedinin etkisidir.",
    tip: "Komedi = gülme + eleştiri; trajedi = acıma + korku."
  },
  {
    id: "T18",
    topic: "Tiyatro",
    source: "extra",
    q: "Klasik trajedide yer, zaman ve olay birliğini ifade eden kural hangisidir?",
    options: ["Üç birlik kuralı", "Dramatik örgü", "Perde sistemi", "Dekor düzeni"],
    answer: 0,
    explanation: "Üç birlik kuralı, klasik trajedide olayın tek bir yerde, bir gün içinde ve tek bir ana olay etrafında geçmesini öngörür. Dramatik örgü olayların düzenlenmesi, perde ise oyunun bölümüdür.",
    tip: "Üç birlik = yer + zaman + olay. Klasisizmin trajedideki en belirgin kuralıdır."
  },
  {
    id: "T19",
    topic: "Tiyatro",
    source: "extra",
    q: "Karagöz gölge oyununda Karagöz'ün karşısındaki temel tip hangisidir?",
    options: ["Hacivat", "Pişekâr", "Kavuklu", "Meddah"],
    answer: 0,
    explanation: "Karagöz gölge oyununda Karagöz'ün karşısında Hacivat yer alır. Pişekâr ve Kavuklu orta oyununun tipleridir; meddah ise tek kişilik hikâye anlatıcısıdır.",
    tip: "Karagöz–Hacivat gölge oyunu; Pişekâr–Kavuklu orta oyunu. İkisini birlikte ezberle."
  },
  {
    id: "T20",
    topic: "Tiyatro",
    source: "extra",
    q: "Orta oyununda Pişekâr'ın karşısındaki temel tip hangisidir?",
    options: ["Kavuklu", "Hacivat", "Karagöz", "İbiş"],
    answer: 0,
    explanation: "Orta oyununda Pişekâr ile Kavuklu karşılıklı konuşmalarıyla oyunu yürütür. Hacivat ve Karagöz gölge oyununun tipleridir.",
    tip: "Orta oyunu açık alanda oynanır; Pişekâr ve Kavuklu bu oyunun iki temel figürüdür."
  },
  {
    id: "T21",
    topic: "Tiyatro",
    source: "extra",
    q: "Tek kişinin bir hikâye anlatıp çeşitli kişileri taklit etmesiyle oynanan geleneksel gösteri hangisidir?",
    options: ["Meddah", "Karagöz", "Orta oyunu", "Köy seyirlik oyunu"],
    answer: 0,
    explanation: "Meddah, tek kişinin yüksek bir yerde oturup bir hikâye anlattığı, kahramanların seslerini ve tavırlarını taklit ettiği geleneksel gösteridir. Karagöz gölge oyunu, orta oyunu ise çok kişili halk tiyatrosudur.",
    tip: "Meddah “tek kişilik”tir; elinde genellikle bir mendil ve sopa bulunur."
  },
  {
    id: "T22",
    topic: "Tiyatro",
    source: "extra",
    q: "Şair Evlenmesi adlı ilk yerli tiyatro eserinin yazarı kimdir?",
    options: ["Şinasi", "Namık Kemal", "Ahmet Vefik Paşa", "Recaizade Mahmut Ekrem"],
    answer: 0,
    explanation: "Şair Evlenmesi, Şinasi'nin yazdığı ilk yerli tiyatro eseridir. Namık Kemal'in sahnelenen ilk tiyatrosu Vatan Yahut Silistre'dir; Ahmet Vefik Paşa ise Molière'den uyarlamalar yapmıştır.",
    tip: "Şinasi'yi “ilklerin yazarı” olarak hatırla: ilk makale, ilk yerli tiyatro, ilk özel gazete."
  },
  {
    id: "T23",
    topic: "Tiyatro",
    source: "extra",
    q: "Ahmet Vefik Paşa'nın Türk tiyatrosundaki önemi aşağıdakilerden hangisidir?",
    options: ["Molière'in eserlerini çevirip uyarlaması", "İlk köy romanını yazması", "İlk Türkçe gazeteyi çıkarması", "Karagöz'ü ilk kez sahnelemesi"],
    answer: 0,
    explanation: "Ahmet Vefik Paşa, Molière'in eserlerini çevirip Türkçeye uyarlayarak Tanzimat tiyatrosunun gelişmesine katkı sağlamıştır. İlk köy romanı Nabizade Nazım'ın Karabibik'idir; ilk özel gazete Tercüman-ı Ahvâl'dir.",
    tip: "Ahmet Vefik Paşa = Molière uyarlamaları. Türk tiyatrosunda çeviri ve uyarlama geleneğinin öncüsüdür."
  },
  {
    id: "T24",
    topic: "Tiyatro",
    source: "extra",
    q: "Epik tiyatronun Türk edebiyatındaki önemli temsilcisi hangisidir?",
    options: ["Haldun Taner", "Muhsin Ertuğrul", "Cevat Fehmi Başkut", "Turan Oflazoğlu"],
    answer: 0,
    explanation: "Haldun Taner, epik tiyatro anlayışını Türk sahnesine taşıyan önemli yazarlardandır. Keşanlı Ali Destanı bu anlayışın öne çıkan örneğidir. Muhsin Ertuğrul daha çok tiyatro yönetmeni ve sahne sanatçısı olarak tanınır.",
    tip: "Haldun Taner = Keşanlı Ali Destanı = epik tiyatro. Bu üçlüyü birlikte hatırla."
  },
  {
    id: "T25",
    topic: "Tiyatro",
    source: "extra",
    q: "Absürt tiyatro ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: ["Olay örgüsünü ve mantıksal nedenselliği reddeder.", "Üç birlik kuralına sıkı sıkıya bağlıdır.", "Yalnızca tarihî olayları işler.", "Kahramanları her zaman soylu kişilerdir."],
    answer: 0,
    explanation: "Absürt tiyatro, alışılmış olay örgüsünü ve mantıksal nedenselliği reddeder; insanın anlamsızlık duygusunu, iletişimsizliği ve saçma durumları öne çıkarır. Üç birlik kuralı klasik trajedinin özelliğidir.",
    tip: "Absürt = alışılmış mantığın dışına çıkan, “saçma”yı sahneye taşıyan tiyatro."
  },
  {
    id: "T26",
    topic: "Tiyatro",
    source: "extra",
    q: "Tiyatro eserinin ana bölümlerinden her birine ne denir?",
    options: ["Perde", "Dekor", "Replik", "Mimik"],
    answer: 0,
    explanation: "Perde, tiyatro eserinin ana bölümlerinden her biridir. Dekor sahne düzeni, replik oyuncunun sözü, mimik ise yüz ifadesidir.",
    tip: "Oyunlar genellikle “birinci perde, ikinci perde” biçiminde bölümlere ayrılır."
  },
  {
    id: "T27",
    topic: "Tiyatro",
    source: "extra",
    q: "Sahneyi oyunun geçtiği yere benzetmek için yapılan düzenlemeye ne denir?",
    options: ["Dekor", "Kostüm", "Makyaj", "Suflör"],
    answer: 0,
    explanation: "Dekor, sahnenin oyunun geçtiği mekâna uygun biçimde düzenlenmesidir. Kostüm oyuncunun giysisi, makyaj yüz düzenlemesi, suflör ise replik hatırlatan kişidir.",
    tip: "Dekor = sahne mekânı; kostüm = giysi; makyaj = yüz. Üçünü sahnedeki görevlerine göre ayır."
  },
  {
    id: "T28",
    topic: "Tiyatro",
    source: "extra",
    q: "Oyuncunun rolüne uygun olarak giydiği giysiye ne denir?",
    options: ["Kostüm", "Dekor", "Perde", "Tirat"],
    answer: 0,
    explanation: "Kostüm, oyuncunun canlandırdığı role uygun giysisidir. Dekor sahne düzeni, perde oyunun bölümü, tirat ise uzun konuşmadır.",
    tip: "Kostüm oyuncunun “rol kıyafeti”dir."
  },
  {
    id: "T29",
    topic: "Tiyatro",
    source: "extra",
    q: "Tiyatro ile roman arasındaki temel fark aşağıdakilerden hangisidir?",
    options: ["Tiyatro sahnelenmek, roman ise okunmak için yazılır.", "Tiyatroda olay örgüsü bulunmaz.", "Roman yalnızca diyaloglarla yazılır.", "Tiyatroda zaman kavramı yoktur."],
    answer: 0,
    explanation: "Tiyatro metni sahnelenmek üzere yazılır ve seyirciyle buluşur; roman ise okunmak üzere yazılan bir anlatı türüdür. Her iki türde de olay, kişi, zaman ve mekân bulunabilir.",
    tip: "Tiyatro “sahne”, roman “sayfa” sanatıdır; tiyatroda sahne yönergeleri ve diyalog öne çıkar."
  },

  /* ================= ŞİİR (20) ================= */
  {
    id: "S09",
    topic: "Şiir",
    source: "extra",
    q: "Dizelerin sonunda ses benzerliğiyle sağlanan uyuma ne denir?",
    options: ["Uyak", "Redif", "Durak", "Ölçü"],
    answer: 0,
    explanation: "Uyak (kafiye), dize sonlarındaki ses benzerliğidir. Redif uyaktan sonra tekrarlanan aynı görevli ek veya sözcük, durak hece ölçüsündeki bölünme noktası, ölçü ise dizelerin düzenidir.",
    tip: "Uyak = ses benzerliği; redif = uyaktan sonraki tekrar. İkisini aynı dizede birlikte görebilirsin."
  },
  {
    id: "S10",
    topic: "Şiir",
    source: "extra",
    q: "Uyaktan sonra tekrarlanan aynı görevli ek veya sözcüğe ne denir?",
    options: ["Redif", "Uyak", "Asonans", "Aliterasyon"],
    answer: 0,
    explanation: "Redif, uyaktan sonra gelen ve anlamı pekiştiren aynı görevli ek ya da sözcük tekrarıdır. Asonans ünlü, aliterasyon ünsüz tekrarıdır; uyak ise dize sonundaki ses benzerliğidir.",
    tip: "Örnek: “geliyor / gidiyor” sözcüklerinde “-iyor” redif olabilir; bundan önceki sesler uyağı oluşturur."
  },
  {
    id: "S11",
    topic: "Şiir",
    source: "extra",
    q: "Hece ölçüsünde dizelerin okunurken bölündüğü yerlere ne denir?",
    options: ["Durak", "Uyak", "Redif", "Bend"],
    answer: 0,
    explanation: "Durak, hece ölçüsüyle yazılan şiirlerde dizelerin anlam ve söyleyiş bakımından bölündüğü yerlerdir. Uyak ve redif dize sonlarındaki ses düzeniyle, bend ise nazım birimiyle ilgilidir.",
    tip: "Hece ölçüsünde duraklar, şiirin ritmini belirler; örneğin 7+7 gibi kalıplar durak yerlerini gösterir."
  },
  {
    id: "S12",
    topic: "Şiir",
    source: "extra",
    q: "Divan şiirinde kullanılan ölçü hangisidir?",
    options: ["Aruz ölçüsü", "Hece ölçüsü", "Serbest ölçü", "Durak ölçüsü"],
    answer: 0,
    explanation: "Divan şiiri, Arapça ve Farsça kaynaklı aruz ölçüsüyle yazılır. Hece ölçüsü daha çok halk şiirinde, serbest ölçü ise modern şiirde kullanılır.",
    tip: "Divan = aruz; halk = hece; modern = çoğunlukla serbest. Bu eşleştirmeyi unutma."
  },
  {
    id: "S13",
    topic: "Şiir",
    source: "extra",
    q: "Halk şiirinde yaygın olarak kullanılan ölçü hangisidir?",
    options: ["Hece ölçüsü", "Aruz ölçüsü", "Serbest ölçü", "Kafiye ölçüsü"],
    answer: 0,
    explanation: "Halk şiirinde genellikle hece ölçüsü kullanılır; 7'li, 8'li ve 11'li kalıplar yaygındır. Aruz ölçüsü divan şiirinin, serbest ölçü ise modern şiirin özelliğidir.",
    tip: "Halk şairleri heceyi, divan şairleri aruzu kullanır. Bu ayrım şiir sorularında sık çıkar."
  },
  {
    id: "S14",
    topic: "Şiir",
    source: "extra",
    q: "Çapraz uyak düzeni aşağıdakilerden hangisidir?",
    options: ["abab", "aabb", "abba", "aaaa"],
    answer: 0,
    explanation: "Çapraz uyakta birinci dize üçüncüyle, ikinci dize dördüncüyle uyaklanır: abab. Sarma uyak abba, düz uyak ise genellikle aabb biçimindedir.",
    tip: "Çapraz = abab; sarma = abba. “Çapraz”ta dizeler çaprazlama eşleşir."
  },
  {
    id: "S15",
    topic: "Şiir",
    source: "extra",
    q: "Sarma uyak düzeni aşağıdakilerden hangisidir?",
    options: ["abba", "abab", "aabb", "aaab"],
    answer: 0,
    explanation: "Sarma uyakta birinci ve dördüncü dizeler, ikinci ve üçüncü dizeler kendi aralarında uyaklanır: abba. Çapraz uyak abab, düz uyak ise aabb biçimindedir.",
    tip: "Sarma uyak “iç içe” bir düzendir: dıştaki dizeler, içteki dizeler. abba kalıbını görsel olarak hatırla."
  },
  {
    id: "S16",
    topic: "Şiir",
    source: "extra",
    q: "Şiirde dizelerin her birine ne denir?",
    options: ["Dize", "Beyit", "Dörtlük", "Bend"],
    answer: 0,
    explanation: "Şiirde her bir satıra dize (mısra) denir. İki dizeden oluşan birime beyit, dört dizeden oluşan birime dörtlük, daha uzun bölümlere ise bend denir.",
    tip: "Dize = tek satır; beyit = iki dize; dörtlük = dört dize. Nazım birimlerini bu sırayla düşün."
  },
  {
    id: "S17",
    topic: "Şiir",
    source: "extra",
    q: "İki dizeden oluşan nazım birimi hangisidir?",
    options: ["Beyit", "Dörtlük", "Bend", "Dize"],
    answer: 0,
    explanation: "Beyit, iki dizeden oluşan nazım birimidir ve özellikle divan şiirinde yaygındır. Dörtlük dört dizeden, bend ise daha uzun bölümlerden oluşur.",
    tip: "Beyit = iki dize. Gazel, kaside ve mesnevi beyitlerle yazılır."
  },
  {
    id: "S18",
    topic: "Şiir",
    source: "extra",
    q: "Dört dizeden oluşan nazım birimi hangisidir?",
    options: ["Dörtlük", "Beyit", "Bend", "Dize"],
    answer: 0,
    explanation: "Dörtlük, dört dizeden oluşan nazım birimidir; halk şiirinde ve modern şiirde yaygındır. Beyit iki dizeden oluşur, bend daha geniş bölümleri ifade eder.",
    tip: "Mani, koşma ve türkü gibi halk şiiri ürünleri genellikle dörtlüklerle söylenir."
  },
  {
    id: "S19",
    topic: "Şiir",
    source: "extra",
    q: "Divan edebiyatında aşk ve güzellik konularını işleyen, genellikle 5-15 beyitten oluşan nazım şekli hangisidir?",
    options: ["Gazel", "Kaside", "Mesnevi", "Rubai"],
    answer: 0,
    explanation: "Gazel, divan edebiyatında aşk, güzellik ve sevgiliye dair duyguların işlendiği, genellikle 5-15 beyitten oluşan nazım şeklidir. Kaside övgü, mesnevi uzun hikâye, rubai ise dört dizeden oluşur.",
    tip: "Gazel = aşk ve güzellik; kaside = övgü. İkisinin ilk beytine “matla”, son beytine “makta” denir."
  },
  {
    id: "S20",
    topic: "Şiir",
    source: "extra",
    q: "Divan edebiyatında bir kişiyi övmek amacıyla yazılan şiir türü hangisidir?",
    options: ["Kaside", "Gazel", "Mesnevi", "Şarkı"],
    answer: 0,
    explanation: "Kaside, genellikle bir padişahı, devlet büyüğünü veya önemli bir kişiyi övmek için yazılan nazım şeklidir. Gazel aşk ve güzellik, mesnevi ise uzun hikâye anlatır.",
    tip: "Kaside “övgü şiiri”dir; gazel “aşk şiiri” olarak hatırlanabilir."
  },
  {
    id: "S21",
    topic: "Şiir",
    source: "extra",
    q: "Dört dizeden oluşan ve özel aruz kalıplarıyla yazılan divan şiiri nazım şekli hangisidir?",
    options: ["Rubai", "Gazel", "Kaside", "Mesnevi"],
    answer: 0,
    explanation: "Rubai, dört dizeden oluşan ve kendine özgü aruz kalıplarıyla yazılan nazım şeklidir. Gazel ve kaside beyitlerle, mesnevi ise uzun beyitlerle yazılır.",
    tip: "Rubai = dört dize + özel aruz kalıbı. Türk edebiyatında bu türün önemli adı Yahya Kemal'dir."
  },
  {
    id: "S22",
    topic: "Şiir",
    source: "extra",
    q: "Halk şiirinde 11'li hece ölçüsüyle söylenen, genellikle aşk, doğa ve ölüm konularını işleyen dörtlüklerden oluşan nazım şekli hangisidir?",
    options: ["Koşma", "Mani", "Rubai", "Gazel"],
    answer: 0,
    explanation: "Koşma, halk şiirinde 11'li hece ölçüsüyle ve genellikle dörtlüklerle söylenen, aşk, doğa, ölüm gibi konuları işleyen nazım şeklidir. Mani 7'li, rubai ve gazel ise divan şiirine aittir.",
    tip: "Koşma = 11'li hece + dörtlük. Karacaoğlan ve Âşık Veysel'in koşmaları akla gelmeli."
  },
  {
    id: "S23",
    topic: "Şiir",
    source: "extra",
    q: "Mani ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: ["Yedi heceli dörtlüklerden oluşur ve genellikle aaxa uyak düzeni vardır.", "On bir heceli beyitlerden oluşur.", "Aruz ölçüsüyle yazılır.", "Beş beyitten oluşan bir divan şiiri türüdür."],
    answer: 0,
    explanation: "Mani, halk şiirinde yedi heceli dörtlüklerden oluşan, genellikle aaxa uyak düzeniyle söylenen kısa şiir türüdür. Aruz ölçüsü ve beyitler divan şiirinin özellikleridir.",
    tip: "Mani kısa ve yalındır; genellikle ilk iki dize doldurma, son iki dize asıl anlamı taşır."
  },
  {
    id: "S24",
    topic: "Şiir",
    source: "extra",
    q: "İnsan dışı varlıklara insan özellikleri verme sanatı hangisidir?",
    options: ["Teşhis", "Teşbih", "İstiare", "Kinaye"],
    answer: 0,
    explanation: "Teşhis (kişileştirme), insan dışı varlıklara insan gibi duygu, düşünce veya davranış özellikleri vermektir. Teşbih benzetme, istiare eğretileme, kinaye ise sözü hem gerçek hem mecaz anlamıyla kullanmadır.",
    tip: "Teşhis = kişileştirme. “Rüzgâr fısıldadı” örneğinde rüzgâr insan gibi konuşur."
  },
  {
    id: "S25",
    topic: "Şiir",
    source: "extra",
    q: "Bir varlığı kendisinden daha belirgin bir varlığa benzetme sanatı hangisidir?",
    options: ["Teşbih", "Teşhis", "Telmih", "Tenasüp"],
    answer: 0,
    explanation: "Teşbih (benzetme), zayıf bir varlığı güçlü bir varlığa benzeterek anlatma sanatıdır. Teşhis kişileştirme, telmih hatırlatma, tenasüp ise uygunluk ilgisi kurmadır.",
    tip: "Teşbih genellikle “gibi, kadar, sanki” edatlarıyla kurulur."
  },
  {
    id: "S26",
    topic: "Şiir",
    source: "extra",
    q: "Bir sözü hem gerçek hem mecaz anlamıyla kullanma sanatı hangisidir?",
    options: ["Kinaye", "Mecaz", "Teşhis", "Mübalağa"],
    answer: 0,
    explanation: "Kinaye, bir sözün hem gerçek hem mecaz anlamını düşündürecek biçimde kullanılmasıdır. Mecaz sözcüğün gerçek anlamı dışında kullanılması, teşhis kişileştirme, mübalağa ise abartmadır.",
    tip: "Kinayede asıl anlatılmak istenen mecaz anlamdır; gerçek anlam da düşünülebilir."
  },
  {
    id: "S27",
    topic: "Şiir",
    source: "extra",
    q: "Tarihî bir olaya, ünlü bir kişiye veya bir esere işaret etme sanatı hangisidir?",
    options: ["Telmih", "Teşhis", "Tenasüp", "Tekrir"],
    answer: 0,
    explanation: "Telmih, bir dizede tarihî bir olayı, ünlü bir kişiyi veya bir eseri hatırlatma sanatıdır. Teşhis kişileştirme, tenasüp uygunluk ilgisi, tekrir ise tekrardır.",
    tip: "Telmih = hatırlatma. Örneğin “Ferhat gibi dağları delmek” sözü Ferhat efsanesine telmihtir."
  },
  {
    id: "S28",
    topic: "Şiir",
    source: "extra",
    q: "Doğa ve kır yaşamını, çobanların yaşayışını işleyen şiir türü hangisidir?",
    options: ["Pastoral", "Lirik", "Epik", "Didaktik"],
    answer: 0,
    explanation: "Pastoral şiir doğa ve kır yaşamını, özellikle çobanların yaşayışını işler. Lirik şiir duyguları, epik şiir kahramanlık olaylarını, didaktik şiir ise öğretmeyi amaçlar.",
    tip: "Pastoral = doğa ve çoban yaşamı; lirik = duygu; epik = kahramanlık; didaktik = öğretme."
  },

  /* ================= MAKALE, ELEŞTİRİ, MÜLAKAT (15) ================= */
  {
    id: "M08",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "İlk Türkçe makale örneği kabul edilen yazı hangisidir?",
    options: ["Şinasi'nin Tercüman-ı Ahvâl'deki Mukaddime'si", "Namık Kemal'in İntibah'ı", "Ziya Paşa'nın Harabat'ı", "Ahmet Rasim'in Şehir Mektupları"],
    answer: 0,
    explanation: "Şinasi'nin 1860'ta Tercüman-ı Ahvâl gazetesinde yayımladığı Mukaddime, ilk Türkçe makale örneği kabul edilir. İntibah roman, Harabat ise şiir antolojisidir.",
    tip: "Şinasi'nin Mukaddime'si hem ilk makale hem gazetecilik açısından önemli bir metindir."
  },
  {
    id: "M09",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Bir edebî eseri bilimsel ölçütlerle, nesnel bir tutumla inceleyen eleştiri türü hangisidir?",
    options: ["Bilimsel (objektif) eleştiri", "İzlenimci eleştiri", "Mülakat", "Sohbet"],
    answer: 0,
    explanation: "Bilimsel eleştiri, eseri belirli ölçütler ve nesnel bir tutumla inceler. İzlenimci eleştiri eleştirmenin kişisel beğenisini öne çıkarır; mülakat ve sohbet ise farklı yazı türleridir.",
    tip: "Bilimsel eleştiri “ölçüt ve nesnellik”, izlenimci eleştiri “kişisel izlenim” ile hatırlanır."
  },
  {
    id: "M10",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Eleştirmenin eser karşısındaki kişisel izlenimlerini ve beğenisini öne çıkardığı eleştiri türü hangisidir?",
    options: ["İzlenimci (sübjektif) eleştiri", "Bilimsel eleştiri", "Makale", "Röportaj"],
    answer: 0,
    explanation: "İzlenimci eleştiri, eleştirmenin eserle ilgili kişisel duygu ve beğenilerini öne çıkarır. Bilimsel eleştiri ise nesnel ölçütlere dayanır.",
    tip: "İzlenimci = öznel; bilimsel = nesnel. Soruda “kişisel beğeni” geçiyorsa izlenimci eleştiriyi düşün."
  },
  {
    id: "M11",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Mülakat ile röportaj arasındaki temel fark aşağıdakilerden hangisidir?",
    options: ["Röportajda gözlem, inceleme ve ek bilgilere yer verilir; mülakat soru-cevap ağırlıklıdır.", "Mülakatta yalnızca tek kişi konuşur.", "Röportaj yalnızca gazetede yayımlanır.", "Mülakat yalnızca radyoda yapılır."],
    answer: 0,
    explanation: "Mülakat, bir konuda uzman kişiyle soru-cevap biçiminde yapılan görüşmedir. Röportaj ise bir konuyu yerinde inceleyerek gözlem, görüşme ve ek bilgilerle zenginleştirir.",
    tip: "Mülakat = soru-cevap; röportaj = yerinde inceleme + gözlem + görüşme."
  },
  {
    id: "M12",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Güncel bir konuyu kısa ve kişisel bir görüşle ele alan köşe yazısına ne denir?",
    options: ["Fıkra", "Makale", "Mülakat", "Röportaj"],
    answer: 0,
    explanation: "Fıkra, güncel bir konuyu kısa, etkili ve çoğunlukla kişisel bir görüşle ele alan köşe yazısıdır. Makale daha kapsamlı ve kanıtlayıcıdır; mülakat ve röportaj ise görüşmeye dayanır.",
    tip: "Fıkra kısa ve günceldir; makale daha uzun, sistemli ve kanıtlayıcıdır."
  },
  {
    id: "M13",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Yazarın bir konudaki kişisel düşüncelerini kanıtlama zorunluluğu duymadan, sohbet havasında anlattığı yazı türü hangisidir?",
    options: ["Deneme", "Makale", "Haber", "Mülakat"],
    answer: 0,
    explanation: "Deneme, yazarın bir konudaki kişisel görüşlerini kanıtlama kaygısı taşımadan, samimi ve sohbet havasında anlattığı yazı türüdür. Makale ise bir düşünceyi kanıtlamayı amaçlar.",
    tip: "Deneme “denemek” kökünden gelir; yazar düşüncesini okurla birlikte keşfeder."
  },
  {
    id: "M14",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Okuyucuyla karşılıklı konuşuyormuş gibi samimi bir dille yazılan yazı türü hangisidir?",
    options: ["Sohbet", "Makale", "Eleştiri", "Haber"],
    answer: 0,
    explanation: "Sohbet (musahabe), okuyucuyla konuşuyormuş gibi samimi ve içten bir dille yazılan yazı türüdür. Makale ve eleştiri daha resmî ve sistemli bir anlatım kullanır.",
    tip: "Sohbette “siz” veya “biz” dili, sorular ve samimi bir üslup öne çıkar."
  },
  {
    id: "M15",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Bir konuyu yerinde inceleyerek gözlem, görüşme ve belgelere dayalı biçimde anlatan yazı türü hangisidir?",
    options: ["Röportaj", "Fıkra", "Deneme", "Makale"],
    answer: 0,
    explanation: "Röportaj, bir konuyu yerinde inceleyerek gözlem, görüşme ve belgelerle destekleyen yazı türüdür. Fıkra güncel ve kısa, deneme kişisel, makale ise kanıtlayıcıdır.",
    tip: "Röportajda yazarın kendi gözlemleri ve izlenimleri önemli yer tutar."
  },
  {
    id: "M16",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Haber yazısında “ne, nerede, ne zaman, nasıl, neden ve kim” sorularına cevap verilmesine ne denir?",
    options: ["5N1K kuralı", "Üç birlik kuralı", "Dramatik örgü", "Serim-düğüm-çözüm"],
    answer: 0,
    explanation: "Haber yazılarında olayın temel öğelerini ortaya koymak için 5N1K (ne, nerede, ne zaman, nasıl, neden, kim) sorularına cevap aranır. Üç birlik tiyatroya, serim-düğüm-çözüm ise roman ve hikâyeye aittir.",
    tip: "5N1K, haberin eksiksiz ve anlaşılır olmasını sağlar."
  },
  {
    id: "M17",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Türk edebiyatının ilk özel gazetesi hangisidir?",
    options: ["Tercüman-ı Ahvâl", "Takvim-i Vekayi", "Ceride-i Havadis", "Tasvir-i Efkâr"],
    answer: 0,
    explanation: "Tercüman-ı Ahvâl, 1860'ta Şinasi ve Agâh Efendi tarafından çıkarılan ilk özel gazetedir. Takvim-i Vekayi ilk resmî gazete, Ceride-i Havadis ise yarı resmî bir gazetedir.",
    tip: "Takvim-i Vekayi = ilk resmî; Tercüman-ı Ahvâl = ilk özel gazete."
  },
  {
    id: "M18",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Türk edebiyatının ilk resmî gazetesi hangisidir?",
    options: ["Takvim-i Vekayi", "Tercüman-ı Ahvâl", "Tasvir-i Efkâr", "Ceride-i Havadis"],
    answer: 0,
    explanation: "Takvim-i Vekayi, 1831'de yayımlanmaya başlayan ilk resmî Türkçe gazetedir. Tercüman-ı Ahvâl ilk özel gazete, Tasvir-i Efkâr ise Şinasi'nin çıkardığı önemli gazetelerden biridir.",
    tip: "1831 Takvim-i Vekayi = resmî; 1860 Tercüman-ı Ahvâl = özel. Yıllarıyla birlikte hatırla."
  },
  {
    id: "M19",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Ahmet Rasim, daha çok hangi türdeki yazılarıyla tanınır?",
    options: ["Sohbet ve fıkra", "Roman ve hikâye", "Tiyatro oyunları", "Bilimsel makaleler"],
    answer: 0,
    explanation: "Ahmet Rasim, sohbet ve fıkra türündeki yazılarıyla, İstanbul yaşamını canlı ve samimi bir dille anlatmasıyla tanınır. Şehir Mektupları bu yazılarından oluşur.",
    tip: "Ahmet Rasim = sohbet/fıkra + İstanbul gözlemleri. Şehir Mektupları'nı bu adla eşleştir."
  },
  {
    id: "M20",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Nurullah Ataç, Türk edebiyatında daha çok hangi alandaki yazılarıyla tanınır?",
    options: ["Deneme ve eleştiri", "Roman ve hikâye", "Tiyatro", "Şiir"],
    answer: 0,
    explanation: "Nurullah Ataç, deneme ve eleştiri türündeki yazılarıyla tanınır. Türkçenin sadeleşmesi ve dil konusundaki görüşleriyle de edebiyatımızda önemli bir yere sahiptir.",
    tip: "Nurullah Ataç = deneme ve eleştiri; dil konusundaki tartışmalarıyla da bilinir."
  },
  {
    id: "M21",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Makale ile deneme arasındaki temel fark aşağıdakilerden hangisidir?",
    options: ["Makale düşünceyi kanıtlamayı amaçlar; deneme daha çok kişisel görüş ve duyuşu yansıtır.", "Makale yalnızca şiir biçiminde yazılır.", "Deneme belgelerle kanıtlanmak zorundadır.", "Makale soru-cevap biçiminde düzenlenir."],
    answer: 0,
    explanation: "Makale, bir görüşü bilimsel veriler ve kanıtlarla savunur. Deneme ise yazarın kişisel görüşlerini, duyuşunu ve üslubunu öne çıkarır; kanıtlama zorunluluğu yoktur.",
    tip: "Makale “kanıtlar”, deneme “hissettirir”. Bu karşıtlık sorularda ayırt edicidir."
  },
  {
    id: "M22",
    topic: "Makale, Eleştiri, Mülakat",
    source: "extra",
    q: "Eleştiri yazısı yazan kişiye ne denir?",
    options: ["Eleştirmen", "Muhabir", "Suflör", "Meddah"],
    answer: 0,
    explanation: "Eleştiri yazıları yazan kişiye eleştirmen (münekkit) denir. Muhabir haber toplar, suflör tiyatroda oyuncuya yardım eder, meddah ise geleneksel hikâye anlatıcısıdır.",
    tip: "Eleştirmen = münekkit; eserin değerini ölçütlere göre değerlendirir."
  },

  /* ================= ANLATIM BOZUKLUKLARI (15) ================= */
  {
    id: "A08",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde nesne eksikliğinden kaynaklanan anlatım bozukluğu vardır?",
    options: ["Bana bir şeyler söyledi ama anlamadım.", "Bana bir şeyler söyledi ama söylediklerini anlamadım.", "Bana bir şeyler söyledi ve yanımdan ayrıldı.", "Bana bir şeyler söyledi, ben de söylediklerini dinledim."],
    answer: 0,
    explanation: "“Anlamak” fiili nesne ister. “Bana bir şeyler söyledi ama anlamadım.” cümlesinde “anlamadım” yükleminin nesnesi eksiktir; doğrusu “söylediklerini anlamadım” olmalıdır. Diğer cümlelerde nesne eksikliği yoktur.",
    tip: "Nesne eksikliğinde yüklem, kendisinden önceki nesneyi kullanamaz: “Söyledi ama anlamadım.” → “Söylediklerini anlamadım.”"
  },
  {
    id: "A09",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde tümleç eksikliğinden kaynaklanan anlatım bozukluğu vardır?",
    options: ["Yeni işine başladı ve çok memnun oldu.", "Yeni işine başladı ve işini çok sevdi.", "Yeni işinde çalışmaya başladı.", "Yeni işini bitirdi ve evine döndü."],
    answer: 0,
    explanation: "“Memnun olmak” fiili “-den” hâliyle kullanılır: “işinden memnun oldu.” Cümlede “işine” denildiği için ikinci yüklemin istediği tümleç eksik kalmıştır.",
    tip: "Bir fiilin istediği ek veya edatı kontrol et: “memnun olmak -den”, “güvenmek -e”, “inanmak -e” ister."
  },
  {
    id: "A10",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde yüklem eksikliğinden kaynaklanan anlatım bozukluğu vardır?",
    options: ["Sen çalışkan, ben tembelim.", "Sen çalışkansın, ben tembelim.", "Sen de ben de çalışkanız.", "Ben tembelim, sen çalışkansın."],
    answer: 0,
    explanation: "“Sen çalışkan, ben tembelim.” cümlesinde “sen” öznesinin yüklemi eksiktir; “Sen çalışkansın, ben tembelim.” olmalıdır. Diğer cümlelerde özne ve yüklem birbirini tamamlar.",
    tip: "Sıralı cümlelerde her öznenin yüklemini ayrı ayrı kontrol et; eksik yüklem anlatım bozukluğu oluşturur."
  },
  {
    id: "A11",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “yaşamak” sözcüğü yanlış anlamda kullanılmıştır?",
    options: ["Yıllarca aynı mahallede yaşadı.", "Bu acı olayı bütün kalbiyle yaşadı.", "Bu şehirde yaşamak çok pahalı.", "Kitabı masanın üzerinde yaşadı."],
    answer: 3,
    explanation: "“Yaşamak” sözcüğü “Kitabı masanın üzerinde yaşadı.” cümlesinde “durmak, bulunmak” anlamında kullanılamaz; “Kitap masanın üzerinde durdu.” denmelidir. Diğer cümlelerde sözcük doğru anlamıyla kullanılmıştır.",
    tip: "Bir sözcüğün cümleye uymayan anlamda kullanılması “yanlış anlamda sözcük” hatasıdır."
  },
  {
    id: "A12",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “ne ... ne de” bağlacıyla ilgili anlatım bozukluğu vardır?",
    options: ["Ne yemek yedi ne de su içti.", "Ne parası ne de zamanı yok.", "Ne annesi ne de babası geldi.", "Ne aradı ne sordu."],
    answer: 1,
    explanation: "“Ne ... ne de” bağlacıyla kurulan cümlelerde yüklem genellikle olumlu olur: “Ne parası ne de zamanı var.” “Yok” yüklemi olumsuz olduğu için anlatım bozukluğu oluşmuştur.",
    tip: "“Ne ... ne” zaten olumsuzluk taşır; yüklemi ayrıca olumsuz yapmak çifte olumsuzluk yaratır."
  },
  {
    id: "A13",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “için” edatı yanlış kullanılmıştır?",
    options: ["Sınava hazırlanmak için çok çalıştı.", "Hasta olduğu için okula gitmedi.", "Bu kitabı senin için aldım.", "Onu görmek için çok sevindim."],
    answer: 3,
    explanation: "“Onu görmek için çok sevindim.” cümlesinde “için” neden-sonuç ilişkisi kuramaz. Doğrusu “Onu görünce çok sevindim.” veya “Onu gördüğüm için çok sevindim.” olmalıdır.",
    tip: "“İçin” amaç veya neden bildirir; cümleye “hangi amaçla?” sorusu uymuyorsa edat yanlış kullanılmış olabilir."
  },
  {
    id: "A14",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “çünkü” bağlacı yanlış kullanılmıştır?",
    options: ["Okula gitmedi çünkü hastaydı.", "Çok çalıştı çünkü sınavı kazandı.", "Tren gecikti çünkü kar yağışı vardı.", "Uyuyakaldı çünkü gece geç yatmıştı."],
    answer: 1,
    explanation: "“Çünkü” kendisinden önceki yargının nedenini açıklar. “Çok çalıştı çünkü sınavı kazandı.” cümlesinde neden-sonuç ilişkisi ters kurulmuştur; doğrusu “Sınavı kazandı çünkü çok çalıştı.” olmalıdır.",
    tip: "“Çünkü”den sonra gelen bölüm, önceki yargının nedeni olmalıdır. Sonuç ile nedeni karıştırma."
  },
  {
    id: "A15",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde mantık hatası vardır?",
    options: ["Sınavdan yüksek not aldığı için çok sevindi.", "Bütün gece uyumadığı için sabah çok dinçti.", "Yağmur yağdığı için yollar ıslandı.", "Kitabı bitirdiği için rahatladı."],
    answer: 1,
    explanation: "Bütün gece uyumamak insanı yorgun ve uykulu yapar; sabah “çok dinç” olması mantıksal olarak çelişir. Cümle “Bütün gece uyumadığı için sabah çok yorgundu.” biçiminde düzeltilmelidir.",
    tip: "Neden-sonuç ilişkisinin yaşam gerçeklerine uyup uymadığını kontrol et."
  },
  {
    id: "A16",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde sıralama hatası vardır?",
    options: ["Sınava hazırlandım, sonra sınava girdim.", "Sınava girdim, sonra hazırlandım.", "Kahvaltı yaptım, ardından okula gittim.", "Kitabı okudum, sonra arkadaşıma verdim."],
    answer: 1,
    explanation: "Önce sınava hazırlanmak, sonra sınava girmek gerekir. “Sınava girdim, sonra hazırlandım.” cümlesinde olayların sırası ters verilmiştir.",
    tip: "“Önce-sonra”, “ilk-ardından” gibi ifadelerde olayların gerçekleşme sırasına dikkat et."
  },
  {
    id: "A17",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde çelişen sözcükler bir arada kullanılmıştır?",
    options: ["Kesinlikle haklı olabilirsin.", "Belki yarın gelebilir.", "Sanırım bu doğru.", "Muhtemelen geç kalacağız."],
    answer: 0,
    explanation: "“Kesinlikle” kesinlik, “olabilir” ise olasılık bildirir. İkisinin aynı cümlede kullanılması çelişki yaratır: “Kesinlikle haklısın.” veya “Sanırım haklı olabilirsin.” denmelidir.",
    tip: "“Kesinlikle, mutlaka, elbette” gibi kesinlik sözleriyle “olabilir, sanırım, belki” gibi olasılık sözlerini bir arada kullanma."
  },
  {
    id: "A18",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde gereksiz yardımcı fiil kullanımından kaynaklanan anlatım bozukluğu vardır?",
    options: ["Karar verdi.", "Hareket etti.", "Kitabı okuma işlemini gerçekleştirdi.", "Spor yaptı."],
    answer: 2,
    explanation: "“Okuma işlemini gerçekleştirdi” yerine doğrudan “okudu” denmelidir. Gereksiz yardımcı fiil ve dolambaçlı anlatım cümleyi bozar.",
    tip: "“İşlemini gerçekleştirdi, yapmış bulundu” gibi kalıplar yerine yalın fiili kullan: “okudu”, “yaptı”."
  },
  {
    id: "A19",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde deyimin yanlış kullanılmasından kaynaklanan anlatım bozukluğu vardır?",
    options: ["Sınavı kazanınca etekleri zil çaldı.", "Sınavdan düşük not alınca içi içine sığmadı.", "Zor günlerde hep yanımda oldu, başımın tacı oldu.", "Konuyu anlamayınca kafası karıştı."],
    answer: 1,
    explanation: "“İçi içine sığmamak” çok sevinmek, yerinde duramamak anlamına gelir. Düşük not alınca üzülmek gerekir; bu nedenle deyim yanlış kullanılmıştır. “Etekleri zil çalmak” ise sevinmeyi doğru anlatır.",
    tip: "Deyimlerin anlamını bilmeden kullanmak anlatım bozukluğuna yol açar; deyimin cümledeki duyguyla uyumunu kontrol et."
  },
  {
    id: "A20",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “o” zamirinin hangi adı karşıladığı belirsizdir?",
    options: ["Ali, Ahmet'i gördü; o, çok sevindi.", "Ali, Ahmet'i gördü ve çok sevindi.", "Ali, Ahmet'i gördü; Ali çok sevindi.", "Ahmet, Ali'yi gördü; Ahmet çok sevindi."],
    answer: 0,
    explanation: "“Ali, Ahmet'i gördü; o, çok sevindi.” cümlesinde “o” zamiri Ali'yi de Ahmet'i de karşılayabilir. Anlam belirsizliğini gidermek için “Ali çok sevindi.” veya “Ahmet çok sevindi.” denmelidir.",
    tip: "Zamirin yerine hangi adı koyduğunda cümle anlamlı oluyorsa, zamir belirsizdir; adı açıkça yaz."
  },
  {
    id: "A21",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde fiilin istediği tümleç eksiktir?",
    options: ["Bu konuda seninle aynı fikirdeyim.", "Onunla her zaman gurur duyarım.", "Seni çok seviyorum ve her zaman güveniyorum.", "Bana yardım ettiği için teşekkür ettim."],
    answer: 2,
    explanation: "“Güvenmek” fiili “kime” sorusuna cevap veren bir tümleç ister: “sana güveniyorum.” Cümlede “seni” denildiği için ikinci fiilin tümleci eksik kalmıştır.",
    tip: "“Güvenmek, inanmak, bağlanmak” gibi fiiller “-e” hâlini ister; “seni güveniyorum” değil, “sana güveniyorum” doğrudur."
  },
  {
    id: "A22",
    topic: "Anlatım Bozuklukları",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde anlatım bozukluğu yoktur?",
    options: ["Kesinlikle haklı olabilirsin.", "Bütün gece uyumadığı için sabah çok dinçti.", "Sınava girdim, sonra hazırlandım.", "Sınava hazırlandım, sonra sınava girdim."],
    answer: 3,
    explanation: "“Sınava hazırlandım, sonra sınava girdim.” cümlesinde olay sırası ve anlam tutarlıdır. Diğerlerinde sırasıyla çelişen sözcükler, mantık hatası ve sıralama hatası vardır.",
    tip: "Anlatım bozukluğu olmayan cümleyi ararken her seçeneği sırayla mantık, sıralama ve sözcük anlamı bakımından kontrol et."
  },

  /* ================= YAZIM VE NOKTALAMA (15) ================= */
  {
    id: "Y09",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde “mi” soru ekinin yazımı yanlıştır?",
    options: ["Bu kitabı sen mi aldın?", "Yarın gelecek misin?", "Sınava çalıştınmı?", "O da bizimle mi geliyor?"],
    answer: 2,
    explanation: "Soru eki “mi” her zaman ayrı yazılır: “Sınava çalıştın mı?” “Çalıştınmı” biçiminde bitişik yazılması yanlıştır.",
    tip: "“mi, mı, mu, mü” soru ekleri ayrı yazılır; kendisinden önceki sözcüğe bitişmez."
  },
  {
    id: "Y10",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde bitişik yazılması gereken sözcük ayrı yazılmıştır?",
    options: ["Her şey yolunda gidiyor.", "Bir çok öğrenci sınava girdi.", "Birkaç kişi geldi.", "Hiçbir sorun yok."],
    answer: 1,
    explanation: "“Birçok” sözcüğü bitişik yazılır; “bir çok” biçimi yanlıştır. “Her şey” ayrı, “birkaç” ve “hiçbir” bitişik yazılır.",
    tip: "“Birçok, birkaç, hiçbir, herhangi” bitişik; “her şey” ise ayrı yazılır."
  },
  {
    id: "Y11",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde unvanın yazımı yanlıştır?",
    options: ["Doktor Ayşe Hanım hastayı muayene etti.", "Öğretmen Mehmet Bey sınıfa girdi.", "Profesör Dr. Ali Yılmaz konuştu.", "müdür Ahmet Bey toplantıyı açtı."],
    answer: 3,
    explanation: "Unvanlar özel addan önce kullanıldığında büyük harfle başlar: “Müdür Ahmet Bey”. “müdür” sözcüğünün küçük yazılması yanlıştır.",
    tip: "Kişi adından önce gelen “Doktor, Öğretmen, Müdür, Profesör” gibi unvanlar büyük harfle başlar."
  },
  {
    id: "Y12",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde dönem adının yazımı yanlıştır?",
    options: ["Tanzimat Dönemi'nde roman gelişti.", "Servetifünun Dönemi'nde şiir öne çıktı.", "milli edebiyat döneminde sade dil kullanıldı.", "Cumhuriyet Dönemi'nde tiyatro gelişti."],
    answer: 2,
    explanation: "Dönem adları özel ad olarak büyük harfle başlar: “Milli Edebiyat Dönemi'nde”. “milli edebiyat dönemi” biçiminde küçük yazılması yanlıştır.",
    tip: "Tanzimat, Servetifünun, Fecriati, Milli Edebiyat ve Cumhuriyet dönem adları büyük harfle yazılır."
  },
  {
    id: "Y13",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde kısaltmaya gelen ek kesme işaretiyle ayrılmamıştır?",
    options: ["TBMM'de görüşmeler sürüyor.", "MEB'e dilekçe verdi.", "ABD'ye gitti.", "TBMMde karar alındı."],
    answer: 3,
    explanation: "Kısaltmalara gelen ekler kesme işaretiyle ayrılır: “TBMM'de”. “TBMMde” biçiminde bitişik yazılması yanlıştır.",
    tip: "Kısaltmalara gelen ekler kesmeyle ayrılır: MEB'e, TBMM'de, ABD'ye. Ancak kısaltmanın okunuşuna göre ünlü uyumu değişebilir."
  },
  {
    id: "Y14",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde yüzde işaretinin yazımı yanlıştır?",
    options: ["Bu üründe %25 indirim var.", "Sınavdan % 80 aldı.", "Nüfusun %10'u öğrenci.", "Enflasyon %15 arttı."],
    answer: 1,
    explanation: "Yüzde işareti ile sayı arasında boşluk bırakılmaz: “%80”. “% 80” biçimindeki boşluk yanlıştır.",
    tip: "Yüzde işareti sayıdan önce ve bitişik yazılır: %50, %100."
  },
  {
    id: "Y15",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde tarih yazımı yanlıştır?",
    options: ["Toplantı 12 Mayıs 2026 Salı günü yapılacak.", "Cumhuriyet 29 Ekim 1923'te ilan edildi.", "Okul 1985'te açıldı.", "Sınav 5 mayıs 2026'da yapılacak."],
    answer: 3,
    explanation: "Belirli bir tarih bildiren ay adları büyük harfle başlar: “5 Mayıs 2026'da”. “mayıs” sözcüğünün küçük yazılması yanlıştır.",
    tip: "Belirli bir günle birlikte kullanılan ay adları büyük; genel zaman bildiren ay adları küçük yazılır: “5 Mayıs” ama “mayıs ayında”."
  },
  {
    id: "Y16",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde saat yazımı yanlıştır?",
    options: ["Toplantı saat 14.30'da başlayacak.", "Ders saat 09.00'da başlıyor.", "Saat 18.00'de buluşalım.", "Saat 20.00 de sinema var."],
    answer: 3,
    explanation: "Saat bildiren rakamlara gelen ek kesme işaretiyle ayrılır: “20.00'de”. “20.00 de” biçiminde ayrı yazılması yanlıştır.",
    tip: "Saatlerde “14.30'da, 09.00'da, 20.00'de” gibi kesme işareti kullanılır."
  },
  {
    id: "Y17",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde renk adının yazımı yanlıştır?",
    options: ["Kahvaltıda yeşil zeytin yedim.", "Kırmızı biber yemeğe tat verdi.", "Mavi kalemini kaybetti.", "Kahvaltıda yeşilzeytin yedim."],
    answer: 3,
    explanation: "Renk adı ile ondan sonra gelen varlık adı ayrı yazılır: “yeşil zeytin”. “yeşilzeytin” biçiminde bitişik yazılması yanlıştır.",
    tip: "Renk sıfatları ayrı yazılır: kırmızı biber, mavi kalem, yeşil zeytin. Ancak “kırmızıbiber” gibi bitki adları ayrı birer sözcüktür."
  },
  {
    id: "Y18",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde yön adının yazımı yanlıştır?",
    options: ["Doğu Anadolu'da kış sert geçer.", "Karadeniz'in doğusunda yağmur var.", "Ülkemizin batısında nüfus yoğun.", "Doğu'ya doğru yola çıktık."],
    answer: 3,
    explanation: "Yön bildiren “doğu, batı, kuzey, güney” sözcükleri özel ad olarak kullanılmadığında küçük ve kesmesiz yazılır: “doğuya doğru”. “Doğu'ya” biçimi yanlıştır.",
    tip: "“Doğu Anadolu” özel yer adıdır, büyük; “doğuya doğru” yön bildirir, küçük yazılır."
  },
  {
    id: "Y19",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde dinî gün veya ay adının yazımı yanlıştır?",
    options: ["İslamiyet'in ilkeleri bu kitapta anlatılıyor.", "Müslümanlar ramazan ayında oruç tutar.", "Hristiyanlar Noel'i kutlar.", "Yahudiler sinagogda ibadet eder."],
    answer: 1,
    explanation: "Dinî bayram ve ay adları büyük harfle başlar: “Ramazan ayında”. “ramazan” sözcüğünün küçük yazılması yanlıştır.",
    tip: "Ramazan, Kurban Bayramı, Noel gibi dinî gün ve ay adları büyük harfle başlar."
  },
  {
    id: "Y20",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde noktalı virgül doğru kullanılmıştır?",
    options: ["Kardeşim; okula gitti.", "Ali, Ayşe; ve Mehmet sinemaya gitti.", "Sınavda matematik, fizik, kimya; Türkçe ve tarih soruları vardı.", "Kitap; defter, kalem ve silgi aldım."],
    answer: 2,
    explanation: "Noktalı virgül, virgüllerle ayrılmış grupları birbirinden ayırmak için kullanılır: “matematik, fizik, kimya; Türkçe ve tarih”. Diğerlerinde özne ile yüklem veya eş görevli sözcükler arasında yanlış kullanılmıştır.",
    tip: "Noktalı virgül, virgülün yetersiz kaldığı gruplamalarda devreye girer; tek başına özne ile yüklemi ayırmaz."
  },
  {
    id: "Y21",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdakilerden hangisi üç noktanın kullanım amaçlarından biri değildir?",
    options: ["Tamamlanmış bir cümlenin sonuna konur.", "Söylenmek istenmeyen sözlerin yerine konur.", "Cümlenin devamının okuyucuya bırakıldığını gösterir.", "Anlatım boşluğunu belirtir."],
    answer: 0,
    explanation: "Üç nokta, tamamlanmamış cümlelerde, anlatım boşluklarında, söylenmek istenmeyen sözlerin yerine ve sıralamanın devam ettiğini göstermek için kullanılır. Tamamlanmış bir cümlenin sonuna ise nokta konur.",
    tip: "Üç nokta “bitmemişlik ve eksiltme” işaretidir; tamamlanmış cümlede nokta kullanılır."
  },
  {
    id: "Y22",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde tırnak işareti gereksiz kullanılmıştır?",
    options: ["Öğretmen “Yarın sınav var.” dedi.", "“Yaban” romanını çok sevdim.", "“Buraya gel.” dedi.", "“Ankara”ya gittim."],
    answer: 3,
    explanation: "Tırnak işareti alıntı sözler ve eser adları için kullanılır. “Ankara” özel bir yer adıdır; tırnak içine alınmaz, gelen ek de kesmeyle ayrılır: “Ankara'ya gittim.”",
    tip: "Tırnak: alıntı ve eser adı. Özel yer adlarında tırnak değil, kesme işareti kullanılır."
  },
  {
    id: "Y23",
    topic: "Yazım ve Noktalama",
    source: "extra",
    q: "Aşağıdaki cümlelerin hangisinde kısa çizgi yanlış kullanılmıştır?",
    options: ["2020-2021 eğitim öğretim yılı", "Ankara-İstanbul arası 450 km", "Türkçe-İngilizce sözlük", "Ali - okula gitti."],
    answer: 3,
    explanation: "Kısa çizgi, arasında anlamı veren sıralamalarda ve eşleştirmelerde kullanılır. “Ali - okula gitti.” cümlesinde özne ile yüklem arasında kullanılması yanlıştır; “Ali okula gitti.” olmalıdır.",
    tip: "Kısa çizgi “arasında” anlamı verir: 2020-2021, Ankara-İstanbul. Cümle öğelerini ayırmak için kullanılmaz."
  },

  /* ================= EDEBÎ DÖNEMLER (10) ================= */
  {
    id: "E06",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Tanzimat Dönemi'nin birinci döneminde edebiyatta öne çıkan kavramlar hangileridir?",
    options: ["Hürriyet, vatan ve millet", "Bilinçaltı ve rüya", "Sanat sanat içindir", "Metinlerarasılık ve ironi"],
    answer: 0,
    explanation: "Tanzimat'ın birinci döneminde Şinasi, Namık Kemal ve Ziya Paşa gibi yazarlar hürriyet, vatan, millet ve adalet kavramlarını işlemiştir. “Sanat sanat içindir” Servetifünun'a, bilinçaltı ve ironi ise modern/postmodern dönemlere aittir.",
    tip: "Tanzimat birinci dönem = toplum için sanat + hürriyet/vatan/millet. İkinci dönemde bireysel konular artar."
  },
  {
    id: "E07",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Fecriati topluluğunun sanat anlayışını özetleyen söz hangisidir?",
    options: ["Sanat şahsi ve muhteremdir.", "Sanat sanat içindir.", "Halk için sanat.", "Sanat toplum içindir."],
    answer: 0,
    explanation: "Fecriati topluluğu, Ahmet Haşim'in “Sanat şahsi ve muhteremdir.” sözüyle sanatın kişisel ve saygın olduğunu savunmuştur. “Sanat sanat içindir” Servetifünun'un, “Halk için sanat” ise Milli Edebiyat'ın anlayışına daha yakındır.",
    tip: "Fecriati = “Sanat şahsi ve muhteremdir.” Bu sözü toplulukla birlikte ezberle."
  },
  {
    id: "E08",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Milli Edebiyat Dönemi'nin dil anlayışı aşağıdakilerden hangisidir?",
    options: ["Sade İstanbul Türkçesi", "Ağır Osmanlıca", "Arapça ve Farsça ağırlıklı dil", "Yalnızca Fransızca"],
    answer: 0,
    explanation: "Milli Edebiyat Dönemi'nde sade İstanbul Türkçesi esas alınmış, halkın anlayabileceği bir dil kullanılmıştır. Ağır Osmanlıca daha çok divan ve Servetifünun dönemlerinde görülür.",
    tip: "Milli Edebiyat = sade dil + hece ölçüsü + Anadolu. Bu üçlüyü birlikte hatırla."
  },
  {
    id: "E09",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Klasisizm akımının özelliklerinden biri hangisidir?",
    options: ["Akıl, sağduyu ve ölçüye önem vermesi", "Duygu ve hayali öne çıkarması", "Bilinçaltını ve rüyaları işlemesi", "Doğayı birebir taklit etmesi"],
    answer: 0,
    explanation: "Klasisizm, 17. yüzyıl Fransa'sında ortaya çıkmış; akıl, sağduyu, ölçü ve kurala bağlılığı öne çıkarmıştır. Duygu ve hayal romantizme, bilinçaltı sürrealizme aittir.",
    tip: "Klasisizm = akıl + ölçü + üç birlik. Trajedideki “üç birlik” kuralı bu akımla ilişkilidir."
  },
  {
    id: "E10",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Romantizm akımının özelliklerinden biri hangisidir?",
    options: ["Duygu, hayal ve bireysel özgürlüğü öne çıkarması", "Akıl ve ölçüye bağlı kalması", "Yalnızca gözleme dayanması", "Bilinçaltını çözümlemesi"],
    answer: 0,
    explanation: "Romantizm, klasisizmin akıl ve kuralcılığına tepki olarak doğmuş; duygu, hayal, doğa ve bireysel özgürlüğü öne çıkarmıştır. Victor Hugo ve Lamartine bu akımın önemli temsilcileridir.",
    tip: "Romantizm = duygu + hayal + özgürlük; klasisizm = akıl + kural + ölçü."
  },
  {
    id: "E11",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Realizm akımının özelliklerinden biri hangisidir?",
    options: ["Gerçeği gözlem ve nesnellikle yansıtması", "Olağanüstü olaylara geniş yer vermesi", "Duyguları abartılı biçimde işlemesi", "Sanatı toplumdan tamamen koparması"],
    answer: 0,
    explanation: "Realizm, gerçeği gözlem ve nesnellikle yansıtmayı amaçlar; kişileri ve toplumu olduğu gibi göstermeye çalışır. Olağanüstülük ve abartılı duygu romantizme daha yakındır.",
    tip: "Realizm = gerçek + gözlem + nesnellik. Balzac ve Stendhal bu akımın önemli adlarıdır."
  },
  {
    id: "E12",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "İnsanı çevre ve kalıtımla açıklayan, deneysel yöntemi edebiyata uygulayan akım hangisidir?",
    options: ["Natüralizm", "Realizm", "Romantizm", "Parnasizm"],
    answer: 0,
    explanation: "Natüralizm, realizmin daha ileri bir yorumu olarak insanı çevre ve kalıtımla açıklar; deneysel yöntemi edebiyata uygular. Émile Zola bu akımın öncüsüdür.",
    tip: "Natüralizm = realizm + determinizm + deneysel yöntem. Zola ile birlikte hatırla."
  },
  {
    id: "E13",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Anlamı doğrudan değil, simgeler ve sözcüklerin musikisiyle sezdirmeyi amaçlayan akım hangisidir?",
    options: ["Sembolizm", "Realizm", "Klasisizm", "Natüralizm"],
    answer: 0,
    explanation: "Sembolizm, anlamı simgelerle ve sözcüklerin ses uyumuyla sezdirmeyi amaçlar. Verlaine ve Mallarmé bu akımın önemli temsilcileridir.",
    tip: "Sembolizm = simge + musiki + sezdirme. “Anlatmak değil, hissettirmek” diye özetlenebilir."
  },
  {
    id: "E14",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Metinlerarasılık, ironi ve kurgu oyunlarını öne çıkaran edebiyat akımı hangisidir?",
    options: ["Postmodernizm", "Klasisizm", "Parnasizm", "Fütürizm"],
    answer: 0,
    explanation: "Postmodernizm, metinlerarasılık, ironi, parodi ve kurgu oyunlarıyla geleneksel anlatı kalıplarını sorgular. Klasisizm akıl ve kurala, parnasizm biçim güzelliğine, fütürizm ise gelecek ve hıza odaklanır.",
    tip: "Postmodernizm = metinlerarasılık + ironi + kurgu oyunu. Oğuz Atay'ın Tutunamayanlar'ı bu anlayışla ilişkilendirilir."
  },
  {
    id: "E15",
    topic: "Edebi Dönemler",
    source: "extra",
    q: "Bilinçaltını, rüyaları ve otomatik yazıyı öne çıkaran 20. yüzyıl akımı hangisidir?",
    options: ["Sürrealizm", "Realizm", "Natüralizm", "Parnasizm"],
    answer: 0,
    explanation: "Sürrealizm (gerçeküstücülük), bilinçaltını, rüyaları ve otomatik yazıyı öne çıkarır. André Breton akımın öncülerindendir. Realizm ve natüralizm gerçeği gözleme dayalı yansıtmayı amaçlar.",
    tip: "Sürrealizm = bilinçaltı + rüya + otomatik yazı. “Gerçeküstü” anlamına gelen adıyla hatırla."
  }
]);
