import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SellerCard from "@/components/shared/SellerCard";

interface FeaturedSellersProps {
  title?: string;
  description?: string;
  sellers?: Array<{
    id: string;
    name: string;
    avatar: string;
    rating: number;
    skills: string[];
    pricePerHour: number;
    availability: string;
  }>;
  className?: string;
}

const FeaturedSellers = ({
  title = "Vendedores em Destaque",
  description = "Descubra nossos profissionais mais bem avaliados prontos para ajudar com sua experiência",
  sellers = [
    {
      id: "1",
      name: "Jane Cooper",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      rating: 4.8,
      skills: ["Desenvolvimento Web", "Design UI/UX", "React"],
      pricePerHour: 45,
      availability: "Disponível hoje",
    },
    {
      id: "2",
      name: "Alex Morgan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      rating: 4.9,
      skills: ["Consultoria Financeira", "Investimentos", "Orçamento"],
      pricePerHour: 60,
      availability: "Disponível amanhã",
    },
    {
      id: "3",
      name: "Maria Silva",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      rating: 4.7,
      skills: ["Aulas de Idiomas", "Espanhol", "Português"],
      pricePerHour: 35,
      availability: "Disponível hoje",
    },
    {
      id: "4",
      name: "David Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      rating: 4.6,
      skills: ["Design Gráfico", "Ilustração", "Branding"],
      pricePerHour: 50,
      availability: "Disponível fins de semana",
    },
  ],
  className,
}: FeaturedSellersProps) => {
  // In a real implementation, this would handle actual scrolling
  const handleScrollLeft = () => {
    console.log("Scroll left");
  };

  const handleScrollRight = () => {
    console.log("Scroll right");
  };

  return (
    <section className={cn("py-12 bg-slate-50", className)}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
            <p className="text-slate-600 mt-2">{description}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide">
            {sellers.map((seller) => (
              <div key={seller.id} className="snap-start flex-shrink-0">
                <SellerCard seller={seller} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="rounded-full px-6">
            Ver Todos os Vendedores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSellers;
