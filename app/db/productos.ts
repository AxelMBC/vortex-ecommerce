import pCImage from "@/public/landing-carousel/PC.jpg";
import headphonesImage from "@/public/landing-carousel/Headphones.jpg";
import keyboardImage from "@/public/landing-carousel/Keyboard.jpg";
import tecladoMecanico from "@/public/landing-carousel/Keyboard.jpg";
import tecladoErgonomico from "@/public/productos/teclados/ergonomico.jpg";
import tecladoPortatil from "@/public/productos/teclados/teclado-portatil.jpg";

export const productosPrincipal = [
  { img: pCImage, alt: "Minimal Slide 1", caption: "Elegancia Atemporal" },
  { img: headphonesImage, alt: "Minimal Slide 2", caption: "Belleza Simple" },
  { img: keyboardImage, alt: "Minimal Slide 3", caption: "Diseño Unico" },
];

export const productosTeclados = [
  {
    img: tecladoMecanico,
    alt: "Minimal Slide 3",
    caption: "Los Mejores Teclados Mecanicos",
  },
  {
    img: tecladoErgonomico,
    alt: "Minimal Slide 1",
    caption: "Teclado Ergonomico para Mayor Comodidad",
  },
  {
    img: tecladoPortatil,
    alt: "Minimal Slide 2",
    caption: "Teclado Portatil para Llevar a Todos Lados",
  },
];
