import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { courses } from "@/lib/data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedCourses = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Featured Courses</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Handpicked courses to kickstart your tech journey</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.slice(0, 6).map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/courses">
          <Button variant="outline" size="lg" className="gap-2">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedCourses;
