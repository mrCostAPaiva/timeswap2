import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  CreditCard,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const Step = ({
  icon,
  title,
  description,
  color = "bg-blue-100",
}: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4 max-w-[250px]">
      <div className={cn("p-3 rounded-full mb-4", color)}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: StepProps[];
  ctaText?: string;
  ctaLink?: string;
}

const HowItWorks = ({
  title = "Como o TimeSwap Funciona",
  subtitle = "Transforme suas habilidades em renda em apenas alguns passos simples",
  steps = [
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Crie Seu Perfil",
      description:
        "Cadastre-se e mostre suas habilidades, experiência e disponibilidade",
      color: "bg-blue-100",
    },
    {
      icon: <Clock size={24} className="text-green-600" />,
      title: "Defina Seus Blocos de Tempo",
      description:
        "Defina sua disponibilidade em blocos de 15-60 minutos e estabeleça suas taxas",
      color: "bg-green-100",
    },
    {
      icon: <MessageCircle size={24} className="text-purple-600" />,
      title: "Conecte-se & Entregue",
      description:
        "Encontre clientes via videochamada ou chat e forneça seu serviço",
      color: "bg-purple-100",
    },
    {
      icon: <CreditCard size={24} className="text-amber-600" />,
      title: "Receba Pagamento",
      description:
        "Receba pagamentos seguros diretamente em sua conta após cada sessão",
      color: "bg-amber-100",
    },
    {
      icon: <Star size={24} className="text-rose-600" />,
      title: "Construa Reputação",
      description:
        "Colete avaliações e classificações para aumentar sua base de clientes",
      color: "bg-rose-100",
    },
  ],
  ctaText = "Comece a Vender Seu Tempo",
  ctaLink = "/signup",
}: HowItWorksProps) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <a href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
