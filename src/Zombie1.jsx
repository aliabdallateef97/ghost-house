import React, { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import  {clone}  from 'three/examples/jsm/utils/SkeletonUtils'

const Zombie1 = ({position}) => {

    const gltf = useGLTF("./model/zombie.gltf");
    const zombieInstance = useMemo(() => clone(gltf.scene), [gltf.scene]);

    useEffect(() => {
        if (zombieInstance) {
            zombieInstance.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
        }
    }, [zombieInstance]);

    return <primitive object={zombieInstance} scale={0.5} position={position} />;
}

export default Zombie1
useGLTF.preload("./model/zombie.gltf")