export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Which Excel versions are supported?",
    answer: "Supports Excel 2010 and above, including Office 365.",
    category: "compatibility"
  },
  {
    id: 2,
    question: "What are the limitations of the trial version?",
    answer: "The trial version can process up to 10 files per day with some advanced features disabled.",
    category: "usage"
  },
  {
    id: 3,
    question: "How to purchase the paid version?",
    answer: "Click the purchase button on the homepage and follow the instructions to unlock all features.",
    category: "payment"
  },
  {
    id: 4,
    question: "Will the software lag when processing large files?",
    answer: "We've optimized the processing algorithm to remain smooth even with hundreds of files.",
    category: "usage"
  },
  {
    id: 5,
    question: "Is Mac supported?",
    answer: "Currently only Windows is supported, Mac version is under development.",
    category: "compatibility"
  }
];