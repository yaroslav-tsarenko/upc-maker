import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Hizmetlerimiz — ${COMPANY_NAME}`,
        description:
            `${COMPANY_NAME} hizmetlerini keşfedin: teknoloji cihazları, elektronikler ve ekipmanlar için özel kılavuzlar. Esnek jeton sistemi, anında dijital erişim ve tüm teknoloji ihtiyaçlarınız için uzmanlık.`,
        keywords: [
            `${COMPANY_NAME} hizmetleri`,
            "özel teknoloji kılavuzları",
            "elektronik rehberler",
            "cihaz dokümantasyonu",
            "IT ekipman kılavuzları",
            "jeton sistemi",
            "dijital kılavuzlar",
            "teknik rehberler"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Hizmetleri`,
            description:
                "Teknoloji cihazları, elektronikler ve ekipmanlar için profesyonel kılavuzlar. Kişiye özel, esnek ve jeton tabanlı.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "Teknoloji Cihazları İçin Özel Kılavuzlar",
                description:
                    `Her teknoloji cihazı, elektronik alet ve IT ekipmanı benzersizdir. ${COMPANY_NAME}, tam da bu yüzden teknoloji ihtiyaçlarınıza özel kılavuzlar hazırlar. Akıllı telefonlardan bilgisayarlara, akıllı ev cihazlarından endüstriyel elektroniklere kadar uzmanlarımız net, yapılandırılmış ve doğru dokümantasyon sunar.`,
                bullets: [
                    "Kişiye özel teknoloji rehberleri",
                    "Elektronikler için uzman içerik",
                    "Ev aletlerinden endüstriyel IT ekipmanına kadar",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Özel teknoloji kılavuzları",
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image2",
                    title: "Hızlı Başlangıç Kılavuzları",
                    description: "Teknoloji cihazınızı veya elektronik ekipmanınızı hızlıca çalıştırmak için kısa kılavuzlar.",
                    buttonLink: "/sign-up",
                    buttonText: "Başla",
                },
                {
                    image: "image3",
                    title: "Adım Adım Eğitimler",
                    description:
                        "Teknoloji kurulum, sorun giderme ve bakım için detaylı anlatımlar.",
                    buttonLink: "/sign-up",
                    buttonText: "Hemen Aç",
                },
                {
                    image: "image4",
                    title: "Bakım Kılavuzları",
                    description:
                        "Elektronik ve IT cihazlarınız için düzenli kontrol ve önleyici bakım rehberleri.",
                    buttonLink: "/sign-up",
                    buttonText: "Rehberleri Gör",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Jeton tabanlı erişim",
            },
            right: {
                type: "text",
                title: "Esnek Jeton Sistemi",
                description:
                    `Abonelik yok. ${COMPANY_NAME} ile sadece ihtiyacınız olan teknoloji kılavuzları için jeton satın alırsınız. Akıllı telefon, bilgisayar, akıllı cihaz ve daha fazlası için rehberleri kolayca açın — basit, ölçeklenebilir ve şeffaf.`,
                bullets: [
                    "Aylık ücret yok",
                    "Açtığınız kılavuz kadar ödeyin",
                    "Kullanımınıza göre ölçeklenir",
                    "Bireysel ve kurumsal kullanım için ideal",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Anında Dijital Erişim",
                description:
                    `${COMPANY_NAME} teknoloji ve elektronik kılavuzları, açıldıktan hemen sonra kullanılabilir. Panelinizden erişin, çevrimdışı indirin ve dijital kütüphanenizi düzenli tutun.`,
                bullets: [
                    "Anında erişim",
                    "Bulut ve çevrimdışı kullanım",
                    "İstediğiniz zaman tekrar indirin",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "400px",
                alt: "Anında erişim",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Sektöre Özel Teknoloji Kılavuzları",
                    description:
                        "Sağlık cihazları, inşaat elektroniği, IT ve üretim ekipmanları için özel rehberler.",
                    buttonLink: "/sign-up",
                    buttonText: "Daha Fazla",
                },
                {
                    image: "image8",
                    title: "Çok Dilli Dokümantasyon",
                    description:
                        "Küresel ekipler ve farklı kullanıcılar için tercih ettiğiniz dilde teknoloji kılavuzlarına erişin.",
                    buttonLink: "/sign-up",
                    buttonText: "Başla",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Teknoloji Profesyonelleri ve Kullanıcılar Güveniyor",
                description:
                    `Mühendislerden IT uzmanlarına ve günlük kullanıcılara kadar ${COMPANY_NAME}, güvenilir teknoloji kılavuzları için başvurulan kaynaktır. Hizmetimiz, teknoloji ve elektronik hakkında yapılandırılmış bilgiye kolay erişim sunar.`,
                bullets: [
                    "Tüm teknoloji sektörlerinde tercih ediliyor",
                    "Profesyoneller ve bireysel kullanıcılar için",
                    "Uzman onaylı içerik",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: `${COMPANY_NAME} hangi hizmetleri sunuyor?`,
                    answer:
                        "Teknoloji cihazları, elektronikler ve IT ekipmanları için özel kılavuzlar, hızlı başlangıç rehberleri, eğitimler ve detaylı dokümantasyon sunuyoruz.",
                },
                {
                    question: "Jeton sistemi nasıl çalışıyor?",
                    answer:
                        "Jeton satın alıp kılavuzlar için harcarsınız. Her rehberin karmaşıklığına göre jeton bedeli vardır. İhtiyacınız kadar jeton alabilirsiniz.",
                },
                {
                    question: "Kılavuzları çevrimdışı kullanabilir miyim?",
                    answer:
                        "Evet. Açtıktan sonra kılavuzları indirip internet olmadan da erişebilirsiniz.",
                },
                {
                    question: "Kılavuzlar çok dilli mi?",
                    answer:
                        `${COMPANY_NAME}, küresel kullanıcılar için çok dilli dokümantasyon sunar.`,
                },
            ],
        },
    ],
};

export default schema;
