import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Floor = () => {
  const map =useTexture("./textures/grass/color.jpg")
  const aoMap =useTexture("./textures/grass/ambientOcclusion.jpg")
  const normalMap =useTexture("./textures/grass/normal.jpg")
  const roughnessMap =useTexture("./textures/grass/roughness.jpg")

  map.repeat.set(8, 8);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;

  aoMap.repeat.set(8, 8);
  aoMap.wrapS = THREE.RepeatWrapping;
  aoMap.wrapT = THREE.RepeatWrapping;

  normalMap.repeat.set(8, 8);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;

  roughnessMap.repeat.set(8, 8);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;

  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={0} receiveShadow >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={map}
      />
    </mesh>
  );
};

export default Floor;
