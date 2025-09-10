"use client";

import React from "react";
import { media as mediaMap } from "@/resources/media";
import Media from "../image/Media";
import Section from "../section/Section";
import Text from "../text/Text";
import Card from "../card/Card";
import Grid from "../grid/Grid";
import Slider from "../slider/Slider";
import FAQ from "../faq/FAQ";

import type {
    PageSchema,
    PageBlock,
    MediaBlock,
    TextBlock,
    SectionBlock,
    GridBlock,
    SliderBlock,
    FaqBlock,
    CardBlock,
    GridItem,
    AlignInput,
} from "./types";

function resolveMedia(key?: string) {
    if (!key) return undefined;
    const v = (mediaMap as Record<string, unknown>)[key];
    if (!v && process.env.NODE_ENV !== "production") {
        console.warn(`media asset not found: ${key}`);
    }
    return v as any;
}

function RenderText(b: TextBlock) {
    return (
        <Text
            title={b.title}
            description={b.description}
            bullets={b.bullets}
            centerTitle={b.centerTitle}
            centerDescription={b.centerDescription}
            centerBullets={b.centerBullets}
        />
    );
}

function RenderMedia(b: MediaBlock) {
    return (
        <Media
            src={resolveMedia(b.src)}
            type={b.mediaType}
            width={b.width}
            height={b.height}
            alt={b.alt}
            controls={b.controls}
            loop={b.loop}
            autoPlay={b.autoPlay}
            muted={b.muted}
        />
    );
}

function RenderSlider(b: SliderBlock) {
    return <Slider images={b.images.map(resolveMedia)} />;
}

function RenderFaq(b: FaqBlock) {
    return <FAQ items={b.items} />;
}

function RenderCard(b: CardBlock) {
    return (
        <Card
            image={resolveMedia(b.image)}
            title={b.title}
            description={b.description}
            buttonLink={b.buttonLink}
            buttonText={b.buttonText}
        />
    );
}

function mapAlign(a?: AlignInput): "center" | "start" | "end" | undefined {
    if (!a) return undefined;
    if (a === "left") return "start";
    if (a === "right") return "end";
    return a;
}

function RenderSection(b: SectionBlock) {
    const left = b.left ? renderBlock(b.left, "left") : undefined;
    const right = b.right ? renderBlock(b.right, "right") : undefined;
    return <Section align={mapAlign(b.align)} gap={b.gap} left={left} right={right} />;
}

function RenderGrid(b: GridBlock) {
    const items: GridItem[] =
        (b.items && b.items.length > 0)
            ? b.items
            : (b.cards?.map((c, idx) => ({
                key: c.title ?? String(idx),
                block: {
                    type: "card",
                    image: c.image,
                    title: c.title,
                    description: c.description,
                    buttonLink: c.buttonLink,
                    buttonText: c.buttonText,
                } as CardBlock,
            })) ?? []);

    return (
        <Grid columns={b.columns} gap={b.gap} style={b.style}>
            {items.map((item, i) => (
                <div
                    key={item.key ?? i}
                    style={item.colSpan ? { gridColumn: `span ${item.colSpan}` } : undefined}
                >
                    {renderBlock(item.block, item.key ?? i)}
                </div>
            ))}
        </Grid>
    );
}

function renderBlock(block: PageBlock, key?: React.Key): React.ReactNode {
    switch (block.type) {
        case "text":
            return <React.Fragment key={key}><RenderText {...block} /></React.Fragment>;
        case "media":
            return <React.Fragment key={key}><RenderMedia {...block} /></React.Fragment>;
        case "slider":
            return <React.Fragment key={key}><RenderSlider {...block} /></React.Fragment>;
        case "faq":
            return <React.Fragment key={key}><RenderFaq {...block} /></React.Fragment>;
        case "card":
            return <React.Fragment key={key}><RenderCard {...block} /></React.Fragment>;
        case "section":
            return <React.Fragment key={key}><RenderSection {...block} /></React.Fragment>;
        case "grid":
            return <React.Fragment key={key}><RenderGrid {...block} /></React.Fragment>;
        default: {
            const _exhaustive: never = block;
            return _exhaustive;
        }
    }
}

export default function PageRenderer({ schema }: { schema: PageSchema }) {
    return <>{schema.blocks.map((b, i) => renderBlock(b, i))}</>;
}
