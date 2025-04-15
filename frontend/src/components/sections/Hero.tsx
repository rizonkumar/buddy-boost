import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Achieve Your Goals with{" "}
            <span className="text-primary">Accountability</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            Stay on track with friends or coaches who keep you motivated and
            accountable. Set SMART goals, track progress, and celebrate
            achievements together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start for Free
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">1,000+</span> people achieved
              their goals last month
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-white">
            <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-violet-200">
              {/* This would be your actual app screenshot */}
              <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-gray-500">
                App Dashboard Preview
              </div>
            </div>
          </div>

          {/* Floating elements for visual appeal */}
          <div className="absolute -right-4 -top-4 bg-green-100 p-3 rounded-lg shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600"
              />
            </svg>
          </div>

          <div className="absolute -left-6 bottom-8 bg-blue-100 p-3 rounded-lg shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2L3 14L12 14L11 22L21 10L12 10L13 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
