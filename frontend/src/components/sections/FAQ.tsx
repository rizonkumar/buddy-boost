import React from "react";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What is an accountability partner?",
    answer:
      "An accountability partner is someone who helps you stay on track with your goals by checking in on your progress, offering support, and holding you accountable to your commitments. Our app makes it easy to connect with friends or find partners with similar goals.",
  },
  {
    question: "How do I find an accountability partner?",
    answer:
      "You can invite friends via email or social media, or use our matching system to find partners with similar goals and interests. Our algorithm suggests potential matches based on your goals, activity level, and preferences.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, your data is private by default. You control exactly what information is shared with your accountability partners. We use enterprise-grade encryption and follow strict privacy protocols to ensure your information is secure.",
  },
  {
    question: "Can I use the app for any type of goal?",
    answer:
      "Yes! Our app works for virtually any goal - fitness, career, education, personal projects, habits, and more. We provide templates for common goals, but you can also create completely custom goals.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes, we offer native apps for iOS and Android so you can track your goals and communicate with partners on the go. All features are available across web and mobile platforms.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact our support team.
          </p>
          <div className="mt-4">
            <a
              href="mailto:support@goalpartner.app"
              className="text-primary font-medium hover:underline"
            >
              support@goalpartner.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
