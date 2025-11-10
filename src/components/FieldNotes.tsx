import { useState } from "react";
import { blogPosts, categories, BlogCategory } from "@/data/blogPosts";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export const FieldNotes = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "All">("All");

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts =
    selectedCategory === "All"
      ? regularPosts
      : regularPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="field-notes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Field Notes
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories from the field, expert tips, conservation updates, and member experiences
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-accent">★</span> Featured Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => setSelectedCategory("All")}
            className="transition-all duration-300"
          >
            All Posts
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No posts found in this category. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
