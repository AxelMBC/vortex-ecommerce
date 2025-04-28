import pcHP from "@/public/productos/pcs/pcHP.jpg";
import pcXtreme from "@/public/productos/pcs/pcXtreme.jpg";
import pcDELL from "@/public/productos/pcs/pcDELL.jpg";

export const pcsLista = [
  {
    id: 1,
    titulo: "HP Pavilion All-in-One 24",
    descripcion:
      "Una computadora todo en uno con pantalla Full HD de 23.8 pulgadas, ideal para productividad y entretenimiento.",
    precio: 14639,
    imagen: pcHP,
    especificaciones: [
      "Procesador: Intel Core i5",
      "Pantalla: 23.8\" Full HD",
      "RAM: 8 GB",
      "Almacenamiento: 512 GB SSD",
      "Gráficos: Integrados Intel UHD",
    ],
    videoYT: "https://www.youtube.com/watch?v=-cr8qUSYBJ8",
  },

  {
    id: 2,
    titulo: "Xtreme PC Gaming XTACR716GBVEGA7MW",
    descripcion:
      "Una potente PC gamer con procesador AMD Ryzen 7 y gráficos Radeon 7, perfecta para juegos exigentes.",
    precio: 13899,
    imagen: pcXtreme,
    especificaciones: [
      "Procesador: AMD Ryzen 7",
      "RAM: 16 GB",
      "Almacenamiento: 500 GB SSD",
      "Gráficos: AMD Radeon 7",
      "Diseño: Chasis gamer con iluminación RGB",
    ],
    videoYT: "https://www.youtube.com/watch?v=_5FOHaNEY2c",
  },
  {
    id: 3,
    titulo: "Dell Optiplex MFF 7010",
    descripcion:
      "Una computadora compacta y eficiente para oficina, con gran rendimiento y diseño minimalista.",
    precio: 17018,
    imagen: pcDELL,
    especificaciones: [
      "Procesador: Intel Core i5",
      "RAM: 16 GB",
      "Almacenamiento: 256 GB SSD",
      "Gráficos: Intel UHD",
      "Factor de forma: Mini PC",
    ],
    videoYT: "https://www.youtube.com/watch?v=z70EGz3UITQ",
  },
];
