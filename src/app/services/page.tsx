import type { Metadata } from "next";

import enServices from "@/pageSchemas/services/servicesPage.en";
import trServices from "@/pageSchemas/services/servicePage.tr";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enServices.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ tr: trServices, en: enServices }} />;
}
