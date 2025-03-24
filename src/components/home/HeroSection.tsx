import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  sellCta?: string;
  buyCta?: string;
}

const HeroSection = ({
  title = "Transforme Seu Tempo Em Renda",
  subtitle = "Conecte-se com pessoas que precisam das suas habilidades e experiência. Venda seu tempo em blocos curtos e ganhe dinheiro fazendo o que você ama.",
  sellCta = "Vender Seu Tempo",
  buyCta = "Comprar Tempo",
}: HeroSectionProps) => {
  return (
    <section
      className="w-full py-20 px-4 md:px-8 lg:px-12 text-white"
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url('/images/timeswap-bg.jpg') top center / 100% 500px no-repeat,
          #1a202c
        `,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-xl">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold text-base"
            >
              {sellCta}
              <Clock className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-semibold text-base"
            >
              {buyCta}
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{service.title}</h3>
                      <p className="text-sm opacity-80">
                        ${service.price} / {service.duration} min
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button variant="link" className="text-white hover:text-white/80">
                Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-400 rounded-full blur-xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

// Sample featured services with icons
const featuredServices = [
  {
    title: "Ajuda com Código",
    price: 15,
    duration: 30,
    icon: <div className="text-white">💻</div>,
  },
  {
    title: "Prática de Idiomas",
    price: 10,
    duration: 20,
    icon: <div className="text-white">🗣️</div>,
  },
  {
    title: "Orientação de Carreira",
    price: 25,
    duration: 45,
    icon: <div className="text-white">📈</div>,
  },
  {
    title: "Feedback Criativo",
    price: 12,
    duration: 25,
    icon: <div className="text-white">🎨</div>,
  },
];

export default HeroSection;
