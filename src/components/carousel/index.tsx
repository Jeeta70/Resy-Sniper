import { cn } from "@/lib/utils";
import { ChevronsLeftIcon, ChevronsRight } from "lucide-react";
import { useState, useEffect } from "react";
const Index = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  className = "",
}: {
  children: any | unknown;
  autoSlide: boolean;
  autoSlideInterval?: number;
  className?: string;
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div
      className={cn("overflow-hidden relative sm:h-1/3 h-[300px]", className)}
    >
      <div
        className="flex h-full transition-transform ease-out duration-500 max-h-1/2"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronsLeftIcon />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronsRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: string, i: number) => (
            <div
              key={i}
              className={`
              transition-all w-10 h-2 bg-white rounded-full
              ${curr === i ? "p-1 bg-red-600" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
