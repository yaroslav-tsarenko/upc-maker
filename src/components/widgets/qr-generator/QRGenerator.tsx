"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Input,
    Option,
    Select,
    Sheet,
    Slider,
    Typography,
    Textarea,
} from "@mui/joy";
import { ChromePicker } from "react-color";
import JsBarcode from "jsbarcode";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRGenerator.module.scss";
import {useAlert} from "@/context/AlertContext";
import {useUser} from "@/context/UserContext";
import {useRouter} from "next/navigation";

/** ──────────────────────────────────────────────────────────────────────────
 *  Utils: generators and validation
 *  ────────────────────────────────────────────────────────────────────────── */
const FONTS = ["Arial", "Roboto", "Courier New", "Times New Roman", "Verdana"] as const;
type FontName = (typeof FONTS)[number];

type CodeType = "UPC-A" | "EAN-13" | "Code128" | "Code39" | "QR";

const onlyDigits = (s: string) => s.replace(/\D+/g, "");

function upcCheckDigit(upc11: string): string {
    // For UPC-A: 11 digits input, 12th is check digit
    const s = onlyDigits(upc11);
    if (s.length !== 11) throw new Error("UPC-A requires exactly 11 digits to compute check digit.");
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < 11; i++) {
        const n = Number(s[i]);
        if ((i + 1) % 2 === 1) sumOdd += n; // positions 1,3,5...
        else sumEven += n; // 2,4,6...
    }
    const total = sumOdd * 3 + sumEven;
    const check = (10 - (total % 10)) % 10;
    return String(check);
}

function ean13CheckDigit(ean12: string): string {
    const s = onlyDigits(ean12);
    if (s.length !== 12) throw new Error("EAN-13 requires exactly 12 digits to compute check digit.");
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < 12; i++) {
        const n = Number(s[i]);
        if ((i + 1) % 2 === 0) sumEven += n; // even * 3
        else sumOdd += n;
    }
    const total = sumOdd + sumEven * 3;
    const check = (10 - (total % 10)) % 10;
    return String(check);
}

function makeRandomDigits(len: number) {
    let s = "";
    for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10);
    return s;
}

function makeRandomSKU(prefix = "SKU-", length = 8) {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let body = "";
    for (let i = 0; i < length; i++) body += alphabet[Math.floor(Math.random() * alphabet.length)];
    return `${prefix}${body}`;
}

function svgToDataURL(svg: SVGSVGElement) {
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
}

function downloadDataUrl(dataUrl: string, filename: string) {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    a.click();
}

/** ──────────────────────────────────────────────────────────────────────────
 *  Component
 *  ────────────────────────────────────────────────────────────────────────── */
