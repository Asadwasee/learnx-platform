import { Star, Bookmark, BookmarkCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  image: string;
  duration: string;
  students: number;
  progress?: number;
  bookmarked?: boolean;
  onToggleBookmark?: () => void;
}

const levelColors = {
  Beginner: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Intermediate: "bg-primary/10 text-primary border-primary/20",
  Advanced: "bg-accent/10 text-accent border-accent/20",
};

const CourseCard = ({
  title, instructor, level, rating, image, duration, students, progress, bookmarked, onToggleBookmark,
}: CourseCardProps) => (
  <div className="group bg-card rounded-xl border border-border overflow-hidden card-elevated">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        width={600}
        height={400}
      />
      <div className="absolute top-3 left-3">
        <Badge variant="outline" className={`${levelColors[level]} text-xs font-medium backdrop-blur-sm`}>
          {level}
        </Badge>
      </div>
      {onToggleBookmark && (
        <button
          onClick={onToggleBookmark}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-background"
        >
          {bookmarked ? (
            <BookmarkCheck className="w-4 h-4 text-primary" />
          ) : (
            <Bookmark className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      )}
    </div>

    <div className="p-5">
      <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{instructor}</p>

      <div className="flex items-center justify-between text-sm mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="font-medium text-foreground">{rating}</span>
          <span className="text-muted-foreground">({students.toLocaleString()})</span>
        </div>
        <span className="text-muted-foreground">{duration}</span>
      </div>

      {progress !== undefined && progress > 0 && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-hero-gradient rounded-full animate-progress-fill"
              style={{ "--progress-width": `${progress}%`, width: `${progress}%` } as React.CSSProperties}
            />
          </div>
        </div>
      )}

      <Button variant="outline" size="sm" className="w-full mt-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
        View Course
      </Button>
    </div>
  </div>
);

export default CourseCard;
