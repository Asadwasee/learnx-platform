import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What Our Students Say</h2>
          <p className="text-muted-foreground">Join thousands of satisfied learners</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 relative">
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                  width={150}
                  height={150}
                />
                <p className="text-lg text-foreground mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full w-9 h-9">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full w-9 h-9">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
