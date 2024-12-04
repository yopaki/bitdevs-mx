import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://yopaki.com"
            className="text-orange-400 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Yopaki, Inc
          </Link>
        </p>
        <p className="mb-2">
          Contenido disponible bajo la{" "}
          <Link
            href="https://opensource.org/license/mit"
            className="text-orange-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Licencia MIT (MIT License)
          </Link>
        </p>
        <p>
          <Link
            href="https://github.com/yopaki/bitdevs-mx"
            className="text-orange-400 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Ver código fuente en GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
}
