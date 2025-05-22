import Image from "next/image";
import Logo from "../public/icon.png";


export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" height={100} width={100} />
      </header>
    </main>
  );
}
