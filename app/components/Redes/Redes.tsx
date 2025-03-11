
import Link from "next/link";
import Image from "next/image";

const lstRedes = [
    { name: "Facebook", href: "https://www.facebook.com", src: "/facebook.png"},
    { name: "Instagram", href: "https://www.instagram.com", src: "/instagram.png"},
    { name: "X", href: "https://www.x.com", src: "/x.png"},
]

const Redes = () => {
  return (
    <nav className="fixed right-5 bottom-5">
      <ul className="flex space-x-6">
        {lstRedes.map((red, index) => (
          <li
            key={index}
          >
            <Link
              href={red.href}
            >
              <Image
                src={red.src}
                alt={red.name}
                width={25}
                height={25}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Redes;