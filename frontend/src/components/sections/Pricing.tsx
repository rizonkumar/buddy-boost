import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic accountability tools",
    features: [
      "Set up to 3 goals",
      "Connect with 1 accountability partner",
      "Basic progress tracking",
      "Weekly check-ins",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Everything you need for serious goal achievement",
    features: [
      "Unlimited goals",
      "Connect with up to 5 accountability partners",
      "Advanced progress analytics",
      "Daily check-ins and reminders",
      "Goal templates library",
      "Priority support",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "Teams",
    price: "$24.99",
    period: "per month",
    description: "Perfect for teams working towards shared goals",
    features: [
      "Everything in Pro",
      "Team goal dashboard",
      "Unlimited team members",
      "Team analytics and reports",
      "Admin controls",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans come with a 14-day
            money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "shadow-xl border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Badge variant="default" className="bg-primary">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-sm font-medium text-gray-500">
                      {plan.period}
                    </span>
                  )}
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
