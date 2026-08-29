import React from "react";
import MotionWrapper from "../../../../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../../../../components/Animated/types";

const products = [
  {
    title: "360 Walkthroughs",
    description:
      "End to end production of 360 walkthroughs captured with the Insta360.",
    image: "/walk-mobile.jpg",
  },
  {
    title: "Propeller Mobile",
    description: "Propeller's mobile app",
    image: "/app.png",
  },
  {
    title: "New Product",
    description: "Coming soon...",
  },
];

export const ProjectPage: React.FC = () => {
  return (
    <div className="flex flex-col md:pt-[60px] pt-[30px] gap-4">
      <MotionWrapper direction={MotionFrom.Below} delay={0.2}>
        <p className="font-light text-lg mb-6">
          At Propeller, I worked across 3 distinct products.
        </p>
      </MotionWrapper>

      <div className="flex flex-col gap-3">
        {products.map((product, index) => (
          <MotionWrapper
            key={index}
            direction={MotionFrom.Below}
            delay={0.3 + index * 0.15}
          >
            <div className="group relative w-full overflow-hidden cursor-pointer">
              <div className="relative w-full aspect-[16/6] bg-neutral-900 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800" />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <div className="flex items-end gap-6 md:gap-10 w-full">
                    <span className="font-hatton text-white/20 text-6xl md:text-8xl leading-none -mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-hatton text-white text-2xl md:text-4xl">
                        {product.title}
                      </h3>
                      <p className="font-body font-light text-white/50 text-sm md:text-base max-w-[500px]">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};
