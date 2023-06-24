"use client";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text3D,
  OrbitControls,
} from "@react-three/drei";

export default function HeroSection() {
  return (
    <>
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Scene />
        <axesHelper
          scale={2}
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div className="text-center md:text-end relative">
        <p className="mr-0 md:mr-16 text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
          SOFTWARE
        </p>
        <p className="text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
          ENGINEER
        </p>
        <p className="md:font-normal text-2xs md:text-sm inline">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </p>
      </div>
    </>
  );
}

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {`=)`}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
    </>
  );
}
