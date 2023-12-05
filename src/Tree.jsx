import React,{useEffect, useMemo} from 'react'
import {clone} from 'three/examples/jsm/utils/SkeletonUtils'
import { useGLTF } from '@react-three/drei'

const Tree = ({position}) => {
    const tree =useGLTF("./model/tree.gltf")
    const treeInstance=useMemo(()=>clone(tree.scene),[tree.scene])

    useEffect(() => {
        if (treeInstance) {
            treeInstance.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
        }
    }, [treeInstance]);

  return (
    <primitive object={treeInstance} scale={0.12} position={position}/>
  )
}

export default Tree
useGLTF.preload("./model/tree.gltf")