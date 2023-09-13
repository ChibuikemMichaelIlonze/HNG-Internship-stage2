import { Inter } from "next/font/google";
import Hero from "./Hero";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mode, setMode] = useState(true);

 
  return (
    <main className={` ${inter.className}`}>
      <Hero mode={mode} setMode={setMode} />
      
    </main>
  );
}
