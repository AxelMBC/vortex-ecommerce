import audifonosSony from "@/public/productos/audifonos/audifonosSony.jpg";
import audifonosBose from "@/public/productos/audifonos/audifonosBose.jpg";
import audifonosApple from "@/public/productos/audifonos/audifonosApple.jpg";

export const audifonosLista = [
  {
    id: 1,
    titulo: "Sony WH-1000XM5",
    descripcion:
      "Los Sony WH-1000XM5 son auriculares inalámbricos con cancelación de ruido líder en la industria, ideales para quienes buscan una experiencia de audio inmersiva",
    precio: 6979,
    imagen: audifonosSony,
    especificaciones: [
      "Cancelación activa de ruido con procesador QN1",
      "40 horas de batería con carga rápida",
      "Sonido Hi-Res con drivers de 40mm",
      "Bluetooth 5.2 con soporte LDAC",
      "Compatibles con asistentes de voz",
    ],
    videoYT: "https://www.youtube.com/watch?v=6N8_0eAlyFQ",
  },

  {
    id: 2,
    titulo: "Bose QuietComfort 45",
    descripcion:
      "Los Bose QC45 ofrecen una cancelación de ruido excepcional y comodidad para largas sesiones de escucha, perfectos para viajes y trabajo.",
    precio: 6560,
    imagen: audifonosBose,
    especificaciones: [
      "Cancelación de ruido QuietComfort",
      "Hasta 24 horas de batería",
      "Sonido equilibrado con tecnología TriPort",
      "Bluetooth 5.1 con multipunto",
      "Diseño ligero y plegable",
    ],
    videoYT: "https://www.youtube.com/watch?v=7YrjVFjUSUA",
  },
  {
    id: 3,
    titulo: "Apple AirPods Max",
    descripcion:
      "Los AirPods Max combinan un diseño premium con audio espacial y cancelación de ruido avanzada, ideales para usuarios de Apple.",
    precio: 10947,
    imagen: audifonosApple,
    especificaciones: [
      "Audio espacial con seguimiento dinámico",
      "Cancelación de ruido activa",
      "Almohadillas de espuma viscoelástica",
      "Hasta 20 horas de batería",
      "Chip H1 para conexión rápida",
    ],
    videoYT: "https://www.youtube.com/watch?v=vQsIeF7XISA",
  },
];
