"use client"; // Asegura que este componente solo se ejecute en el cliente

import { useEffect, useRef } from "react";

// No importamos Leaflet directamente aquí para evitar SSR
const Mapa = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  // Coordenadas de Guadalajara
  const center: [number, number] = [20.675, -103.347];
  const zoom = 15;

  useEffect(() => {
    // Importamos Leaflet dinámicamente dentro de useEffect
    const initializeMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css"); // Import CSS dynamically

      // Corrige los íconos de Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;
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
    };

    initializeMap();

    // Limpiar el mapa al desmontar
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
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