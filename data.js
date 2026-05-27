heartSvg = '<svg viewBox="0 0 32 29.6" style="width:100%; height:100%;"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-11.3,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>'

// heart sizes (px)
const heartSizes = [14, 18, 22, 26, 30, 36, 42, 48, 54, 60, 66, 72];

// heart colors (heart color, text color)
const heartColors = [
  ["#ff4d6d", "#cdc1c3ff"],
  ["#ff758f", "#651b29ff"],
  ["#ff8fab", "#a73853ff"],
  ["#ffc2d1", "#6c1e31ff"],
  ["#ffb3c6", "#70424eff"],
  ["#ff6b81", "#fbc9cfff",],
  ["#ff9aa2", "#5a292dff"],
  ["#ff3b3b", "#ffc8c8ff"]
];

const iLoveYouTexts = [
    "Seni seviyorum",
    "I love you",
    "Je t’aime",
    "Te amo",
    "Ti amo",
    "Ich liebe dich",
    "Я тебя люблю",
]


const countryIdMap = {
    "United States": "US",
    "Turkey": "TR"
}


const siteData = 
{
    "US" : {
        name: "Amerika",

        slideShowItems: [
            "media/images/slide-show/usa/united-states0.webp",
            "media/images/slide-show/usa/united-states1.webp",
            "media/images/slide-show/usa/united-states2.webp",
            "media/images/slide-show/usa/united-states3.webp",
            "media/images/slide-show/usa/united-states4.webp"
        ],

        galleryItems: [
            "media/images/gallery-page/us/us0.webp",
            "media/images/gallery-page/us/us1.webp",
            "media/images/gallery-page/us/us2.webp",
            "media/images/gallery-page/us/us3.webp",
            "media/images/gallery-page/us/us4.webp",
            "media/images/gallery-page/us/us5.webp",
            "media/images/gallery-page/us/us6.webp",
            "media/images/gallery-page/us/us7.webp",
            "media/images/gallery-page/us/us8.webp",
            "media/images/gallery-page/us/us9.webp",
            "media/images/gallery-page/us/us10.webp",
            "media/images/gallery-page/us/us11.webp",
            "media/images/gallery-page/us/us12.webp",
            "media/images/gallery-page/us/us13.webp",
            "media/images/gallery-page/us/us14.webp",
            "media/images/gallery-page/us/us15.webp",
            "media/images/gallery-page/us/us16.webp",
            "media/images/gallery-page/us/us17.webp",
            "media/images/gallery-page/us/us18.webp",
            "media/images/gallery-page/us/us19.webp",
            "media/images/gallery-page/us/us20.webp",
            "media/images/gallery-page/us/us21.webp",
            "media/images/gallery-page/us/us22.webp",
            "media/images/gallery-page/us/us23.webp",
            "media/images/gallery-page/us/us24.webp",
            "media/images/gallery-page/us/us25.webp",
            "media/images/gallery-page/us/us26.webp",
            "media/images/gallery-page/us/us27.webp"
        ],

        storyItems: [
            {
                date: "13.08.2025",
                title: "Tanışma",
                text: ` Village'a o sabah gelmiştim.
                        O akşam bütün hayatımın kökten değişeceğinden habersizdim.
                        Akşam Kemal'le Village'ı gezerken sana denk gelmiştik.
                        Seni görür görmez yüreğim hoplamıştı.
                        Işığı bozuk bankta oturuyordun, Kemal tanıştırmıştı.
                        İyi ki tanıştırmıştı :)`,
                image: [
                    
                ]
            },
            {
                date: "13.08.2025 - 17.08.2025",
                title: "Aşık Oldum 😍",
                text: ` Aradan geçen 4 gün, sadece 4 gün...
                        4 günde aşık olmuştum sana.
                        Çamaşırlarınla geldiğin gün :)
                        Şimdi düşününce aklımda aşık olma
                        sürecimle ilgili çok fazla şey yok.
                        Gerçekten aklım başımda değildi o sıralar :)
                        `,
                image: [
                    
                ]
            },
            {
                date: "18.08.2025",
                title: "Telefon Numaranı Aldım 😁",
                text: ` Aynı zamanda birlikte ilk fotoğrafımızı çekildiğimiz zaman.
                        Fotoğrafları isteme bahanesiyle numaranı aldığım için öyle sevinmiştim ki 🥳
                        Fotoğraftan ikimizi kesip arkadaş grubuna atmıştım "yakışıyor muyuz" diye :)
                        Bence çok yakışıyoruz 🥰
                        `,
                image: [
                    "media/images/story-page/us/18-08/img0.webp",
                    "media/images/story-page/us/18-08/img1.webp",
                    "media/images/story-page/us/18-08/img2.webp",
                    "media/images/story-page/us/18-08/img3.webp"
                ]
            },
            {
                date: "19.08.2025",
                title: "Beraber İlk Türk Kahvemiz",
                text: ` Aynı zamanda ilk hayal kırıklığı 😞
                        Feyza senin kahve falına bakarken boy uzunluğu, ten rengi, ismindeki harfler
                        ile ilgili şeyler söylüyordu ve sen benim tam tersim şeylere heyecanlanıyordun...
                        Akşam herkes yattıktan sonra telefonda Yiğit'le uzun uzun konuştuk: "Ee bu ben değilim 😨"
                        `,
                image: [

                ]
            },
            {
                date: "20.08.2025",
                title: "L.A. 😳",
                text: ` Yiğit'le tanıştığın akşam, bankta otururken yanımıza gelmiştin.
                        Konu nereden açıldı hatırlamıyorum ama bize L.A.'i birlikte gezmeyi teklif etmiştin.
                        Kalbim küt küt attı. Heyecandan kalbim patlayacaktı.
                        `,
                image: [

                ]
            },
            {
                date: "21.08.2025 - 24.08.2025",
                title: "Tabii ki Gidiyoruz!",
                text: ` Yiğit'le L.A.'e gidip gitmeme konusunu konuştuğumuz zamanlar. Sen bizden haber bekliyordun.
                        Maddi olarak pek mantıklı değildi çalışabileceğimiz bazı günler gidecekti.
                        Ama ne olursa olsun L.A.'i seninle gezmek istiyordum.
                        Bir konuşmamızda Yiğit'e şöyle dedim: "Abi Dilara'yla gezme şansım var TABİİ Kİ GİDİYORUZ!"
                        `,
                image: [

                ]
            },
            {
                date: "25.08.2025",
                title: "Kurutmayı Bekliyorum Zaten 🤥",
                text: ` Sana para atmada yardımcı olduğum gün.
                        Sana yardım etmek istedim ama asıl seninle biraz daha vakit geçirebilmek için o kadar durdum.
                        Uyumamaya bahanem olsun diye kurumuş çamaşırı tekrar kurutmaya atıp gelmiştim 😅
                        Para atmayı yaptıktan sonra 10-15 dakika sohbet etmiştik.
                        Rüyada sandım kendimi, o gece öyle tatlı uyudum ki 😇
                        `,
                image: [
                    "media/images/story-page/us/25-08/img0.webp"
                ]
            },
            {
                date: "26.08.2025",
                title: "Poker Night",
                text: ` Öncesinde yemek ısıtıp getirmiştin 🥹
                        O günden sonra Yiğit'e birkaç defa: "Sırf oturup yardım ettim diye
                        -ki bir şey de yapmadım yani- yemek yapıp getirmiş. Ölcem aşktan." dedim.
                        Akşam da poker oynadık. Seninle etkileşime girebilmek için oyunu anlatıyordum.
                        Yiğit de anlatmaya çalışırken: "Sus ben anlatıyom işte" demiştim 😂
                        Seninle konuşan sadece ben olmalıyım 😅
                        `,
                image: [
                    "media/images/story-page/us/26-08/img0.webp",
                    "media/images/story-page/us/26-08/img1.webp"
                ]
            },
            {
                date: "28.08.2025",
                title: "Wallmart'tan Bir Şey İster Misin? 🥹",
                text: ` Bu mesajdan sonra Yiğit'e dedim ki: Bana mı özel acaba, inşallah bana özeldir, ulan ya bana özelse 🤩.
                        Gözlerim gerçekten öyle parıldıyordu :) Döndüğünüzde eşyaları taşımana yardıma gelmiştim. Diğerleri
                        çoktan inmişti ama sen beni beklemiştin. Ona da öyle mutlu olmuştum ki 😅 Mutlu olmaya yer arıyormuşum 😅
                        Napim ama? ÇOK SEVİYORUM 🥰
                        `,
                image: [
                    
                ]
            },
            {
                date: "30.08.2025",
                title: "Az Kalsın Hayat Bitiyordu 🤦‍♂️",
                text: ` Bir akşam mesajlaşırken reaksiyon olarak kalp atmamı sormuştun.
                        Ah azıcık cesaretim olsa 😑
                        `,
                image: [
                    "media/images/story-page/us/30-08/img0.webp"
                ]
            },
            {
                date: "1.09.2025",
                title: "Sana İlk Kez Yemek Alıyorum 😇",
                text: ` Sen daha işteydin servis bekliyordun.
                        Gelince bir de yemekle uğraşma istedim.
                        Teşekkür edişlerini hatırlıyorum hala 😇
                        Sen mutluuuu, ben mutluuuu 😸
                        `,
                image: [

                ]
            },
            {
                date: "3.09.2025",
                title: "Kahve Date! 🤩",
                text: ` Önceki akşam uyuyakalıp kahveyi kaçırmıştın.
                        Sensiz boğazımdan geçmedi 🥲 İçememene üzülmüştüm.
                        Akşam Yiğit'e ve Süleyman'a: "Dün uyuyakaldığın için kahve içemedin, bugün beraber kahve içmeye gidelim mi?"
                        dersem abartı olur mu? diye sordum. İçemediğine üzülmüştüm hem de seni düşündüğümü göstermek istemiştim.
                        Hayatımın en güzel günlerinden biriydi. Asla unutmayacağım o günü.
                        `,
                image: [
                    "media/images/story-page/us/3-09/img0.webp",
                    "media/images/story-page/us/3-09/img1.webp",
                    "media/images/story-page/us/3-09/img2.webp",
                ]
            },
            {
                date: "10.09.2025",
                title: "Açıldım 😳",
                text: ` "Eyvah kız elden gidiyor" diyerekten mesaj atmıştım...
                        Hayatımda verdiğim en doğru karar oldu 🥰.
                        `,
                image: [
                    "media/images/story-page/us/10-09/img0.webp"
                ]
            },
            {
                date: "15.09.2025",
                title: "LOS ANGELES!!!",
                text: ` Beraber ilk tatilimizzz! Ama kesinlikle son değil 😊.
                        `,
                image: [
                    
                ]
            },
            {
                date: "17.09.2025",
                title: "Müthiş Santa Monica",
                text: ` Hayallerimin kadınıyla dünyanın en güzel yürüyüşünü yaptım. O günü asla unutmayacağım.
                        Her zaman hatırlayıp mutlu olacağım. İyi ki, iyi ki...
                        `,
                image: [
                    
                ]
            },
            {
                date: "20.09.2025",
                title: "Telefonumuza Kavuştuk 😅",
                text: ` Senin için her şeyi yaparım, her şeyi!
                        1 saat yol gidip telefon almak hiçbir şey.
                        `,
                image: [
                    "media/images/story-page/us/20-09/img0.webp"
                ]
            },
            {
                date: "22.09.2025",
                title: "Küçük Adam Diloş 😂",
                text: ` Seni ıslattıkları gün benim kıyafetlerimi giymiştin.
                        O pantalon, o ayakkabılar 😅😁. Çok yakışmıştı ama :)
                        `,
                image: [
                    
                ]
            },
            {
                date: "24.09.2025",
                title: "Ufak Çaplı Aksiyonlar",
                text: ` Güvenliğin arkamdan geldiği gün... 😱
                        `,
                image: [
                    "media/images/story-page/us/24-09/img0.webp"
                ]
            },
            {
                date: "27.09.2025",
                title: "NEW YORK!!!",
                text: ` Seninle gezmelere ba yı lı yor umm 🥰.
                        Harika bir Eylül ayı geçirdim senin sayende. İyi ki varsın 🫶.
                        `,
                image: [
                    
                ]
            },
            {
                date: "1.10.2025",
                title: "Bir Hikayenin Sonu ama Pek Çok Yenilerinin de Başlangıcı",
                text: ` İyi ki okulumu uzatmışım, iyi ki work and travel'a gitmişim, iyi ki kaldığım yeri değiştirmişler,
                        iyi ki seninle aynı yere denk gelmişiz, iyi ki tanışmışız, iyi ki birbirimizin olmuşuz 😇,
                        iyi ki sevgilim olmuşsun. Seni çok seviyorum.
                        `,
                image: [
                    
                ]
            }
        ],

        missionItems: [
            { 
                mission: "Brooklyn Bridge Manzarası",
                status: true
            },
            { 
                mission: "Santa Monica'da Gün Batımına Karşı Yürüyüş",
                status: true
            },
            { 
                mission: "Brooklyn Bride'e Bıraktığımız Hatırayı Ziyaret",
                status: false
            },
            { 
                mission: "Amerika'nın Her Yerinde Çokça Sevgi 😁",
                status: true
            },

        ]
    },

    "DE" : {
        name: "Almanya",

        slideShowItems: [
            "media/images/slide-show/de/de0.webp",
            "media/images/slide-show/de/de1.webp",
            "media/images/slide-show/de/de2.webp",
            "media/images/slide-show/de/de3.webp",
            "media/images/slide-show/de/de4.webp",
        ],

        storyItems: [
            {
                date: "yakında",
                title: "Hayalimiz, Geleceğimiz",
                text: ` 
                        Zamanla bu sayfayı öyle bir dolduracağız ki, kaydır kaydır bitmeyecek.
                        Söz veriyorum sevgilim.
                `,
                image: [
                    
                ]
            },
        ],

        galleryItems: [

        ],

        missionItems: [
            { 
                mission: "Neuschwanstein Castle gezisi",
                status: false
            },
            { 
                mission: "Kölner Dom gezisi",
                status: false
            },
            { 
                mission: "Berliner Mauer",
                status: false
            },
            { 
                mission: "Legoland Deutschland Resort Harry Potter Hotel 🤩",
                status: false
            },
            { 
                mission: "Marienplatz München gezisi",
                status: false
            },
        ]
    },

    "TR" : {
        name: "Türkiye",

        slideShowItems: [
            "media/images/slide-show/tr/tr0.webp",
            "media/images/slide-show/tr/tr1.webp",
            "media/images/slide-show/tr/tr2.webp",
            "media/images/slide-show/tr/tr3.webp",
            "media/images/slide-show/tr/tr4.webp"
        ],

        galleryItems: [
            "media/images/gallery-page/tr/tr0.webp",
            "media/images/gallery-page/tr/tr1.webp",
            "media/images/gallery-page/tr/tr2.webp",
            "media/images/gallery-page/tr/tr3.webp",
            "media/images/gallery-page/tr/tr4.webp",
            "media/images/gallery-page/tr/tr5.webp",
            "media/images/gallery-page/tr/tr6.webp",
            "media/images/gallery-page/tr/tr7.webp",
            "media/images/gallery-page/tr/tr8.webp",
            "media/images/gallery-page/tr/tr9.webp",
            "media/images/gallery-page/tr/tr10.webp",
            "media/images/gallery-page/tr/tr11.webp",
            "media/images/gallery-page/tr/tr12.webp",
            "media/images/gallery-page/tr/tr13.webp",
            "media/images/gallery-page/tr/tr14.webp",
            "media/images/gallery-page/tr/tr15.webp",
            "media/images/gallery-page/tr/tr16.webp",
            "media/images/gallery-page/tr/tr17.webp",
            "media/images/gallery-page/tr/tr18.webp",
            "media/images/gallery-page/tr/tr19.webp",
            "media/images/gallery-page/tr/tr20.webp",
            "media/images/gallery-page/tr/tr21.webp",
            "media/images/gallery-page/tr/tr22.webp"
        ],

        storyItems: [

        ],

        missionItems: [

        ]
    }
}