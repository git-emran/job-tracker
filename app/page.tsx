import Image from "next/image";
import Logo from "../public/logo.png";
import TextPressure from "@/components/ui/TextPressure";
import { Button } from "@/components/ui/button"


 

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" height={30} width={30} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr, 400px] items-center ">
        <div className="items-center justify-center text-center gap-6 flex flex-col">
          <TextPressure
            text="Track your Job Hunt Progress Easily"
            textColor="#00000"
            minFontSize={24}
          />
       <h2>
        Job Hunting can be overwhelming, but EZtrack makes it easy. 
       </h2>
        
     
          <Button className="cursor-pointer" size="lg" variant="default">
            Get Started for Free
          </Button>
    
        </div>
      </section>
    </main>
  );
}
