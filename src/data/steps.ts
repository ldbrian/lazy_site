export interface Step {
  step: number;
  icon: string;
  description: string;
}

export const steps: Step[] = [
  {
    step: 1,
    icon: "fa-solid fa-download",
    description: "Download and install Lazy Excel Toolkit"
  },
  {
    step: 2,
    icon: "fa-solid fa-folder-open",
    description: "Select Excel files or folders to process"
  },
  {
    step: 3,
    icon: "fa-solid fa-sliders",
    description: "Set processing options and start"
  },
  {
    step: 4,
    icon: "fa-solid fa-file-export",
    description: "Export processed files"
  }
];