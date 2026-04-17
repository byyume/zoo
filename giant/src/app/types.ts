export interface Section {
  id: string;
  label: string;
  color: string;
}

export const SECTION_COLORS = [
  "#FF6B6B",
  "#FFE66D",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F0A500",
  "#B8E994",
  "#FDA7DF",
  "#9980FA",
];

export const DEFAULT_SECTIONS: Section[] = [
  { id: "1", label: "1원", color: "#FF6B6B" },
  { id: "2", label: "10원", color: "#FFE66D" },
  { id: "3", label: "100원", color: "#4ECDC4" },
  { id: "4", label: "1,000원", color: "#45B7D1" },
  { id: "5", label: "10,000원", color: "#96CEB4" },
  { id: "6", label: "100,000원", color: "#FFEAA7" },
  { id: "7", label: "1,000,000원", color: "#DDA0DD" },
  { id: "8", label: "10,000,000원", color: "#98D8C8" },
];
