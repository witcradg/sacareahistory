"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Video Marketing AI for YouTube Sacramento",
    answer: "Video Marketing for YouTube Sacramento. Social Media marketing with AI Generated Video. Build Your Brand Vith Video.",
    value: "item-1",
  },
  {
    question: "eCommerce Branding Sacramento, California",
    answer:
      "eCommerce Branding in your local Sacramento, California. ABC, NBC, Radio, Podcasts and Local Mailers for your business.",
    value: "item-2",
  },
  {
    question:
      "Email marketing for eCommerce stores.",
    answer:
      "Email marketing automaitons for ecommerce stores can increast your business by up to 60x. Hire an eMail Automation Expert to make sure your customers are converting even after they leave the store.",
    value: "item-3",
  },
  {
    question: "Ecommerce SEO Sacramento, CA",
    answer: "Build funnels that will convert for the long haul in local Sacramento publications. Product Sales or Packages.",
    value: "item-4",
  },
  {
    question: "Why do I need custom ecommerce development.",
    answer: "eCommerce SEO in Sacramento, CA. Rank your Products, Product Categories and Brand in the top of all Search Engines and AI Platforms.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
