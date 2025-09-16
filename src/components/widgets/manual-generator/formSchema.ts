export const formSchema = {
    expectations: [
        {
            name: "expectations",
            label: "What do you expect from the manual?",
            description: "Describe in detail what kind of information and instructions you would like to receive.",
            type: "textarea",
            required: true
        },
        {
            name: "exclusions",
            label: "What should not be included?",
            description: "List everything that should be avoided or excluded from the manual.",
            type: "textarea"
        },
    ],

    selectors: [
        {
            name: "deviceType",
            label: "Device Type",
            description: "Choose the type of device for which you want to generate a manual.",
            type: "select",
            required: true,
            options: ["Phone", "Laptop", "Tablet", "TV", "Washing Machine", "Refrigerator", "Microwave", "Printer"]
        },
        {
            name: "brand",
            label: "Brand",
            description: "Select the brand of your device.",
            type: "select",
            options: ["Apple", "Samsung", "Sony", "LG", "Xiaomi", "Bosch", "HP", "Dell"]
        },
        {
            name: "model",
            label: "Model",
            description: "Select the specific model of your device.",
            type: "select",
            options: ["Pro 14", "Galaxy S24", "Bravia X90", "ThinkPad X1", "Mi 12", "Bosch Serie 6"]
        },
        {
            name: "version",
            label: "Version / Year",
            description: "Pick the production year or version of the device.",
            type: "select",
            options: ["2021", "2022", "2023", "2024", "2025"]
        },
    ],

    advanced: [
        { name: "safety", label: "Safety Instructions", description: "Include safety warnings and precautions.", type: "checkbox" },
        { name: "installation", label: "Installation Guide", description: "Add step-by-step installation guide.", type: "checkbox" },
        { name: "maintenance", label: "Maintenance", description: "Provide regular maintenance instructions.", type: "checkbox" },
        { name: "troubleshooting", label: "Troubleshooting", description: "Explain common issues and fixes.", type: "checkbox" },
        { name: "warranty", label: "Warranty Information", description: "Include details about warranty terms.", type: "checkbox" },
        { name: "parts", label: "Parts List", description: "Add list of available parts and replacements.", type: "checkbox" },
        { name: "cleaning", label: "Cleaning Instructions", description: "Provide tips for safe cleaning.", type: "checkbox" },
        { name: "energy", label: "Energy Saving Tips", description: "Suggestions for saving energy.", type: "checkbox" },
        { name: "setup", label: "Setup Wizard", description: "Step-by-step setup process.", type: "checkbox" },
        { name: "software", label: "Software Updates", description: "Instructions for updating software/firmware.", type: "checkbox" },
        { name: "errorCodes", label: "Error Codes", description: "List of error codes and their meaning.", type: "checkbox" },
        { name: "remote", label: "Remote Control Guide", description: "Guide for using the remote control.", type: "checkbox" },
        { name: "connectivity", label: "Connectivity Options", description: "Explain available connection options.", type: "checkbox" },
        { name: "faq", label: "Frequently Asked Questions", description: "Add FAQs for quick answers.", type: "checkbox" },
        { name: "sustainability", label: "Eco & Sustainability", description: "Eco-friendly practices and info.", type: "checkbox" },
        { name: "recycling", label: "Recycling Info", description: "How to recycle the device properly.", type: "checkbox" },
    ],
};

export const buildPrompt = (values: Record<string, any>): string => {
    const sections: string[] = [];

    // ---- Cover ----
    sections.push(
        `<h1>Technical Manual for ${values.deviceType} - ${values.brand} ${values.model} (${values.version})</h1>`
    );

    // ---- Description ----
    sections.push(`<h2>Description</h2>`);
    sections.push(`<p>${values.expectations}</p>`);
    if (values.exclusions) {
        sections.push(`<h3>Excluded topics</h3><p>${values.exclusions}</p>`);
    }

    // ---- Table of Contents ----
    const toc: string[] = [];
    toc.push("Overview and Specifications");
    if (values.installation) toc.push("Installation Guide");
    if (values.setup) toc.push("Setup Wizard");
    if (values.safety) toc.push("Safety Instructions");
    if (values.maintenance) toc.push("Maintenance Schedule");
    if (values.troubleshooting) toc.push("Troubleshooting Common Issues");
    if (values.software) toc.push("Software Updates");
    if (values.errorCodes) toc.push("Error Codes");
    if (values.warranty) toc.push("Warranty Information");
    if (values.parts) toc.push("Parts and Replacements");
    if (values.cleaning) toc.push("Cleaning and Care");
    if (values.connectivity) toc.push("Connectivity Options");
    if (values.remote) toc.push("Remote Control Usage");
    if (values.energy) toc.push("Energy Saving Tips");
    if (values.faq) toc.push("Frequently Asked Questions");
    if (values.sustainability) toc.push("Sustainability and Eco Info");
    if (values.recycling) toc.push("Recycling and Disposal");

    sections.push(`<h2>Table of Contents</h2><ul>${toc.map(item => `<li>${item}</li>`).join("")}</ul>`);

    // ---- Full Manual Text ----
    sections.push(`<h2>Manual</h2>`);

    sections.push(`<h3>Overview and Specifications</h3>`);
    if (values.installation) sections.push(`<h3>Installation Guide</h3>`);
    if (values.setup) sections.push(`<h3>Setup Wizard</h3>`);
    if (values.safety) sections.push(`<h3>Safety Instructions</h3>`);
    if (values.maintenance) sections.push(`<h3>Maintenance Schedule</h3>`);
    if (values.troubleshooting) sections.push(`<h3>Troubleshooting Common Issues</h3>`);
    if (values.software) sections.push(`<h3>Software Updates</h3>`);
    if (values.errorCodes) sections.push(`<h3>Error Codes</h3>`);
    if (values.warranty) sections.push(`<h3>Warranty Information</h3>`);
    if (values.parts) sections.push(`<h3>Parts and Replacements</h3>`);
    if (values.cleaning) sections.push(`<h3>Cleaning and Care</h3>`);
    if (values.connectivity) sections.push(`<h3>Connectivity Options</h3>`);
    if (values.remote) sections.push(`<h3>Remote Control Usage</h3>`);
    if (values.energy) sections.push(`<h3>Energy Saving Tips</h3>`);
    if (values.faq) sections.push(`<h3>Frequently Asked Questions</h3>`);
    if (values.sustainability) sections.push(`<h3>Sustainability and Eco Info</h3>`);
    if (values.recycling) sections.push(`<h3>Recycling and Disposal</h3>`);

    return sections.join("\n");
};

