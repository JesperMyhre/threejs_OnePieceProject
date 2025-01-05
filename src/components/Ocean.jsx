/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Ocean = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("./models/ocean5.glb");
  
  useGSAP(() => {
    // Create a timeline for smooth, continuous animation
    gsap.to(ref.current.position, {
      x: 0.5, // Move up by 0.2 units
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1, // Infinite repeat
    });
  }, [ref]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Material}
        scale={[38.628, 19.486, 19.486]}
      />
    </group>
  )
}

useGLTF.preload('./models/ocean3.glb')

export default Ocean;
