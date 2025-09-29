import type { Metadata } from "next";

import enGetStarted from "@/pageSchemas/get-started/getStarted.page.en";
import trGetStarted from "@/pageSchemas/get-started/getStarted.tr";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enGetStarted.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ tr: trGetStarted, en: enGetStarted }} />;
}
