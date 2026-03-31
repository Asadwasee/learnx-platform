import { motion } from "framer-motion";
import { Brain, Code, Palette } from "lucide-react";
import { categories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
};

const CategoriesSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Explore Categories</h2>
        <p className="text-muted-foreground">Find the perfect course in your area of interest</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl border border-border p-8 text-center card-elevated cursor-pointer"
          >
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `hsl(${cat.color} / 0.1)`, color: `hsl(${cat.color})` }}
            >
              {iconMap[cat.icon]}
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-1">{cat.name}</h3>
            <p className="text-sm text-muted-foreground">{cat.count} courses</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
