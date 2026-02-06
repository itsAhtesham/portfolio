"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1500;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      // Create gradient colors from blue to purple
      const t = Math.random();
      colors[i3] = 0.3 + t * 0.4; // R
      colors[i3 + 1] = 0.4 + t * 0.2; // G
      colors[i3 + 2] = 0.9 - t * 0.3; // B
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    points.current.rotation.x = time * 0.02;
    points.current.rotation.y = time * 0.03;

    // Add subtle mouse interaction
    const { pointer } = state;
    points.current.rotation.x += pointer.y * 0.01;
    points.current.rotation.y += pointer.x * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
