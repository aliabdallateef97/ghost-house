
const Graves = () => {
  const gravesArr = [...Array(49)];

 
  return (
    <group>
      {gravesArr?.map((grav,index) => {
        const angle = Math.random() * Math.PI * 2;
        const randomness = 5 + Math.random() * 4;
        const x = Math.sin(angle) * randomness;
        const z = Math.cos(angle) * randomness;

        return (
          <mesh
            position={[x, 0.2, z]}
            rotation={[
              0,
              (Math.random() - 0.5) * 0.6,
              (Math.random() - 0.5) * 0.6,
            ]}
            castShadow
            key={index}
          >
            <boxGeometry args={[0.3, 0.4, 0.1]} />
            <meshStandardMaterial color={"#b1b6b2"} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Graves;
