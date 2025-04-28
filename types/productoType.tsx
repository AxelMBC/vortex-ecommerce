import { StaticImageData } from 'next/image';

export interface productoType  {
    id: number,
    titulo: string,
    descripcion: string,
    precio: number,
    imagen: StaticImageData,
    especificaciones: string[],
    videoYT?: string;
}