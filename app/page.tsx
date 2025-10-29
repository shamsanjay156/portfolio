import Hero from "./Components/Hero";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans bg-black">
      <main className="flex w-full flex-col items-center justify-center  sm:items-start">
        <div className="w-full h-full ">
          <Hero />
        </div>
      </main>
    </div>
  );
}
