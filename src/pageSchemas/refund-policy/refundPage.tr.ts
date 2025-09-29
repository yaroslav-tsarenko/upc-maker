import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: `İade Politikası – ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} için iade/geri ödeme politikası: iç para birimi (Jeton) ve dijital ürünler için iade kuralları.`,
        keywords: [
            "iade politikası",
            "geri ödeme",
            "iade",
            COMPANY_NAME?.toLowerCase() || "kılavuzlar",
            "kılavuzlar",
            "kredi",
            "iç para birimi"
        ],
        canonical: "/iade-politikasi",
        ogImage: {
            title: `${COMPANY_NAME} – İade Politikası`,
            description: "Açık ve şeffaf iade koşulları.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Özet",
            bullets: [
                "İadeler bu Politika ve geçerli tüketici yasalarına uygun olarak değerlendirilir.",
                "İşlem süresi: Onaydan sonra iadeler genellikle 5–10 iş günü içinde işlenir.",
                "İadeler, kredi/işlem için ödenen tutarı aşamaz.",
                "Harcanmış krediler (ürün almak için kullanılanlar) iade edilmez.",
                "Krediler hesaba bağlıdır, devredilemez ve gerçek para birimine çevrilemez.",
                "Promosyon/bonus krediler hiçbir koşulda iade edilmez.",
                `İade talepleri sipariş referansı ve detaylarla birlikte ${COMPANY_EMAIL} adresine gönderilmelidir.`,
                "Bu Politika değiştirilebilir; önemli değişiklikler aşağıda belirtildiği şekilde bildirilecektir.",
                "Anında teslimata onay verip içeriği açtıysanız/indirdiyseniz, yasal cayma hakkınız kaybolabilir — bkz. madde 5."
            ]
        },
        {
            type: "text",
            title: "2. Kapsam ve Yasal Not",
            description: `Bu Politika, Şirket tarafından sağlanan Jetonlar (iç kredi/“kredi”) ve dijital Ürünler için iadeleri düzenler. İngiltere yasalarındaki zorunlu tüketici haklarına halel getirmez (örn. Tüketici Sözleşmeleri Yönetmeliği 2013 ve Tüketici Hakları Yasası 2015). Bu Politikadaki hiçbir şey, yasayla hariç tutulamayacak hakları kaldırmaz veya sınırlandırmaz.`
        },
        {
            type: "text",
            title: "3. Tanımlar",
            bullets: [
                "Kredi / Jeton — Hizmette kullanılan iç para birimi (gösterge: 1 Jeton = seçilen para biriminin 0,01’i).",
                "Kullanılmamış Kredi — Hesabınızda kalan ve henüz kullanılmamış krediler.",
                "Kullanılmış/Harcanmış Kredi — Bir ürün almak veya erişmek için kullanılan krediler.",
                "Promosyon / Bonus Kredi — Promosyon, bonus veya teşvik kapsamında verilen krediler."
            ]
        },
        {
            type: "text",
            title: "4. İade İlkeleri (Bağlayıcı Kurallar)",
            bullets: [
                "Herhangi bir iade, kredi veya ürün için ödenen tutarı (iade edilmeyen işlem ücretleri hariç) aşamaz.",
                "Harcanmış krediler iade edilmez; yalnızca kusurlu/yanlış tanımlanmış ürün, teslim edilmeme veya yasal zorunluluk durumunda iade yapılır.",
                "Kullanılmamış krediler, kullanılmadan önce talep edilirse genellikle orijinal satın alma fiyatı üzerinden iade edilir (iade edilmeyen ücretler düşülebilir).",
                "Krediler hesaba bağlıdır ve devredilemez.",
                "Krediler, yasalar gerektirmedikçe nakde veya başka bir para birimine çevrilemez.",
                "Promosyon/bonus krediler hiçbir koşulda iade edilmez.",
                "Anında teslimata onay verip içeriği açarsanız/indirirseniz, yasal cayma hakkınız kaybolabilir; bu durumda iade yalnızca madde 4.2 veya yasaya göre mümkündür.",
                "Özel/bespoke kılavuzlarda önemli çalışma başladıktan sonra iade yapılmaz, ancak yazılı olarak aksi kararlaştırılmadıkça."
            ]
        },
        {
            type: "text",
            title: "5. İade Talebi Nasıl Yapılır?",
            description: `İade talebi için aşağıdakileri ${COMPANY_EMAIL} adresine (veya destek formu ile) iletin:`,
            bullets: [
                "Sipariş referans numarası (zorunlu).",
                "Satın alma için kullanılan hesap e-postası.",
                "Talebin kullanılmamış kredi mi yoksa harcanmış ürün için mi olduğunu belirtin.",
                "Harcanmış ürün taleplerinde: sorunun tam açıklaması ve destekleyici kanıtlar.",
                "Tercih edilen iade yöntemi (tercihen orijinal ödeme yöntemi).",
                "5 iş günü içinde yanıt verilir, incelenir ve onaylanan iadeler 5–10 iş günü içinde işlenir."
            ]
        },
        {
            type: "text",
            title: "6. İnceleme, Kanıt ve Kararlar",
            bullets: [
                "Harcanmış ürün taleplerinde sipariş/jeton kayıtları, ödeme kanıtı, teslimat kayıtları ve sunduğunuz kanıtlar incelenir.",
                "İadeler genellikle orijinal ödeme yöntemine yapılır; mümkün değilse alternatif sunulabilir.",
                "Talep reddedilirse, açıklama ve itiraz hakkınız bildirilir."
            ]
        },
        {
            type: "text",
            title: "7. Geri Ödeme, Dolandırıcılık ve Kötüye Kullanım",
            description: "İade beklerken geri ödeme (chargeback) başlatılırsa, bu bir ihtilaf olarak değerlendirilir ve tüm kanıtlar ödeme sağlayıcısına sunulur. Şirket, dolandırıcılık, kötüye kullanım veya tekrarlanan haksız geri ödemelerde iade yapmama ve hesabı askıya alma/kapama hakkını saklı tutar."
        },
        {
            type: "text",
            title: "8. Politika Değişiklikleri",
            description: "Şirket bu İade Politikasını istediği zaman değiştirebilir. Önemli değişiklikler e-posta veya platformda duyurulur. Değişiklikler ileriye dönük geçerlidir."
        },
        {
            type: "text",
            title: "9. Kayıt Tutma ve Saklama",
            description: "İade kararlarını incelemek ve kanıtlamak için gerekli kayıtlar en az 24 ay, kurumsal/itirazlı işlemlerde 6 yıla kadar saklanır. Gizlilik Politikamız ve geçerli yasalar geçerlidir."
        },
        {
            type: "text",
            title: "10. İtiraz ve Uyuşmazlıklar",
            description: `Bir iade kararına katılmıyorsanız, gerekçeler ve sipariş referansı ile ${COMPANY_EMAIL} adresine başvurun. 10 iş günü içinde incelenir. Bu politika yasal haklarınızı etkilemez.`
        },
        {
            type: "text",
            title: "11. Örnekler",
            bullets: [
                "Kullanılmamış kredi: 2.000 Jeton satın alındı (£0.01’den = £20); 300 harcandı → 1.700 kaldı → iade = £17 (iade edilmeyen işlem ücretleri hariç).",
                "İndirilen kılavuz: Anında teslimata onay verip kılavuzu indirdiyseniz, iade yalnızca kılavuz kusurlu/yanlış tanımlanmışsa mümkündür.",
                "Promosyon kredisi: Kampanya ile verilen 100 bonus kredi — iade edilmez."
            ]
        },
        {
            type: "text",
            title: "12. İletişim Bilgileri",
            bullets: [
                `E-posta (destek): ${COMPANY_EMAIL}`,
                `Posta: ${COMPANY_LEGAL_NAME} — ${COMPANY_ADDRESS}`
            ]
        },
        {
            type: "text",
            title: "Yürürlük Tarihi",
            description: "Bu İade Politikası yayımlandığı anda yürürlüğe girer ve önceki tüm sürümlerin yerine geçer."
        },
        {
            type: "text",
            title: "Geçerlilik tarihi",
            description: "18 Eylül 2025"
        }
    ]
};

export default refundPolicySchema;
