"use client";
import Link from "next/link";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import SplitText from "@/components/SplietText";
export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <BlurText
        text="Welcome To My Wesbsite"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-5xl  mb-8 font-bold"
      />
      <div className="flex items-center mb-4">
        <SplitText
          text="Hello, My name Abroril huda"
          className="text-2xl font-semibold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div className="flex ">
        <GradientText
          colors={["#111", "#eaeaea", "#111", "#eaeaea", "#111"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class hover:bg-violet-200 p-2"
        >
          <Link
            href="https://github.com/abrorilhuda"
            className="hover:text-violet-500"
          >
            GitHub
          </Link>
        </GradientText>
      </div>
    </div>
  );
}
