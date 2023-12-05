import './App.css'
import { Suspense } from 'react'
import Lights from './Lights'
import {OrbitControls} from '@react-three/drei'
import Floor from './Floor'
import Ghost from './Ghost'
import Graves from './Graves'
import House from './House'
import Zombie1 from './Zombie1'
import Zombie2 from './Zombie2'
import Tree from './Tree'

function App() {

  return (
    <>
    <color args={['#262837']} attach='background'/>
      <Lights />
      <OrbitControls />
      <Floor />
      <Ghost />
      <Graves />
      <Suspense fallback={null}>
      <House />
      <Zombie1 position={[0,0,3]} />
      <Zombie1 position={[-3,0,3]} />
      <Zombie1 position={[1,0,5]} />
      <Zombie2 position={[-1,0,3.5]}/>
      <Zombie2 position={[2,0,3.5]}/>
      <Zombie2 position={[-1,0,5]}/>
      <Tree position={[-3.8,0,2.2]}/>
      <Tree position={[-3.8,0,-2.2]}/>
      <Tree position={[3.8,0,2.2]}/>
      <Tree position={[3.8,0,-2.2]}/>
      </Suspense>
    </>
  )
}

export default App
