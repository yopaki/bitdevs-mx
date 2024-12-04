import Link from "next/link";

export function Header() {
  return (
    <header className="bg-orange-500 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            BitDevs México
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#acerca-de" className="hover:underline">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:underline">
                  Eventos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
