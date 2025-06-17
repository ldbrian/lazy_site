export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: "fa-solid fa-file-export",
    title: "Batch File Merge",
    description: "Support one-click merging of various Excel formats with automatic header conflict resolution"
  },
  {
    id: 2,
    icon: "fa-solid fa-broom",
    title: "Smart Data Cleaning",
    description: "Automatically identify and fix common data issues like duplicates and format errors"
  },
  {
    id: 3,
    icon: "fa-solid fa-table",
    title: "Format Standardization",
    description: "Uniformly adjust table styles to quickly generate professional Excel files"
  }
];