const UPCGenerator: React.FC = () => {
    /** Main states */
    const [codeType, setCodeType] = useState<CodeType>("UPC-A");

    // Code value
    const [value, setValue] = useState("03600029145"); // 11 digits for UPC-A; check digit added automatically
    const [autoCheck, setAutoCheck] = useState(true); // auto add check digit for UPC/EAN

    // Visual options
    const [lineColor, setLineColor] = useState("#111111");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [displayValue, setDisplayValue] = useState(true);
    const [font, setFont] = useState<FontName>("Arial");
    const [fontSize, setFontSize] = useState(16);
    const [textMargin, setTextMargin] = useState(4);
    const [barWidth, setBarWidth] = useState(2); // bar thickness
    const [barHeight, setBarHeight] = useState(120);
    const [margin, setMargin] = useState(10);
    const [dpi, setDpi] = useState(300);

    // Additional text under/above code
    const [label, setLabel] = useState("Premium Product");
    const [showLabel, setShowLabel] = useState(true);

    // Bulk generation
    const [bulkInput, setBulkInput] = useState("SKU-ABC12345\nSKU-HELLO42");
    const [bulkDelimiter, setBulkDelimiter] = useState("\n");

    // QR specific
    const [qrSize, setQrSize] = useState(260);
    const [qrFg, setQrFg] = useState("#1a1a1a");
    const [qrBg, setQrBg] = useState("#ffffff");
    const [qrLevel, setQrLevel] = useState<"L" | "M" | "Q" | "H">("M");

    const { showAlert } = useAlert();
    const user = useUser();
    const router = useRouter();
    const [loadingFormat, setLoadingFormat] = useState<"png" | "jpeg" | "svg" | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Popup state for color pickers
    const [pickerOpen, setPickerOpen] = useState<null | "bar" | "bg" | "qrFg" | "qrBg">(null);

    // Value actually used for rendering (with check digits)
    const renderedValue = useMemo(() => {
        if (codeType === "UPC-A") {
            const digits = onlyDigits(value);
            if (!autoCheck) return digits; // user provides 12 digits manually
            if (digits.length === 11) return digits + upcCheckDigit(digits);
            return digits;
        }
        if (codeType === "EAN-13") {
            const digits = onlyDigits(value);
            if (!autoCheck) return digits;
            if (digits.length === 12) return digits + ean13CheckDigit(digits);
            return digits;
        }
        return value;
    }, [codeType, value, autoCheck]);

    /** Draw barcode for all types except QR */
    useEffect(() => {
        if (codeType === "QR") return; // QR rendered separately
        const svg = svgRef.current;
        if (!svg) return;

        while (svg.firstChild) svg.removeChild(svg.firstChild);

        try {
            if (codeType === "Code128") {
                JsBarcode(svg, renderedValue || " ", {
                    format: "CODE128",
                    lineColor,
                    background: bgColor,
                    width: barWidth,
                    height: barHeight,
                    margin,
                    displayValue,
                    font,
                    fontSize,
                    textMargin,
                    text: displayValue ? undefined : "",
                });
            } else if (codeType === "Code39") {
                JsBarcode(svg, renderedValue || " ", {
                    format: "CODE39",
                    lineColor,
                    background: bgColor,
                    width: barWidth,
                    height: barHeight,
                    margin,
                    displayValue,
                    font,
                    fontSize,
                    textMargin,
                });
            } else if (codeType === "UPC-A") {
                const digits = onlyDigits(renderedValue);
                JsBarcode(svg, digits || "0", {
                    format: "UPC",
                    lineColor,
                    background: bgColor,
                    width: barWidth,
                    height: barHeight,
                    margin,
                    displayValue,
                    font,
                    fontSize,
                    textMargin,
                });
            } else if (codeType === "EAN-13") {
                const digits = onlyDigits(renderedValue);
                JsBarcode(svg, digits || "0000000000000", {
                    format: "EAN13",
                    lineColor,
                    background: bgColor,
                    width: barWidth,
                    height: barHeight,
                    margin,
                    displayValue,
                    font,
                    fontSize,
                    textMargin,
                });
            }
        } catch (e) {
            // If invalid value — just ignore and keep preview clean
        }
    }, [
        codeType,
        renderedValue,
        lineColor,
        bgColor,
        barWidth,
        barHeight,
        margin,
        displayValue,
        font,
        fontSize,
        textMargin,
    ]);

    /** Export PNG/JPEG/SVG */
    const exportSVG = () => {
        if (codeType === "QR") {
            exportRaster("svg"); // QR uses canvas, so svg not relevant
            return;
        }
        const svg = svgRef.current;
        if (!svg) return;
        const dataUrl = svgToDataURL(svg);
        downloadDataUrl(dataUrl, `${codeType}-${renderedValue || "code"}.svg`);
    };

    const exportRaster = (format: "png" | "jpeg" | "svg" = "png") => {
        if (codeType === "QR") {
            const qrCanvas = document.getElementById("qr-canvas") as HTMLCanvasElement | null;
            if (!qrCanvas) return;
            const scale = dpi / 96;
            const tmp = document.createElement("canvas");
            tmp.width = Math.floor(qrCanvas.width * scale);
            tmp.height = Math.floor(qrCanvas.height * scale);
            const ctx = tmp.getContext("2d");
            if (!ctx) return;
            ctx.scale(scale, scale);
            ctx.fillStyle = qrBg;
            ctx.fillRect(0, 0, tmp.width, tmp.height);
            ctx.drawImage(qrCanvas, 0, 0);
            const dataUrl =
                format === "jpeg" ? tmp.toDataURL("image/jpeg", 0.92) : tmp.toDataURL("image/png");
            downloadDataUrl(dataUrl, `${codeType}-${renderedValue || "code"}.${format}`);
            return;
        }

        const svg = svgRef.current;
        if (!svg) return;

        const svgUrl = svgToDataURL(svg);
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const scale = dpi / 96;
            const w = Math.ceil(img.naturalWidth * scale);
            const h = Math.ceil(img.naturalHeight * scale);
            const canvas = canvasRef.current!;
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d")!;
            ctx.scale(scale, scale);
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0);
            const dataUrl =
                format === "jpeg" ? canvas.toDataURL("image/jpeg", 0.92) : canvas.toDataURL("image/png");
            downloadDataUrl(dataUrl, `${codeType}-${renderedValue || "code"}.${format}`);
        };
        img.src = svgUrl;
    };

    /** Generators */
    const generateUPC = () => {
        const base11 = makeRandomDigits(11);
        const cd = upcCheckDigit(base11);
        setCodeType("UPC-A");
        setAutoCheck(false);
        setValue(base11 + cd);
    };

    const generateEAN = () => {
        const base12 = makeRandomDigits(12);
        const cd = ean13CheckDigit(base12);
        setCodeType("EAN-13");
        setAutoCheck(false);
        setValue(base12 + cd);
    };

    const generateSKU = () => {
        setCodeType("Code128");
        setValue(makeRandomSKU("SKU-", 8));
    };

    /** Bulk export (simple: download each as PNG) */
    const handleBulkExport = async () => {
        const list = bulkInput
            .split(bulkDelimiter === "\\n" ? "\n" : bulkDelimiter)
            .map((s) => s.trim())
            .filter(Boolean);
        for (const item of list) {
            setValue(item);
            await new Promise((r) => setTimeout(r, 80));
            exportRaster("png");
            await new Promise((r) => setTimeout(r, 60));
        }
    };

    /** Validation helper text */
    const helperText = useMemo(() => {
        if (codeType === "UPC-A") {
            const digits = onlyDigits(renderedValue);
            if (digits.length !== 12) return "UPC-A must have 12 digits. Enable Auto check or enter full 12.";
        }
        if (codeType === "EAN-13") {
            const digits = onlyDigits(renderedValue);
            if (digits.length !== 13) return "EAN-13 must have 13 digits. Enable Auto check or enter full 13.";
        }
        return "";
    }, [codeType, renderedValue]);

    const handleDownload = async (format: "png" | "jpeg" | "svg") => {
        setLoadingFormat(format);
        if (!user) {
            showAlert("Sign in required", "Please sign in to download barcodes.", "error");
            router.push("/sign-in");
            setLoadingFormat(null);
            return;
        }

        try {
            const res = await fetch("/api/qr/create-order-qr", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    userId: user._id,
                    email: user.email,
                    prompt: value,
                    response: "UPC Download",
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                showAlert("Error", data.message || "Not enough tokens", "danger");
                setLoadingFormat(null);
                return;
            }

            // ✅ Proceed with download only if tokens spent successfully
            if (format === "svg") {
                const svg = svgRef.current;
                if (!svg) return;
                const dataUrl = svgToDataURL(svg);
                downloadDataUrl(dataUrl, `${codeType}-${renderedValue || "code"}.svg`);
            } else if (codeType === "QR") {
                const qrCanvas = document.getElementById("qr-canvas") as HTMLCanvasElement | null;
                if (!qrCanvas) return;
                const scale = dpi / 96;
                const tmp = document.createElement("canvas");
                tmp.width = Math.floor(qrCanvas.width * scale);
                tmp.height = Math.floor(qrCanvas.height * scale);
                const ctx = tmp.getContext("2d");
                if (!ctx) return;
                ctx.scale(scale, scale);
                ctx.fillStyle = qrBg;
                ctx.fillRect(0, 0, tmp.width, tmp.height);
                ctx.drawImage(qrCanvas, 0, 0);
                const dataUrl =
                    format === "jpeg" ? tmp.toDataURL("image/jpeg", 0.92) : tmp.toDataURL("image/png");
                downloadDataUrl(dataUrl, `${codeType}-${renderedValue || "code"}.${format}`);
            } else {
                const svg = svgRef.current;
                if (!svg) return;
                const svgUrl = svgToDataURL(svg);
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.onload = () => {
                    const scale = dpi / 96;
                    const w = Math.ceil(img.naturalWidth * scale);
                    const h = Math.ceil(img.naturalHeight * scale);
                    const canvas = canvasRef.current!;
                    canvas.width = w;
                    canvas.height = h;
                    const ctx = canvas.getContext("2d")!;
                    ctx.scale(scale, scale);
                    ctx.fillStyle = bgColor;
                    ctx.fillRect(0, 0, w, h);
                    ctx.drawImage(img, 0, 0);
                    const dataUrl =
                        format === "jpeg"
                            ? canvas.toDataURL("image/jpeg", 0.92)
                            : canvas.toDataURL("image/png");
                    downloadDataUrl(dataUrl, `${codeType}-${renderedValue || "code"}.${format}`);
                };
                img.src = svgUrl;
            }

            showAlert("Success!", "Barcode downloaded and 30 tokens spent.", "success");
        } catch (err) {
            showAlert("Error", "Failed to spend tokens", "danger");
        }
        setLoadingFormat(null);
    };

    return (
        <div className={styles.layout}>
            {/* LEFT: Config */}
            <div className={styles.left}>
                <Sheet className={styles.section} variant="soft" color="neutral">
                    <Typography level="h4">Type & Value</Typography>

                    <Box className={styles.grid2}>
                        <Box>
                            <Typography level="body-sm">Barcode type</Typography>
                            <Select value={codeType} onChange={(_, v) => setCodeType((v || "UPC-A") as CodeType)}>
                                <Option value="UPC-A">UPC-A</Option>
                                <Option value="EAN-13">EAN-13</Option>
                                <Option value="Code128">Code128 (SKU)</Option>
                                <Option value="Code39">Code39</Option>
                                <Option value="QR">QR</Option>
                            </Select>
                        </Box>

                        <Box>
                            <Typography level="body-sm">Value</Typography>
                            <Input
                                placeholder={
                                    codeType === "UPC-A"
                                        ? "11 or 12 digits"
                                        : codeType === "EAN-13"
                                            ? "12 or 13 digits"
                                            : "Any ASCII"
                                }
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                color={helperText ? "danger" : "neutral"}
                            />
                            {helperText ? (
                                <Typography level="body-xs" color="danger">
                                    {helperText}
                                </Typography>
                            ) : null}
                        </Box>
                    </Box>

                    {(codeType === "UPC-A" || codeType === "EAN-13") && (
                        <Checkbox
                            label="Auto check digit (add check digit automatically)"
                            checked={autoCheck}
                            sx={{margin: "8px 0 0"}}
                            onChange={(e) => setAutoCheck(e.target.checked)}
                        />
                    )}

                    <Box className={styles.rowBtns}>
                        <Button onClick={generateUPC} variant="soft">
                            Random UPC-A
                        </Button>
                        <Button onClick={generateEAN} variant="soft">
                            Random EAN-13
                        </Button>
                        <Button onClick={generateSKU} variant="soft">
                            Random SKU (Code128)
                        </Button>
                    </Box>
                </Sheet>

                <Sheet className={styles.section} variant="soft">
                    <Typography level="h4">Appearance</Typography>

                    {codeType !== "QR" ? (
                        <>
                            <Box className={styles.grid3}>
                                <Box>
                                    <Typography level="body-sm">Bar color</Typography>
                                    <div
                                        className={styles.colorSquare}
                                        style={{ backgroundColor: lineColor }}
                                        onClick={() => setPickerOpen(pickerOpen === "bar" ? null : "bar")}
                                    />
                                    {pickerOpen === "bar" && (
                                        <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                            <ChromePicker color={lineColor} onChange={(c) => setLineColor(c.hex)} />
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    <Typography level="body-sm">Background</Typography>
                                    <div
                                        className={styles.colorSquare}
                                        style={{ backgroundColor: bgColor }}
                                        onClick={() => setPickerOpen(pickerOpen === "bg" ? null : "bg")}
                                    />
                                    {pickerOpen === "bg" && (
                                        <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                            <ChromePicker color={bgColor} onChange={(c) => setBgColor(c.hex)} />
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    <Typography level="body-sm">Display value</Typography>
                                    <Checkbox checked={displayValue} onChange={(e) => setDisplayValue(e.target.checked)} />
                                </Box>
                            </Box>

                            <Box className={styles.grid4}>
                                <Box>
                                    <Typography level="body-sm">Bar width</Typography>
                                    <Slider min={1} max={6} value={barWidth} onChange={(_, v) => setBarWidth(v as number)} />
                                </Box>
                                <Box>
                                    <Typography level="body-sm">Bar height</Typography>
                                    <Slider min={50} max={240} value={barHeight} onChange={(_, v) => setBarHeight(v as number)} />
                                </Box>
                                <Box>
                                    <Typography level="body-sm">Margin</Typography>
                                    <Slider min={0} max={40} value={margin} onChange={(_, v) => setMargin(v as number)} />
                                </Box>
                                <Box>
                                    <Typography level="body-sm">Font size</Typography>
                                    <Slider min={8} max={28} value={fontSize} onChange={(_, v) => setFontSize(v as number)} />
                                </Box>
                            </Box>

                            <Box className={styles.grid2}>
                                <Box>
                                    <Typography level="body-sm">Font</Typography>
                                    <Select value={font} onChange={(_, v) => setFont((v as FontName) || "Arial")}>
                                        {FONTS.map((f) => (
                                            <Option key={f} value={f}>
                                                {f}
                                            </Option>
                                        ))}
                                    </Select>
                                </Box>
                                <Box>
                                    <Typography level="body-sm">Text margin</Typography>
                                    <Slider min={0} max={20} value={textMargin} onChange={(_, v) => setTextMargin(v as number)} />
                                </Box>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box className={styles.grid3}>
                                <Box>
                                    <Typography level="body-sm">QR Fg</Typography>
                                    <div
                                        className={styles.colorSquare}
                                        style={{ backgroundColor: qrFg }}
                                        onClick={() => setPickerOpen(pickerOpen === "qrFg" ? null : "qrFg")}
                                    />
                                    {pickerOpen === "qrFg" && (
                                        <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                            <ChromePicker color={qrFg} onChange={(c) => setQrFg(c.hex)} />
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    <Typography level="body-sm">QR Bg</Typography>
                                    <div
                                        className={styles.colorSquare}
                                        style={{ backgroundColor: qrBg }}
                                        onClick={() => setPickerOpen(pickerOpen === "qrBg" ? null : "qrBg")}
                                    />
                                    {pickerOpen === "qrBg" && (
                                        <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                            <ChromePicker color={qrBg} onChange={(c) => setQrBg(c.hex)} />
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    <Typography level="body-sm">QR size</Typography>
                                    <Slider min={120} max={640} value={qrSize} onChange={(_, v) => setQrSize(v as number)} />
                                </Box>
                            </Box>
                            <Box className={styles.row}>
                                <Typography level="body-sm">Error correction</Typography>
                                <Select value={qrLevel} onChange={(_, v) => setQrLevel((v as any) || "M")}>
                                    <Option value="L">L</Option>
                                    <Option value="M">M</Option>
                                    <Option value="Q">Q</Option>
                                    <Option value="H">H</Option>
                                </Select>
                            </Box>
                        </>
                    )}

                    <Box className={styles.grid2} sx={{ mt: 1 }}>
                        <Box>
                            <Typography level="body-sm">DPI (export)</Typography>
                            <Select value={dpi} onChange={(_, v) => setDpi((v as number) || 300)}>
                                <Option value={96}>96 (screen)</Option>
                                <Option value={150}>150</Option>
                                <Option value={300}>300 (print)</Option>
                                <Option value={600}>600 (HD print)</Option>
                            </Select>
                        </Box>
                        <Box>
                            <Input
                                placeholder="Custom label"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                                disabled={!showLabel}
                                sx={{ mt: 0.5 }}
                            />
                            <Checkbox
                                checked={showLabel}
                                sx={{margin: "10px 0 0"}}
                                onChange={(e) => setShowLabel(e.target.checked)}
                                label="Show custom label"
                            />
                        </Box>
                    </Box>
                </Sheet>

                <Sheet className={styles.section} variant="soft">
                    <Typography level="h4">Bulk (batch generation)</Typography>
                    <Typography level="body-sm" sx={{ mb: 0.5 }}>
                        Paste list of values (one per line) or set your own delimiter
                    </Typography>
                    <Textarea
                        minRows={5}
                        value={bulkInput}
                        onChange={(e) => setBulkInput(e.target.value)}
                        placeholder="SKU-ABC12345&#10;SKU-HELLO42"
                    />
                    <Box className={styles.grid2} sx={{ mt: 1 }}>
                        <Box>
                            <Typography level="body-sm">Delimiter</Typography>
                            <Select value={bulkDelimiter} onChange={(_, v) => setBulkDelimiter((v as string) || "\n")}>
                                <Option value="\n">\\n (newline)</Option>
                                <Option value=",">, (comma)</Option>
                                <Option value=";">; (semicolon)</Option>
                                <Option value="|">| (pipe)</Option>
                            </Select>
                        </Box>
                        <Box className={styles.rowBtns}>
                            <Button onClick={handleBulkExport} variant="soft">
                                Export each as PNG
                            </Button>
                        </Box>
                    </Box>
                </Sheet>
            </div>

            {/* RIGHT: Preview + export */}
            <div className={styles.right}>
                <Sheet className={styles.preview} variant="outlined">
                    <Typography level="h4" sx={{ mb: 1.5 }}>
                        Preview
                    </Typography>

                    <Box className={styles.previewCard} sx={{ backgroundColor: bgColor }}>
                        {codeType === "QR" ? (
                            <>
                                {/* QR rendered in canvas for clear raster export */}
                                <QRCodeCanvas
                                    id="qr-canvas"
                                    value={value || " "}
                                    size={qrSize}
                                    level={qrLevel}
                                    fgColor={qrFg}
                                    bgColor={qrBg}
                                    includeMargin
                                />
                            </>
                        ) : (
                            <svg ref={svgRef} />
                        )}
                    </Box>

                    {showLabel && (
                        <Typography level="title-md" sx={{ mt: 1 }}>
                            {label}
                        </Typography>
                    )}

                    <Box className={styles.exportRow}>
                        <Button
                            onClick={() => handleDownload("png")}
                            loading={loadingFormat === "png"}
                            disabled={!!loadingFormat}
                        >
                            Download PNG
                        </Button>
                        <Button
                            onClick={() => handleDownload("jpeg")}
                            loading={loadingFormat === "jpeg"}
                            disabled={!!loadingFormat}
                        >
                            Download JPG
                        </Button>
                        {codeType !== "QR" && (
                            <Button
                                onClick={() => handleDownload("svg")}
                                loading={loadingFormat === "svg"}
                                disabled={!!loadingFormat}
                            >
                                Download SVG
                            </Button>
                        )}
                    </Box>


                    <canvas ref={canvasRef} style={{ display: "none" }} />
                </Sheet>

                <Sheet className={styles.hints} variant="soft">
                    <Typography level="title-sm">Hints:</Typography>
                    <ul className={styles.ul}>
                        <li>UPC-A — 12 digits. With Auto check — enter 11, last digit added automatically.</li>
                        <li>EAN-13 — 13 digits. With Auto check — enter 12, last digit added automatically.</li>
                        <li>For SKU use Code128 (supports letters/numbers, compact).</li>
                        <li>For print use 300–600 DPI. For screens — 96–150 DPI.</li>
                    </ul>
                </Sheet>
            </div>
        </div>
    );
};

export default UPCGenerator;