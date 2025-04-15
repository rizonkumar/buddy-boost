import React from "react";
import { Badge } from "../ui/badge";

const steps = [
  {
    number: "01",
    title: "Sign up and create your profile",
    description:
      "Create an account and set up your profile with your interests and goal areas.",
  },
  {
    number: "02",
    title: "Set SMART goals with tasks",
    description:
      "Define your goals using our SMART framework and break them down into actionable tasks.",
  },
  {
    number: "03",
    title: "Connect with accountability partners",
    description:
      "Invite friends or find partners with similar goals to keep each other motivated.",
  },
  {
    number: "04",
    title: "Track progress and celebrate wins",
    description:
      "Update your progress, view analytics, and celebrate achievements with your support network.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your Journey to Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start achieving your goals with the
            power of accountability.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -ml-px hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`md:text-right ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <div className="font-mono text-sm text-primary font-bold mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div
                  className={`hidden md:flex ${
                    index % 2 === 1 ? "justify-end md:order-1" : "justify-start"
                  } relative`}
                >
                  <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Mobile step indicator */}
                <div className="flex md:hidden items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="h-px bg-gray-200 flex-1 ml-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
