import { Inter } from "next/font/google";
import Hero from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-zinc-900 ${inter.className}`}
    >
      <Hero />
    </main>
  );
}
