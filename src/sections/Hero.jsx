import {OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import GoingMerry from "../components/GoingMerry";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants";
import { useMediaQuery } from "react-responsive";
import Ocean from "../components/Ocean";
import Cloud from "../components/Cloud";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full max-w-[2000px] mx-auto">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
            <GoingMerry
              position={sizes.merryPosition}
              scale={sizes.merryScale}
              rotation={[0, 0, 0]}
            />
           <Cloud
              animationProps={{ y: 3, duration: 2, ease: "power1.inOut", yoyo: true, repeat: -1 }}
              position={[-2, 6, -8]} scale={.3}
            />
            <Cloud
              animationProps={{ y: 6, duration: 3, ease: "power1.inOut", yoyo: true, repeat: -1 }}
              position={[-19, 7, -5]} scale={.2}
            />
            <Ocean position={[0, -6.6, -4]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
