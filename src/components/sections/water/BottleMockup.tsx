"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { whatsappLink } from "@/data/business";

/** Logical canvas size. Rendered at 2x so downloads stay crisp. */
const W = 400;
const H = 780;
const SCALE = 2;

const MAX_FILE_BYTES = 5 * 1024 * 1024;

const labelColors = [
  { name: "Olive", bg: "#5C6B32", fg: "#F5F2E6" },
  { name: "Navy", bg: "#0D1B3E", fg: "#FAF3E8" },
  { name: "Cream", bg: "#FAF3E8", fg: "#0D1B3E" },
  { name: "White", bg: "#FFFFFF", fg: "#0D1B3E" },
  { name: "Orange", bg: "#F25C2A", fg: "#FFFFFF" },
];

/**
 * 1L bottle geometry, all derived from one centre line so the parts stay aligned.
 * Proportions follow a standard ribbed PET bottle: tall body, short shoulder,
 * narrow neck, and a portrait label sitting on the upper-middle of the body.
 */
const CX = W / 2;
const BODY_W = 176;
const BODY_TOP = 214;
const BODY_BOTTOM = 742;
const NECK_W = 56;
const CAP_TOP = 26;
const CAP_H = 44;
const NECK_BOTTOM = 150;
const LABEL_TOP = 300;
const LABEL_H = 320;
const LABEL_W = 150;

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawBottle(
  ctx: CanvasRenderingContext2D,
  logo: HTMLImageElement | null,
  name: string,
  color: (typeof labelColors)[number]
) {
  ctx.clearRect(0, 0, W, H);

  const bodyLeft = CX - BODY_W / 2;
  const bodyRight = CX + BODY_W / 2;
  const neckLeft = CX - NECK_W / 2;
  const neckRight = CX + NECK_W / 2;

  // --- Silhouette: neck -> shoulder -> tall body ---
  ctx.beginPath();
  ctx.moveTo(neckLeft, CAP_TOP + CAP_H - 4);
  ctx.lineTo(neckLeft, NECK_BOTTOM);
  ctx.bezierCurveTo(
    neckLeft, NECK_BOTTOM + 34,
    bodyLeft, BODY_TOP - 42,
    bodyLeft, BODY_TOP
  );
  ctx.lineTo(bodyLeft, BODY_BOTTOM - 22);
  ctx.quadraticCurveTo(bodyLeft, BODY_BOTTOM, bodyLeft + 22, BODY_BOTTOM);
  ctx.lineTo(bodyRight - 22, BODY_BOTTOM);
  ctx.quadraticCurveTo(bodyRight, BODY_BOTTOM, bodyRight, BODY_BOTTOM - 22);
  ctx.lineTo(bodyRight, BODY_TOP);
  ctx.bezierCurveTo(
    bodyRight, BODY_TOP - 42,
    neckRight, NECK_BOTTOM + 34,
    neckRight, NECK_BOTTOM
  );
  ctx.lineTo(neckRight, CAP_TOP + CAP_H - 4);
  ctx.closePath();

  // Clear PET reads as a pale blue-grey with a bright core, not solid blue.
  const water = ctx.createLinearGradient(bodyLeft, 0, bodyRight, 0);
  water.addColorStop(0, "#c2dae4");
  water.addColorStop(0.18, "#eef7fa");
  water.addColorStop(0.45, "#fbfdfe");
  water.addColorStop(0.75, "#dcecf3");
  water.addColorStop(1, "#b3ccd8");
  ctx.fillStyle = water;
  ctx.fill();

  // Keep the ribbing inside the silhouette.
  ctx.save();
  ctx.clip();

  // Ribbed body panels, denser above and below the label like a real 1L bottle.
  ctx.strokeStyle = "#8fb3c4";
  ctx.lineWidth = 1.4;
  ctx.globalAlpha = 0.55;
  for (let y = BODY_TOP + 12; y < BODY_BOTTOM - 8; y += 15) {
    const inLabel = y > LABEL_TOP - 6 && y < LABEL_TOP + LABEL_H + 6;
    if (inLabel) continue;
    ctx.beginPath();
    ctx.moveTo(bodyLeft + 3, y);
    ctx.lineTo(bodyRight - 3, y);
    ctx.stroke();
  }

  // Vertical seams to suggest the faceted texture.
  ctx.globalAlpha = 0.28;
  [-0.62, -0.2, 0.2, 0.62].forEach((f) => {
    const x = CX + (BODY_W / 2) * f;
    ctx.beginPath();
    ctx.moveTo(x, BODY_TOP + 6);
    ctx.lineTo(x, BODY_BOTTOM - 6);
    ctx.stroke();
  });

  // Specular highlight and a softer counter-highlight.
  ctx.globalAlpha = 0.75;
  ctx.fillStyle = "#FFFFFF";
  roundedRect(ctx, bodyLeft + 16, NECK_BOTTOM + 20, 15, BODY_BOTTOM - NECK_BOTTOM - 70, 8);
  ctx.fill();
  ctx.globalAlpha = 0.4;
  roundedRect(ctx, bodyRight - 34, BODY_TOP + 40, 9, 300, 5);
  ctx.fill();
  ctx.restore();

  // Outline last so it sits above the texture.
  ctx.strokeStyle = "#7d9fb0";
  ctx.lineWidth = 2.4;
  ctx.stroke();

  // --- Cap (white, ridged) ---
  const capW = NECK_W + 14;
  roundedRect(ctx, CX - capW / 2, CAP_TOP, capW, CAP_H, 6);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.strokeStyle = "#b9c6cc";
  ctx.lineWidth = 1.6;
  ctx.stroke();

  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = "#b9c6cc";
  ctx.lineWidth = 1;
  for (let x = CX - capW / 2 + 5; x < CX + capW / 2 - 3; x += 5) {
    ctx.beginPath();
    ctx.moveTo(x, CAP_TOP + 6);
    ctx.lineTo(x, CAP_TOP + CAP_H - 6);
    ctx.stroke();
  }
  ctx.restore();

  // Tamper ring under the cap.
  roundedRect(ctx, CX - capW / 2 + 2, CAP_TOP + CAP_H + 3, capW - 4, 9, 4);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.strokeStyle = "#c4d0d6";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Neck support ring.
  roundedRect(ctx, neckLeft - 6, 96, NECK_W + 12, 8, 4);
  ctx.fillStyle = "#e3edf1";
  ctx.fill();
  ctx.strokeStyle = "#a9c0cc";
  ctx.stroke();

  // --- Label (portrait, wrapped on the body) ---
  const labelLeft = CX - LABEL_W / 2;
  ctx.fillStyle = color.bg;
  ctx.fillRect(labelLeft, LABEL_TOP, LABEL_W, LABEL_H);

  // Curvature shading so the label sits on a cylinder rather than floating flat.
  const curve = ctx.createLinearGradient(labelLeft, 0, labelLeft + LABEL_W, 0);
  curve.addColorStop(0, "rgba(0,0,0,0.22)");
  curve.addColorStop(0.16, "rgba(0,0,0,0.04)");
  curve.addColorStop(0.45, "rgba(255,255,255,0.10)");
  curve.addColorStop(0.82, "rgba(0,0,0,0.06)");
  curve.addColorStop(1, "rgba(0,0,0,0.24)");
  ctx.fillStyle = curve;
  ctx.fillRect(labelLeft, LABEL_TOP, LABEL_W, LABEL_H);

  const pad = 12;
  const innerW = LABEL_W - pad * 2;

  // Thin keyline border, as on the reference label.
  ctx.strokeStyle = color.fg;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth = 1;
  ctx.strokeRect(labelLeft + 6, LABEL_TOP + 6, LABEL_W - 12, LABEL_H - 12);
  ctx.globalAlpha = 1;

  // Logo occupies the top third.
  const boxH = 92;
  const boxY = LABEL_TOP + 22;

  if (logo && logo.naturalWidth > 0) {
    const ratio = Math.min(innerW / logo.naturalWidth, boxH / logo.naturalHeight);
    const dw = logo.naturalWidth * ratio;
    const dh = logo.naturalHeight * ratio;
    ctx.drawImage(logo, CX - dw / 2, boxY + (boxH - dh) / 2, dw, dh);
  } else {
    ctx.save();
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = color.fg;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(CX, boxY + boxH / 2, boxH / 2 - 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = color.fg;
    ctx.font = "600 11px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Your logo", CX, boxY + boxH / 2 + 4);
    ctx.restore();
  }

  // Business name, shrunk to fit the narrow portrait label.
  const displayName = (name.trim() || "Your Restaurant").toUpperCase();
  ctx.fillStyle = color.fg;
  ctx.textAlign = "center";
  let fontSize = 22;
  ctx.font = `800 ${fontSize}px system-ui, sans-serif`;
  while (ctx.measureText(displayName).width > innerW && fontSize > 9) {
    fontSize -= 0.5;
    ctx.font = `800 ${fontSize}px system-ui, sans-serif`;
  }
  const nameY = boxY + boxH + 34;
  ctx.fillText(displayName, CX, nameY);

  // Divider.
  ctx.globalAlpha = 0.4;
  ctx.strokeStyle = color.fg;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(CX - 34, nameY + 14);
  ctx.lineTo(CX + 34, nameY + 14);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Statutory-style block, mirroring a real label's footer.
  ctx.globalAlpha = 0.75;
  ctx.font = "700 9px system-ui, sans-serif";
  ctx.fillText("PACKAGED DRINKING WATER", CX, nameY + 34);
  ctx.globalAlpha = 0.55;
  ctx.font = "600 8px system-ui, sans-serif";
  ctx.fillText("NET QUANTITY · 1 LITRE", CX, nameY + 48);

  // Faint detail rules standing in for the small print.
  ctx.globalAlpha = 0.28;
  ctx.lineWidth = 1;
  [64, 72, 80].forEach((dy, i) => {
    const wRule = innerW * (i === 2 ? 0.5 : 0.78);
    ctx.beginPath();
    ctx.moveTo(CX - wRule / 2, nameY + dy);
    ctx.lineTo(CX + wRule / 2, nameY + dy);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  // Glass reflection across the label so it reads as being under plastic.
  ctx.save();
  ctx.globalAlpha = 0.14;
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.moveTo(labelLeft + 18, LABEL_TOP);
  ctx.lineTo(labelLeft + 46, LABEL_TOP);
  ctx.lineTo(labelLeft + 30, LABEL_TOP + LABEL_H);
  ctx.lineTo(labelLeft + 8, LABEL_TOP + LABEL_H);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function BottleMockup() {
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [logo, setLogo] = useState<HTMLImageElement | null>(null);
  const [name, setName] = useState("");
  const [color, setColor] = useState(labelColors[0]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  /**
   * Kept ready ahead of time so the share handler can call navigator.share()
   * synchronously — Safari drops the user-gesture if you await a toBlob first.
   */
  const fileRef = useRef<File | null>(null);

  const fileName = `${
    name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") ||
    "your-brand"
  }-bottle-mockup.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = W * SCALE;
    canvas.height = H * SCALE;
    ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    drawBottle(ctx, logo, name, color);
    setStatus(null);

    canvas.toBlob((blob) => {
      fileRef.current = blob
        ? new File([blob], fileName, { type: "image/png" })
        : null;
    }, "image/png");
  }, [logo, name, color, fileName]);

  const handleFile = useCallback((file: File | undefined) => {
    if (!file) return;
    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("That doesn't look like an image. Try a PNG, JPG or SVG.");
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setError("That file is over 5MB. Try a smaller version.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      // Data URL keeps the canvas untainted, so the download still works.
      img.onload = () => {
        if (img.naturalWidth === 0) {
          setError("We couldn't read that file. A PNG usually works best.");
          return;
        }
        setLogo(img);
      };
      img.onerror = () =>
        setError("We couldn't read that file. A PNG usually works best.");
      img.src = reader.result as string;
    };
    reader.onerror = () => setError("Something went wrong reading that file.");
    reader.readAsDataURL(file);
  }, []);

  const download = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [fileName]);

  /**
   * WhatsApp deep links (wa.me) carry text only — an image cannot be attached
   * via URL. The Web Share API can hand WhatsApp the actual PNG, so use that
   * where it exists (phones, which is where these customers are) and fall back
   * to clipboard + download on desktop.
   */
  const sendToWhatsApp = useCallback(async () => {
    const file = fileRef.current;
    const business = name.trim();
    const message = business
      ? `Hi GrowKart, here's the bottle mockup I made for ${business}. I'd like a quote for branded water.`
      : "Hi GrowKart, here's the bottle mockup I made. I'd like a quote for branded water.";

    // Mobile: share the image straight into WhatsApp.
    if (file && typeof navigator !== "undefined" && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text: message });
        return;
      } catch (err) {
        // User dismissed the share sheet — leave them where they are.
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    // Desktop: put the image on the clipboard so it can be pasted into the chat.
    let copied = false;
    if (file && navigator.clipboard && "ClipboardItem" in window) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": file }),
        ]);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) download();

    setStatus(
      copied
        ? "Mockup copied — press Ctrl/Cmd+V in the WhatsApp chat to attach it."
        : "Mockup downloaded — attach it in the WhatsApp chat that just opened."
    );

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }, [name, download]);

  return (
    <section id="mockup" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> Try It Now
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            Put your logo on
            <br />
            a bottle right now
          </motion.h2>

          <motion.p
            className="text-[#0D1B3E]/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          >
            Upload your logo and see it on the bottle. Nothing is uploaded anywhere —
            this runs entirely in your browser.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Preview */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* No inline width/height — the intrinsic canvas size drives the
                aspect ratio while w-full/h-auto keeps it responsive. */}
            <canvas
              ref={canvasRef}
              className="w-full max-w-[250px] lg:max-w-[290px] h-auto"
              aria-label="Preview of your logo on a water bottle"
              role="img"
            />
          </motion.div>

          {/* Controls */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-black tracking-[0.18em] uppercase text-[#0D1B3E]/50">
                1 · Your logo
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <label className="inline-flex items-center justify-center gap-2 bg-[#0D1B3E] text-[#FAF3E8] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#0D1B3E]/85 transition-colors duration-200 cursor-pointer">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                  {logo ? "Change logo" : "Upload logo"}
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    className="sr-only"
                    onChange={(e) => handleFile(e.target.files?.[0])}
                  />
                </label>
                {logo && (
                  <button
                    type="button"
                    onClick={() => setLogo(null)}
                    className="text-[#0D1B3E]/50 text-sm font-bold hover:text-[#0D1B3E] transition-colors cursor-pointer"
                  >
                    Remove
                  </button>
                )}
              </div>
              {error && (
                <p className="text-[#F25C2A] text-sm font-bold" role="alert">
                  {error}
                </p>
              )}
            </div>

            {/* Name */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="business-name"
                className="text-[11px] font-black tracking-[0.18em] uppercase text-[#0D1B3E]/50"
              >
                2 · Your business name
              </label>
              <input
                id="business-name"
                type="text"
                value={name}
                maxLength={40}
                onChange={(e) => setName(e.target.value)}
                className="w-full max-w-md bg-transparent border-2 border-[#0D1B3E]/20 rounded-xl px-5 py-3.5 text-[#0D1B3E] text-base placeholder:text-[#0D1B3E]/35 focus:border-[#0D1B3E]/50 focus:outline-none transition-colors"
              />
            </div>

            {/* Colour */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-black tracking-[0.18em] uppercase text-[#0D1B3E]/50">
                3 · Label colour
              </span>
              <div className="flex flex-wrap gap-3">
                {labelColors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setColor(c)}
                    aria-pressed={c.name === color.name}
                    className={`flex items-center gap-2.5 rounded-full pl-2 pr-5 py-2 border-2 text-sm font-bold transition-colors cursor-pointer ${
                      c.name === color.name
                        ? "border-[#0D1B3E] text-[#0D1B3E]"
                        : "border-[#0D1B3E]/15 text-[#0D1B3E]/55 hover:border-[#0D1B3E]/35"
                    }`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-[#0D1B3E]/20"
                      style={{ background: c.bg }}
                    />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={sendToWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 bg-[#F25C2A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.25.69-1.43 1.32-1.99 1.4-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.6-1.21-3.06s.77-2.17 1.04-2.47c.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.42-.07.66.5.25.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.02.96.3.15.49.22.56.35.07.12.07.72-.18 1.41z" />
                </svg>
                Send This to GrowKart
              </button>
              <button
                type="button"
                onClick={download}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#0D1B3E] hover:text-[#FAF3E8] transition-colors duration-200 cursor-pointer"
              >
                Download Mockup
              </button>
            </div>

            {status && (
              <p
                className="flex items-start gap-2.5 text-[#0D1B3E] text-sm font-bold -mt-3"
                role="status"
              >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                  <path
                    d="M2.5 7.5l3 3 6-7"
                    stroke="#F25C2A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {status}
              </p>
            )}

            <p className="text-[#0D1B3E]/45 text-xs leading-relaxed max-w-md">
              This is a quick visual, not a print proof. Send it over and we&apos;ll
              design the real label properly around your brand — free, before you order
              anything.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
