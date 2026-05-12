export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQContent = {
  title: string;
  description: string;
  items: FAQItem[];
};
