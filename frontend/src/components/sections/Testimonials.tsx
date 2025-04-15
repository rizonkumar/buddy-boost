import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    quote:
      "Having an accountability partner made all the difference in my fitness journey. I'm now consistently hitting the gym 4 times a week.",
    name: "Alex Johnson",
    role: "Fitness Enthusiast",
    image: "/placeholder-avatar-1.jpg",
    initials: "AJ",
  },
  {
    quote:
      "I struggled with my thesis for months until I found an accountability partner through this app. We finished our projects on time!",
    name: "Maria Rodriguez",
    role: "Graduate Student",
    image: "/placeholder-avatar-2.jpg",
    initials: "MR",
  },
  {
    quote:
      "The progress tracking features help me visualize my journey and stay motivated even when things get tough.",
    name: "Jamal Williams",
    role: "Entrepreneur",
    image: "/placeholder-avatar-3.jpg",
    initials: "JW",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who've transformed their goals into achievements
            with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-200 mb-4"
                  >
                    <path
                      d="M15.833 8.333H7.5V20H15.833V8.333ZM32.5 8.333H24.167V20H32.5V8.333Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.833 25.834H7.5C7.5 25.834 11.667 29.167 11.667 31.667C11.667 32.5 11.667 33.334 10.833 33.334C10 33.334 9.167 32.5 9.167 31.667H7.5C7.5 33.334 9.167 35.001 10.833 35.001C12.5 35.001 14.167 33.334 14.167 31.667C14.167 28.334 10 25.001 10 25.001H15.833V25.834ZM32.5 25.834H24.167C24.167 25.834 28.334 29.167 28.334 31.667C28.334 32.5 28.334 33.334 27.5 33.334C26.667 33.334 25.834 32.5 25.834 31.667H24.167C24.167 33.334 25.834 35.001 27.5 35.001C29.167 35.001 30.834 33.334 30.834 31.667C30.834 28.334 26.667 25.001 26.667 25.001H32.5V25.834Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
