import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'


const House = () => {
  const house=useGLTF('./model/house.gltf')

  useEffect(() => {
    if (house) {
      house.scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
    }
}, [house]);

  return (
    <primitive object={house.scene} scale={5} position-y={1.4}/>
  )
}

export default House