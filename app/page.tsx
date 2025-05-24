"use client";
import Image from "next/image";
import Logo from "../public/logo.png";
import TextPressure from "@/components/ui/TextPressure";
import { Button } from "@/components/ui/button";
import { Strong, Text } from "@radix-ui/themes";



export default function Home() {
  return (
    <main>
      <header className=" flex justify-between flex-row **:max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" height={30} width={30} />
  
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr, 400px] items-center ">
        <div className="items-center justify-center text-center gap-4 flex flex-col">
          <TextPressure
            text="Track your Job Hunting Progress Easily"
            textColor="#00000"
            minFontSize={24}
          />
          <Text as="div">
            Job Hunting can be overwhelming,{" "}
            <Strong className="text-purple-500">EZtrack</Strong> makes it easy.
          </Text>

          <a href="/add-job">
            <Button className="cursor-pointer" size="lg" variant="default">
              Get Started for Free
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
