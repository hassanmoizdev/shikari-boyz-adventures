import { Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { BlogPost } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-forest hover:shadow-golden transition-all duration-500 transform hover:-translate-y-2 md:col-span-2 md:row-span-2">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-accent text-accent-foreground border-none">
              Featured
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground border-none">
              {post.category}
            </Badge>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-forest hover:shadow-golden transition-all duration-500 transform hover:-translate-y-2 bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <Badge className="bg-secondary text-secondary-foreground mb-3">
          {post.category}
        </Badge>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
