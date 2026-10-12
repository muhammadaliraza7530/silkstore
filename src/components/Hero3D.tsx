import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
const workingExterior = { url: "/images/team-working-exterior.jpg" };
const workingCeiling = { url: "/images/team-working-ceiling-2.jpg" };
const marbaleno = { url: "/images/marbaleno.jpg" };
const masken = { url: "/images/masken.jpg" };
const sandito = { url: "/images/sandito.jpg" };

/* Floating panels textured only with client-supplied Silkstone work and products */
function SwatchPanels() {
  const maps = useTexture([workingExterior.url, workingCeiling.url, marbaleno.url, masken.url, sandito.url]);
  maps.forEach((m) => (m.colorSpace = THREE.SRGBColorSpace));
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.18, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.1, 0.05);
  });
  // [x, y, z, w, h, rotY, mapIndex, floatSpeed]
  const panels: [number, number, number, number, number, number, number, number][] = [
    [0, 0.1, 0, 2.5, 3.2, 0, 0, 1.2],
    [-2.5, 0.5, -1.2, 1.5, 2.1, 0.5, 1, 1.6],
    [2.5, 0.7, -1.1, 1.5, 2.1, -0.5, 2, 1.4],
    [-1.9, -1.4, -0.6, 1.2, 1.5, 0.35, 3, 1.8],
    [1.9, -1.3, -0.7, 1.2, 1.5, -0.35, 4, 2],
  ];
  return (
    <group ref={group}>
      {panels.map(([x, y, z, w, h, ry, mi, sp], i) => (
        <Float key={i} speed={sp} rotationIntensity={0.25} floatIntensity={0.9}>
          <group position={[x, y, z]} rotation={[0, ry, 0]}>
            <RoundedBox args={[w, h, 0.12]} radius={0.08} smoothness={6} castShadow>
              <meshPhysicalMaterial color="#f4f7f8" roughness={0.35} clearcoat={0.6} clearcoatRoughness={0.2} />
            </RoundedBox>
            <mesh position={[0, 0, 0.065]}>
              <planeGeometry args={[w - 0.14, h - 0.14]} />
              <meshPhysicalMaterial map={maps[mi] ?? null} roughness={0.32} clearcoat={0.9} clearcoatRoughness={0.15} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

/* Soft glossy accent blobs for depth */
function Blobs() {
  const blobs: [number, number, number, number, string][] = [
    [-3.6, 1.8, -2.5, 0.5, "#7cc4d8"],
    [3.6, 2, -2.8, 0.4, "#a8d8c8"],
    [0.2, -2.2, -2, 0.6, "#f2d39a"],
  ];
  return (
    <>
      {blobs.map(([x, y, z, s, c], i) => (
        <Float key={i} speed={1.5 + i * 0.4} floatIntensity={1.6}>
          <mesh position={[x, y, z]} scale={s}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshPhysicalMaterial color={c} roughness={0.15} clearcoat={1} clearcoatRoughness={0.1} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 5]} intensity={1.8} />
      <pointLight position={[-5, -3, 3]} intensity={25} color="#ffffff" />
      <Suspense fallback={null}>
        <SwatchPanels />
        <Blobs />
        <Environment resolution={64}>
          <Lightformer intensity={3} position={[0, 5, 2]} scale={[10, 4, 1]} />
          <Lightformer intensity={1.5} color="#bfe8f2" position={[-6, 0, 1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
          <Lightformer intensity={1} color="#cfe0ff" position={[6, -1, 1]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
