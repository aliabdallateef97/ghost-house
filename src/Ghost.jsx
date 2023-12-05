import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Ghost = () => {
  let ghost1 = useRef();
  let ghost2 = useRef();
  let ghost3 = useRef();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    const ghostAngle = elapsedTime * 0.5;
    ghost1.current.position.x = Math.sin(ghostAngle) * 4;
    ghost1.current.position.z = Math.cos(ghostAngle) * 4;
    ghost1.current.position.y = Math.sin(elapsedTime * 3);

    const ghost2Angle = -elapsedTime * 0.32;
    ghost2.current.position.x = Math.sin(ghost2Angle) * 5;
    ghost2.current.position.z = Math.cos(ghost2Angle) * 5;
    ghost2.current.position.y =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    const ghost3Angle = -elapsedTime * 0.18;
    ghost3.current.position.x =
      Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3.current.position.z =
      Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3.current.position.y =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  });

  return (
    <>
      <pointLight
        color="#ff00ff"
        intensity="2"
        distance="3"
        ref={ghost1}
        castShadow
        shadow-mapSize={[256, 256]}
        shadow-camera-near={1}
        shadow-camera-far={7}
      />
      <pointLight
        color="#ffff00"
        intensity="2"
        distance="3"
        ref={ghost2}
        castShadow
        shadow-mapSize={[256, 256]}
        shadow-camera-near={1}
        shadow-camera-far={7}
      />
      <pointLight
        color="#00ffff"
        intensity="2"
        distance="3"
        ref={ghost3}
        castShadow
        shadow-mapSize={[256, 256]}
        shadow-camera-near={1}
        shadow-camera-far={7}
      />
    </>
  );
};

export default Ghost;
