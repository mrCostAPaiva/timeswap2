import React from "react";
import { Star, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface SellerCardProps {
  seller?: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    skills: string[];
    pricePerHour: number;
    availability: string;
  };
  className?: string;
}

const SellerCard = ({
  seller = {
    id: "1",
    name: "Jane Cooper",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    rating: 4.8,
    skills: ["Desenvolvimento Web", "Design UI/UX", "React"],
    pricePerHour: 45,
    availability: "Disponível hoje",
  },
  className,
}: SellerCardProps) => {
  return (
    <Card
      className={cn(
        "w-[280px] h-[350px] overflow-hidden flex flex-col bg-white",
        className,
      )}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-primary/10">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback>{seller.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-medium text-base">{seller.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{seller.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 py-2 flex-1">
        <div className="flex flex-wrap gap-1 mb-3">
          {seller.skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-normal"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Clock className="h-4 w-4 mr-2" />
          <span>{seller.availability}</span>
        </div>

        <div className="mt-4">
          <div className="text-sm text-muted-foreground">A partir de</div>
          <div className="text-xl font-semibold">R${seller.pricePerHour}/h</div>
          <div className="text-xs text-muted-foreground">
            Agende em incrementos de 15 minutos
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2">
        <Button className="w-full" size="sm">
          Agendar Agora
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SellerCard;
