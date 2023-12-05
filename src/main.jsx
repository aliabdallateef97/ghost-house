import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Loader } from "@react-three/drei";

const fog = new THREE.Fog("#262837", 1, 15);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 100, position: [0, 4, 12] }}
      scene={{ fog: fog }}
      shadows
      flat
    >
      <App />
    </Canvas>
    <Loader />
  </React.StrictMode>
);
