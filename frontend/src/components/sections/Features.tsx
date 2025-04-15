import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, BarChart3, CheckSquare, Calendar } from "lucide-react";

const features = [
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Accountability Partners",
    description:
      "Connect with friends or coaches who help keep you on track and motivated to achieve your goals.",
    badge: "Core Feature",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "Progress Tracking",
    description:
      "Visualize your journey with charts and metrics that show how far you've come.",
    badge: "Analytics",
  },
  {
    icon: <CheckSquare className="h-12 w-12 text-primary" />,
    title: "SMART Goal Setting",
    description:
      "Create Specific, Measurable, Achievable, Relevant, and Time-bound goals with our guided framework.",
    badge: "Planning",
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Task Management",
    description:
      "Break down goals into manageable tasks and schedule them for consistent progress.",
    badge: "Organization",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines accountability, tracking, and social features
            to help you achieve your goals faster than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {feature.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
