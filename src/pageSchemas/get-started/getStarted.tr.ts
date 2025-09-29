import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Başlarken — ${COMPANY_NAME}`,
        description:
            `${COMPANY_NAME} ile nasıl başlayacağınızı öğrenin: hesap oluşturun, jeton satın alın ve kılavuzların kilidini anında açın. Uzman dokümantasyona erişmek için basit adımları izleyin.`,
        keywords: [
            `${COMPANY_NAME} başlarken`,
            `${COMPANY_NAME} nasıl kullanılır`,
            "kılavuzlara erişim",
            "rehberlerin kilidini aç",
            "jeton satın al",
            "dokümantasyon adımları"
        ],
        canonical: "/get-started",
        ogImage: {
            title: `${COMPANY_NAME} ile Başlayın`,
            description:
                `Hesabınızı oluşturmak, jeton almak ve kılavuzların kilidini anında açmak için basit adımları izleyin.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: `${COMPANY_NAME} ile Yolculuğunuza Başlayın`,
                description:
                    `Başlamak çok kolay. Sadece birkaç adımda hesabınızı oluşturabilir, jeton satın alabilir ve ihtiyaçlarınıza özel profesyonel kılavuzlara erişebilirsiniz. İlk kılavuzunuzu açmak için aşağıdaki rehberi izleyin.`,
                centerTitle: true,
                centerDescription: true,
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image1",
                    title: "Adım 1 — Hesap Oluşturun",
                    description:
                        `E-posta adresinizle kaydolun, panelinize erişin, jetonlarınızı yönetin ve kılavuzlarınızı güvenle saklayın.`,
                    buttonLink: "/sign-up",
                    buttonText: "Kayıt Ol",
                },
                {
                    image: "image2",
                    title: "Adım 2 — Jeton Satın Alın",
                    description:
                        `İhtiyacınıza göre jeton satın alın. Jetonlar, abonelik baskısı olmadan kılavuzlara esnek erişim sağlar.`,
                    buttonLink: "/pricing",
                    buttonText: "Fiyatları Gör",
                },
                {
                    image: "image3",
                    title: "Adım 3 — Kılavuzların Kilidini Açın",
                    description:
                        `İhtiyacınız olan kılavuzların kilidini açmak için jeton kullanın. Anında çevrimiçi erişin, indirin ve gelecekte kullanmak üzere kaydedin.`,
                    buttonLink: "/services",
                    buttonText: "Kılavuzlara Göz At",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Panel önizlemesi",
            },
            right: {
                type: "text",
                title: `Her Şeyi Tek Panelden Yönetin`,
                description:
                    `${COMPANY_NAME} paneliniz bilgi merkezinizdir. Jeton bakiyenizi kontrol edin, açtığınız kılavuzları görüntüleyin ve indirme geçmişinizi takip edin — hepsi tek bir yerde.`,
                bullets: [
                    "Jeton ve kullanım geçmişini takip edin",
                    "Kılavuzlara kategoriye göre göz atın",
                    "Açtığınız rehberleri istediğiniz zaman tekrar indirin",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Jeton Paketleriyle Erişiminizi Artırın`,
                description:
                    `İster tek bir kılavuza ister tüm bir kütüphaneye ihtiyacınız olsun, ${COMPANY_NAME} ihtiyaçlarınıza uyum sağlar. Daha fazla kılavuzun kilidini açmak ve kişisel dokümantasyon merkezinizi büyütmek için ek jeton satın alın.`,
                bullets: [
                    "Bireyler için küçük paketler",
                    "İşletmeler için toplu jetonlar",
                    "Şeffaf ve uygun fiyatlandırma",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Jeton paketleri",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image6",
                    title: "Çoklu Cihaz Erişimi",
                    description:
                        `Kılavuzlarınızı masaüstü, tablet veya akıllı telefonda kullanın. ${COMPANY_NAME} iş akışınıza uyum sağlar.`,
                    buttonLink: "/faq",
                    buttonText: "Daha Fazla Bilgi",
                },
                {
                    image: "image7",
                    title: "Çevrimdışı Kullanım",
                    description:
                        `Kılavuzları indirerek internet bağlantısı olmadan da istediğiniz zaman erişin.`,
                    buttonLink: "/faq",
                    buttonText: "SSS'yi Oku",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `${COMPANY_NAME} ile Neden Başlamalısınız?`,
                description:
                    `Çünkü teknik bilgiyi kolay, esnek ve erişilebilir hale getiriyoruz. Harcadığınız ilk jetondan açtığınız son kılavuza kadar sistemimiz size kontrol ve güven sunmak için tasarlandı.`,
                bullets: [
                    "Hızlı ve kolay başlangıç",
                    "Jeton tabanlı esneklik",
                    "Uzmanlar tarafından hazırlanmış kılavuzlar",
                    "7/24 erişilebilir bilgi",
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
                    question: "Başlamak ne kadar sürer?",
                    answer:
                        "Sadece birkaç dakika. Hesap oluşturun, jeton alın ve hemen kılavuzların kilidini açmaya başlayın.",
                },
                {
                    question: "Jetonların süresi dolar mı?",
                    answer:
                        "Hayır. Jetonlar hesabınızda siz kullanana kadar kalır ve tam esneklik sağlar.",
                },
                {
                    question: "Jeton paketimi daha sonra yükseltebilir miyim?",
                    answer:
                        "Evet. Erişiminizi genişletmek için istediğiniz zaman ek jeton satın alabilirsiniz.",
                },
                {
                    question: "Herhangi bir şey yüklemem gerekiyor mu?",
                    answer:
                        `Hayır. ${COMPANY_NAME} doğrudan tarayıcınızda çalışır. Kılavuzlara her cihazdan erişebilirsiniz.`,
                },
            ],
        },
    ],
};

export default schema;
