"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Trail } from "@react-three/drei";
import { useMemo, useRef, type RefObject } from "react";
import { AdditiveBlending, Color, type Group, type Mesh } from "three";
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

interface PointerRef {
  x: number;
  y: number;
}

const STAR_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const STAR_FRAGMENT_SHADER = `
  uniform vec3 color;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5;
    float d = length(p);

    float glow = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.14, 0.0, d);

    // Four-point diffraction spikes, like a twinkling star
    float spikeX = smoothstep(0.02, 0.0, abs(p.y)) * smoothstep(0.5, 0.0, abs(p.x));
    float spikeY = smoothstep(0.02, 0.0, abs(p.x)) * smoothstep(0.5, 0.0, abs(p.y));
    float spikes = max(spikeX, spikeY);

    float alpha = clamp(core * 1.2 + glow * 0.5 + spikes * 0.55, 0.0, 1.0);
    gl_FragColor = vec4(color, alpha);
  }
`;

function SparkleStar({ size = 0.24, color = "#eef2ff" }: { size?: number; color?: string }) {
  const uniforms = useMemo(() => ({ color: { value: new Color(color) } }), [color]);

  return (
    <mesh>
      <planeGeometry args={[size, size]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={STAR_VERTEX_SHADER}
        fragmentShader={STAR_FRAGMENT_SHADER}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  );
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
    <Trail width={0.6} length={5} color="#a5b4fc" attenuation={(t) => t * t * t} decay={3}>
      <group ref={targetRef}>
        <SparkleStar />
      </group>
    </Trail>
  );
}

function NightSky({ pointer }: { pointer: RefObject<PointerRef> }) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Layered starfield with twinkling and varying sizes */}
        <Stars radius={70} depth={40} count={2800} factor={3} saturation={0.2} fade speed={1.2} />
        <Stars radius={35} depth={20} count={600} factor={5} saturation={0.5} fade speed={1.8} />
      </group>
      <CometCursor pointer={pointer} />
    </>
  );
}

export default function HeroCanvas({ pointer }: { pointer: RefObject<PointerRef> }) {
  const { theme } = useTheme();

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.0} />
      {theme === "dark" ? <NightSky pointer={pointer} /> : <FloatingShape />}
    </Canvas>
  );
}

