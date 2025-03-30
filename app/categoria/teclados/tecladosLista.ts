import tecladoMecanico from "@/public/landing-carousel/Keyboard.jpg";
import tecladoErgonomico from "@/public/productos/teclados/ergonomico.jpg";
import tecladoPortatil from "@/public/productos/teclados/teclado-portatil.jpg";

export const tecladosLista = [
  {
    id: 1,
    titulo: "Keychron V3 Teclado Mecánico Personalizado",
    descripcion:
      "Teclado mecánico TKL con interruptores Keychron K Pro café, compatible con Mac, Windows y Linux. Cuenta con soporte QMK/VIA para personalización avanzada.",
    precio: 2400,
    imagen: tecladoMecanico,
    especificaciones: [
      "Diseño TKL (Tenkeyless) 80% con 87 teclas",
      "Compatible con Mac, Windows y Linux",
      "Interruptores Keychron K Pro café prelubricados",
      "Soporte QMK/VIA para personalización de teclas y macros",
      "Retroiluminación RGB con orientación sur",
      "Teclas PBT de doble disparo para mayor durabilidad",
      "Estructura de carcasa esmerilada negra translúcida",
      "Montaje intercambiable en caliente para switches de 3 y 5 pines",
      "Conectividad USB-C con cable removible",
      "Estabilizadores atornillados en PCB para mayor precisión en teclas grandes",
    ],
    videoYT: "https://www.youtube.com/watch?v=cl-3j-4aBDk",
  },

  {
    id: 2,
    titulo: "Dygma Defy Teclado Mecánico Dividido",
    descripcion:
      "Teclado mecánico ergonómico y personalizable con diseño dividido, switches intercambiables en caliente, conectividad inalámbrica opcional y retroiluminación RGBW.",
    precio: 6000,
    imagen: tecladoErgonomico,
    especificaciones: [
      "Diseño ergonómico dividido para mayor comodidad",
      "62 switches mecánicos + 8 switches mecánicos de bajo perfil",
      "Compatibilidad con switches MX y Choc gracias a sockets intercambiables en caliente",
      "Retroiluminación RGBW con 70 LEDs en teclas y 110 en underglow",
      "Opcional: conectividad inalámbrica Bluetooth y RF de baja latencia",
      "Teclas de perfil Cherry en ABS de alta calidad con grabado láser",
      "Construcción en aluminio anodizado para mayor durabilidad",
      "Compatibilidad con Windows, macOS, Linux, iOS y Android",
      "Microcontroladores RP2040 y Nordic para procesamiento eficiente",
      "Dimensiones: 164.16mm x 210.02mm x 35.36mm",
      "Peso aproximado de 1kg",
    ],
  },
  {
    id: 3,
    titulo: "ProtoArc - Teclado y mouse plegables XKM01",
    descripcion:
      "Combo de teclado y mouse plegables de tamaño completo con conectividad 2.4G y Bluetooth dual. Diseño portátil con batería recargable y teclas silenciosas.",
    precio: 1539.16,
    imagen: tecladoPortatil,
    especificaciones: [
      "Teclado plegable de tamaño completo con 105 teclas",
      "Diseño portátil con funda de transporte dura (12 x 5.5 x 1.6 pulgadas)",
      "Soporte plegable para dispositivos de 4 a 11 pulgadas",
      "Conectividad inalámbrica para hasta 3 dispositivos (2.4G + Bluetooth dual)",
      "Compatible con Windows, macOS, Chrome OS, iPadOS y Android",
      "Teclas de perfil bajo y mecanismo de tijera silencioso",
      "Mouse con 3 niveles de DPI ajustables (1000-1600-2400)",
      "Batería recargable con cable tipo C incluido",
      "Hasta 150 días de espera para el teclado y 200 días para el mouse",
      "12 teclas de acceso rápido para multimedia y productividad",
      "Construcción ligera y resistente ideal para viajes y negocios",
    ],
  },
];
