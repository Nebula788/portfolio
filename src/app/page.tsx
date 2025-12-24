"use client";
import Base from "./(components)/base";
import About from "./(components)/about";
import Image from "next/image";
import Navbar from "./(components)/navbar";
import Skillmastery from "./(components)/skillmastery";
import Contact from "./(components)/contact";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/8bit/button";
import Link from "next/link";

const page = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <div>
      <div className="fixed inset-0 z-0 bg-foreground">
        <Image
          src="/paper-back.jpg"
          alt="Book background"
          fill
          priority
          style={{
            objectFit: "cover",

            imageRendering: "pixelated",
          }}
        />
      </div>
      <div className="fixed top-0 left-0 w-full z-20 ">
        <Navbar />
      </div>

      <main className="relative z-10 pt-16 snap-both ">
        <Base />
        <About />
        <Skillmastery />
        <Contact />
      </main>
      <div className="flex justify-center items-center h-screen">
        <Link href="/game">
          <Button>Press Start</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
