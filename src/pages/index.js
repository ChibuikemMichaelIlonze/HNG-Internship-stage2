import { Inter } from "next/font/google";
import Hero from "./Home";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mode, setMode] = useState(true);

 
  return (
    <main className={`bg-zinc-900 ${inter.className}`}>
      <Hero mode={mode} setMode={setMode} />
    </main>
  );
}
