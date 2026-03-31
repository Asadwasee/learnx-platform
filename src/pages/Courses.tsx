import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses as initialCourses } from "@/lib/data";

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;

const CoursesPage = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState<string>("All");
  const [courseData, setCourseData] = useState(initialCourses);

  const filtered = useMemo(() => {
    return courseData.filter((c) => {
      const matchLevel = level === "All" || c.level === level;
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase());
      return matchLevel && matchSearch;
    });
  }, [courseData, level, search]);

  const toggleBookmark = (id: number) => {
    setCourseData((prev) =>
      prev.map((c) => (c.id === id ? { ...c, bookmarked: !c.bookmarked } : c))
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              All Courses
            </motion.h1>
            <p className="text-muted-foreground mb-6">Browse our complete course catalog</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {levels.map((l) => (
                  <Button
                    key={l}
                    variant={level === l ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLevel(l)}
                    className={level === l ? "bg-hero-gradient text-primary-foreground border-0" : ""}
                  >
                    {l}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={`${level}-${search}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((course, i) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <CourseCard
                        {...course}
                        onToggleBookmark={() => toggleBookmark(course.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
                  <Button variant="outline" className="mt-4" onClick={() => { setSearch(""); setLevel("All"); }}>
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
