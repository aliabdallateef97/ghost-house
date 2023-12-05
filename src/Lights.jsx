import React from "react";

const Lights = () => {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight color="#b9d5ff" intensity={0.12} />

      {/* Directional Light */}
      <directionalLight
        color="#b9d5ff"
        intensity={1.5}
        position={[4, 5, -2]}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-near={1}
        shadow-camera-far={20}
      />

      {/* Door Light */}
      <pointLight
        color="#ff7d46"
        intensity={1.5}
        distance={9}
        position={[-2, 1.7, 2.4]}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-near={1}
        shadow-camera-far={20}
      />
    </>
  );
};

export default Lights;
