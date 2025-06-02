"use client";

import { Button } from "@/components/ui/button";
import { Strong, Text } from "@radix-ui/themes";



export default function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr, 400px] items-center ">
        <div className="items-center justify-center text-center gap-4 flex flex-col">
       <Text as="div"
       className="text-5xl font-bold text-gray-900 dark:text-gray-100">
        Job Hunting Made Easy
       </Text>
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
