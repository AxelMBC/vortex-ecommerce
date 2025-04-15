"use client"; // Asegura que este componente solo se ejecute en el cliente

import { useEffect, useRef } from "react";
import L from "leaflet"; // Importamos Leaflet directamente

const Mapa = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  // Coordenadas de Guadalajara
  const center: [number, number] = [20.675, -103.347];
  const zoom = 15;

  useEffect(() => {
    // Cargar el CSS de Leaflet dinámicamente en el DOM
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    // Corrige los íconos de Leaflet
    delete (L.Icon.Default.prototype as { _getIconUrl?: () => void })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    if (map.current || !mapContainer.current) return; // Evitar inicialización múltiple

    // Inicializar el mapa
    map.current = L.map(mapContainer.current).setView(center, zoom);

    // Añadir capa de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.current);

    // Añadir marcador
    L.marker(center)
      .addTo(map.current)
      .bindPopup("Oficinas Vortex - Guadalajara")
      .openPopup();

    // Limpiar el mapa y el CSS al desmontar
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      document.head.removeChild(link); // Eliminar el <link> al desmontar
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="rounded-lg"
      style={{ height: "400px", width: "100%" }}
    />
  );
};

export default Mapa;