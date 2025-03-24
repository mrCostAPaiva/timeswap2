import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Github,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "/about" },
        { name: "Carreiras", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Imprensa", href: "/press" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "/help" },
        { name: "Central de Segurança", href: "/safety" },
        { name: "Diretrizes da Comunidade", href: "/guidelines" },
        { name: "Fale Conosco", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Serviço", href: "/terms" },
        { name: "Política de Privacidade", href: "/privacy" },
        { name: "Política de Cookies", href: "/cookies" },
        { name: "Acessibilidade", href: "/accessibility" },
      ],
    },
    {
      title: "TimeSwap",
      links: [
        { name: "Como Funciona", href: "/how-it-works" },
        { name: "Venda Seu Tempo", href: "/sell" },
        { name: "Compre Tempo", href: "/buy" },
        { name: "Histórias de Sucesso", href: "/stories" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className={cn("w-full bg-background border-t", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TimeSwap</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Monetize suas habilidades vendendo blocos curtos de tempo para
              pessoas que buscam ajuda rápida, conselhos ou serviços.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Assine nossa newsletter
              </h3>
              <p className="text-muted-foreground">
                Receba as últimas atualizações e ofertas diretamente na sua
                caixa de entrada.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Digite seu email"
                className="px-4 py-2 border border-border rounded-l-md w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button className="rounded-l-none">Assinar</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {currentYear} TimeSwap. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
