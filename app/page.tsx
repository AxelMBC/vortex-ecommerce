import Carousel from "./components/Carousel";
import Rating from "./components/Rating"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full pt-20">
        <Carousel />
        <Rating />
      </main>
    </div>
  );
}