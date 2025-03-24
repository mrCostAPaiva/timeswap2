import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Briefcase,
  Palette,
  Code,
  Music,
  Camera,
  Coffee,
  Heart,
  Globe,
  Headphones,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface CategoryBrowserProps {
  categories?: Category[];
  onCategorySelect?: (category: Category) => void;
}

const CategoryBrowser = ({
  categories = [
    {
      id: "1",
      name: "Educação",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-100",
    },
    {
      id: "2",
      name: "Consultoria Profissional",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-green-100",
    },
    {
      id: "3",
      name: "Habilidades Criativas",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-purple-100",
    },
    {
      id: "4",
      name: "Programação",
      icon: <Code className="h-6 w-6" />,
      color: "bg-yellow-100",
    },
    {
      id: "5",
      name: "Música",
      icon: <Music className="h-6 w-6" />,
      color: "bg-pink-100",
    },
    {
      id: "6",
      name: "Fotografia",
      icon: <Camera className="h-6 w-6" />,
      color: "bg-orange-100",
    },
    {
      id: "7",
      name: "Estilo de Vida",
      icon: <Coffee className="h-6 w-6" />,
      color: "bg-red-100",
    },
    {
      id: "8",
      name: "Bem-estar",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-teal-100",
    },
    {
      id: "9",
      name: "Idiomas",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-indigo-100",
    },
    {
      id: "10",
      name: "Entretenimento",
      icon: <Headphones className="h-6 w-6" />,
      color: "bg-amber-100",
    },
  ],
  onCategorySelect = () => {},
}: CategoryBrowserProps) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Navegar por Categoria
        </h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 scrollbar-hide gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category)}
            className={cn(
              "flex flex-col items-center justify-center min-w-[120px] h-[120px] rounded-lg p-4 transition-all",
              "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary",
              category.color,
            )}
          >
            <div className="bg-white p-3 rounded-full mb-2">
              {category.icon}
            </div>
            <span className="text-sm font-medium text-gray-800">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBrowser;
