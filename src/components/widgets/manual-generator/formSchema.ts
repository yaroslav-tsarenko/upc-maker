export const formSchema = {
    expectations: [
        {
            name: "expectations",
            label: {
                en: "What do you expect from the manual?",
                tr: "Kılavuzdan ne bekliyorsunuz?",
            },
            description: {
                en: "Describe in detail what kind of information and instructions you would like to receive.",
                tr: "Almak istediğiniz bilgi ve talimatları ayrıntılı olarak açıklayın.",
            },
            type: "textarea",
            required: true
        },
        {
            name: "exclusions",
            label: {
                en: "What should not be included?",
                tr: "Neler dahil edilmemeli?",
            },
            description: {
                en: "List everything that should be avoided or excluded from the manual.",
                tr: "Kılavuzda olmaması veya kaçınılması gereken her şeyi listeleyin.",
            },
            type: "textarea"
        },
    ],

    inputs: [
        {
            name: "deviceType",
            label: {
                en: "Device Type",
                tr: "Cihaz Türü",
            },
            description: {
                en: "Choose the type of device for which you want to generate a manual.",
                tr: "Kılavuz oluşturmak istediğiniz cihaz türünü seçin.",
            },
            type: "input",
            required: true,
        },
        {
            name: "brand",
            label: {
                en: "Brand",
                tr: "Marka",
            },
            description: {
                en: "Select the brand of your device.",
                tr: "Cihazınızın markasını seçin.",
            },
            type: "input",
        },
        {
            name: "model",
            label: {
                en: "Model",
                tr: "Model",
            },
            description: {
                en: "Select the specific model of your device.",
                tr: "Cihazınızın modelini seçin.",
            },
            type: "input",
        },
        {
            name: "version",
            label: {
                en: "Version / Year",
                tr: "Versiyon / Yıl",
            },
            description: {
                en: "Pick the production year or version of the device.",
                tr: "Cihazın üretim yılı veya versiyonunu seçin.",
            },
            type: "input",
        },
    ],

    advanced: [
        {
            name: "safety",
            label: {
                en: "Safety Instructions",
                tr: "Güvenlik Talimatları",
            },
            description: {
                en: "Include safety warnings and precautions.",
                tr: "Güvenlik uyarıları ve önlemlerini ekleyin.",
            },
            type: "checkbox"
        },
        {
            name: "installation",
            label: {
                en: "Installation Guide",
                tr: "Kurulum Kılavuzu",
            },
            description: {
                en: "Add step-by-step installation guide.",
                tr: "Adım adım kurulum kılavuzu ekleyin.",
            },
            type: "checkbox"
        },
        {
            name: "maintenance",
            label: {
                en: "Maintenance",
                tr: "Bakım",
            },
            description: {
                en: "Provide regular maintenance instructions.",
                tr: "Düzenli bakım talimatları verin.",
            },
            type: "checkbox"
        },
        {
            name: "troubleshooting",
            label: {
                en: "Troubleshooting",
                tr: "Sorun Giderme",
            },
            description: {
                en: "Explain common issues and fixes.",
                tr: "Yaygın sorunları ve çözümlerini açıklayın.",
            },
            type: "checkbox"
        },
        {
            name: "warranty",
            label: {
                en: "Warranty Information",
                tr: "Garanti Bilgisi",
            },
            description: {
                en: "Include details about warranty terms.",
                tr: "Garanti koşulları hakkında bilgi ekleyin.",
            },
            type: "checkbox"
        },
        {
            name: "parts",
            label: {
                en: "Parts List",
                tr: "Parça Listesi",
            },
            description: {
                en: "Add list of available parts and replacements.",
                tr: "Mevcut parça ve yedeklerin listesini ekleyin.",
            },
            type: "checkbox"
        },
        {
            name: "cleaning",
            label: {
                en: "Cleaning Instructions",
                tr: "Temizlik Talimatları",
            },
            description: {
                en: "Provide tips for safe cleaning.",
                tr: "Güvenli temizlik için ipuçları verin.",
            },
            type: "checkbox"
        },
        {
            name: "energy",
            label: {
                en: "Energy Saving Tips",
                tr: "Enerji Tasarrufu İpuçları",
            },
            description: {
                en: "Suggestions for saving energy.",
                tr: "Enerji tasarrufu için öneriler.",
            },
            type: "checkbox"
        },
        {
            name: "setup",
            label: {
                en: "Setup Wizard",
                tr: "Kurulum Sihirbazı",
            },
            description: {
                en: "Step-by-step setup process.",
                tr: "Adım adım kurulum süreci.",
            },
            type: "checkbox"
        },
        {
            name: "software",
            label: {
                en: "Software Updates",
                tr: "Yazılım Güncellemeleri",
            },
            description: {
                en: "Instructions for updating software/firmware.",
                tr: "Yazılım/firmware güncelleme talimatları.",
            },
            type: "checkbox"
        },
        {
            name: "errorCodes",
            label: {
                en: "Error Codes",
                tr: "Hata Kodları",
            },
            description: {
                en: "List of error codes and their meaning.",
                tr: "Hata kodları ve anlamlarının listesi.",
            },
            type: "checkbox"
        },
        {
            name: "remote",
            label: {
                en: "Remote Control Guide",
                tr: "Uzaktan Kumanda Kılavuzu",
            },
            description: {
                en: "Guide for using the remote control.",
                tr: "Uzaktan kumanda kullanımı için kılavuz.",
            },
            type: "checkbox"
        },
        {
            name: "connectivity",
            label: {
                en: "Connectivity Options",
                tr: "Bağlantı Seçenekleri",
            },
            description: {
                en: "Explain available connection options.",
                tr: "Mevcut bağlantı seçeneklerini açıklayın.",
            },
            type: "checkbox"
        },
        {
            name: "faq",
            label: {
                en: "Frequently Asked Questions",
                tr: "Sıkça Sorulan Sorular",
            },
            description: {
                en: "Add FAQs for quick answers.",
                tr: "Hızlı yanıtlar için SSS ekleyin.",
            },
            type: "checkbox"
        },
        {
            name: "sustainability",
            label: {
                en: "Eco & Sustainability",
                tr: "Çevre & Sürdürülebilirlik",
            },
            description: {
                en: "Eco-friendly practices and info.",
                tr: "Çevre dostu uygulamalar ve bilgiler.",
            },
            type: "checkbox"
        },
        {
            name: "recycling",
            label: {
                en: "Recycling Info",
                tr: "Geri Dönüşüm Bilgisi",
            },
            description: {
                en: "How to recycle the device properly.",
                tr: "Cihazın doğru şekilde nasıl geri dönüştürüleceği.",
            },
            type: "checkbox"
        },
    ],
};

