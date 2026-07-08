import { cn } from "@/shared/lib/cn";

type IconName =
  | "arrow"
  | "check"
  | "close"
  | "facebook"
  | "instagram"
  | "layers"
  | "map"
  | "measure"
  | "menu"
  | "message"
  | "phone"
  | "tool"
  | "whatsapp";

type LineIconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, string[]> = {
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  check: ["m5 12 4 4L19 6"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  facebook: ["M15 8h-2a3 3 0 0 0-3 3v3H8v4h2v4h4v-4h3l1-4h-4v-2a1 1 0 0 1 1-1h3V8z"],
  instagram: [
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
    "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    "M17.5 6.5h.01",
  ],
  layers: ["m12 2 9 5-9 5-9-5 9-5z", "m3 12 9 5 9-5", "m3 17 9 5 9-5"],
  map: ["M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z", "M9 3v15", "M15 6v15"],
  measure: ["M3 17 17 3l4 4L7 21l-4-4z", "m14 7 2 2", "m11 10 2 2", "m8 13 2 2"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  message: ["M21 12a8 8 0 0 1-8 8H7l-4 3 1.5-5A8 8 0 1 1 21 12z"],
  phone: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z"],
  tool: ["M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3z"],
  whatsapp: ["M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z", "M9 8.5c.5 3 2.5 5 5.5 6"],
};

export function LineIcon({ name, className }: LineIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name].map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  );
}
