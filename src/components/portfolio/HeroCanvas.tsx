"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Trail } from "@react-three/drei";
import { useRef, type RefObject } from "react";
import { Vector3, type Group, type Mesh } from "three";
import { useTheme } from "@/components/ThemeProvider";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>
    </Float>
  );
}

const COMET_START = new Vector3(9, 5, -2);
const COMET_END = new Vector3(-9, -4.5, -2);
const COMET_STREAK_SECONDS = 3.5;
const COMET_PAUSE_SECONDS = 9;

function Comet() {
  const cometRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!cometRef.current) return;
    const cycle = COMET_STREAK_SECONDS + COMET_PAUSE_SECONDS;
    const t = clock.getElapsedTime() % cycle;
    if (t > COMET_STREAK_SECONDS) {
      cometRef.current.visible = false;
      return;
    }
    cometRef.current.visible = true;
    cometRef.current.position.lerpVectors(COMET_START, COMET_END, t / COMET_STREAK_SECONDS);
  });

  return (
    <Trail width={2.5} length={7} color="#c4b5fd" attenuation={(w) => w * w}>
      <mesh ref={cometRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#f5f3ff" />
      </mesh>
    </Trail>
  );
}

interface PointerRef {
  x: number;
  y: number;
}

function CometCursor({ pointer }: { pointer: RefObject<PointerRef> }) {
  const targetRef = useRef<Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (!targetRef.current) return;
    const targetX = pointer.current.x * (viewport.width / 2);
    const targetY = pointer.current.y * (viewport.height / 2);
    targetRef.current.position.x += (targetX - targetRef.current.position.x) * 0.08;
    targetRef.current.position.y += (targetY - targetRef.current.position.y) * 0.08;
  });

  return (
    <Trail width={2.5} length={5} color="#c7d2fe" attenuation={(t) => t * t} decay={3}>
      <group ref={targetRef}>
        <mesh>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#eef2ff" />
        </mesh>
      </group>
    </Trail>
  );
}

function NightSky({ pointer }: { pointer: RefObject<PointerRef> }) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Stars radius={60} depth={30} count={2200} factor={2.5} saturation={0} fade speed={0.6} />
        <Stars radius={30} depth={15} count={400} factor={4} saturation={0} fade speed={1} />
        <Comet />
      </group>
      <CometCursor pointer={pointer} />
    </>
  );
}

export default function HeroCanvas({ pointer }: { pointer: RefObject<PointerRef> }) {
  const { theme } = useTheme();

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      {theme === "dark" ? <NightSky pointer={pointer} /> : <FloatingShape />}
    </Canvas>
  );
}