export const buildPrompt = (values: Record<string, any>, lang: "en" | "tr" = "en"): string => {
    const getStr = (val: any) => (typeof val === "object" && val !== null && lang in val ? val[lang] : val);

    const sections: string[] = [];

    // ---- Cover ----
    sections.push(
        `<h1>${getStr(formSchema.inputs[0].label)}: ${getStr(values.deviceType)} - ${getStr(values.brand)} ${getStr(values.model)} (${getStr(values.version)})</h1>`
    );

    // ---- Description ----
    sections.push(`<h2>${lang === "tr" ? "Açıklama" : "Description"}</h2>`);
    sections.push(`<p>${getStr(values.expectations)}</p>`);
    if (values.exclusions) {
        sections.push(`<h3>${lang === "tr" ? "Hariç Tutulan Konular" : "Excluded topics"}</h3><p>${getStr(values.exclusions)}</p>`);
    }

    // ---- Table of Contents ----
    const toc: string[] = [];
    toc.push(lang === "tr" ? "Genel Bakış ve Özellikler" : "Overview and Specifications");
    if (values.installation) toc.push(getStr(formSchema.advanced.find(f => f.name === "installation")?.label));
    if (values.setup) toc.push(getStr(formSchema.advanced.find(f => f.name === "setup")?.label));
    if (values.safety) toc.push(getStr(formSchema.advanced.find(f => f.name === "safety")?.label));
    if (values.maintenance) toc.push(lang === "tr" ? "Bakım Takvimi" : "Maintenance Schedule");
    if (values.troubleshooting) toc.push(lang === "tr" ? "Yaygın Sorunlar ve Çözümleri" : "Troubleshooting Common Issues");
    if (values.software) toc.push(getStr(formSchema.advanced.find(f => f.name === "software")?.label));
    if (values.errorCodes) toc.push(getStr(formSchema.advanced.find(f => f.name === "errorCodes")?.label));
    if (values.warranty) toc.push(getStr(formSchema.advanced.find(f => f.name === "warranty")?.label));
    if (values.parts) toc.push(getStr(formSchema.advanced.find(f => f.name === "parts")?.label));
    if (values.cleaning) toc.push(getStr(formSchema.advanced.find(f => f.name === "cleaning")?.label));
    if (values.connectivity) toc.push(getStr(formSchema.advanced.find(f => f.name === "connectivity")?.label));
    if (values.remote) toc.push(getStr(formSchema.advanced.find(f => f.name === "remote")?.label));
    if (values.energy) toc.push(getStr(formSchema.advanced.find(f => f.name === "energy")?.label));
    if (values.faq) toc.push(getStr(formSchema.advanced.find(f => f.name === "faq")?.label));
    if (values.sustainability) toc.push(getStr(formSchema.advanced.find(f => f.name === "sustainability")?.label));
    if (values.recycling) toc.push(getStr(formSchema.advanced.find(f => f.name === "recycling")?.label));

    sections.push(`<h2>${lang === "tr" ? "İçindekiler" : "Table of Contents"}</h2><ul>${toc.map(item => `<li>${item}</li>`).join("")}</ul>`);

    // ---- Full Manual Text ----
    sections.push(`<h2>${lang === "tr" ? "Kılavuz" : "Manual"}</h2>`);

    sections.push(`<h3>${lang === "tr" ? "Genel Bakış ve Özellikler" : "Overview and Specifications"}</h3>`);
    if (values.installation) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "installation")?.label)}</h3>`);
    if (values.setup) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "setup")?.label)}</h3>`);
    if (values.safety) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "safety")?.label)}</h3>`);
    if (values.maintenance) sections.push(`<h3>${lang === "tr" ? "Bakım Takvimi" : "Maintenance Schedule"}</h3>`);
    if (values.troubleshooting) sections.push(`<h3>${lang === "tr" ? "Yaygın Sorunlar ve Çözümleri" : "Troubleshooting Common Issues"}</h3>`);
    if (values.software) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "software")?.label)}</h3>`);
    if (values.errorCodes) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "errorCodes")?.label)}</h3>`);
    if (values.warranty) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "warranty")?.label)}</h3>`);
    if (values.parts) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "parts")?.label)}</h3>`);
    if (values.cleaning) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "cleaning")?.label)}</h3>`);
    if (values.connectivity) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "connectivity")?.label)}</h3>`);
    if (values.remote) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "remote")?.label)}</h3>`);
    if (values.energy) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "energy")?.label)}</h3>`);
    if (values.faq) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "faq")?.label)}</h3>`);
    if (values.sustainability) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "sustainability")?.label)}</h3>`);
    if (values.recycling) sections.push(`<h3>${getStr(formSchema.advanced.find(f => f.name === "recycling")?.label)}</h3>`);

    return sections.join("\n");
};


