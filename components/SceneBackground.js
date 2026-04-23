"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

export default function SceneBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 38 }}
      >
        <color attach="background" args={["#0A0C10"]} />
        <fog attach="fog" args={["#0A0C10", 8, 22]} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 6, 4]} intensity={0.8} color="#E6E3DB" />
        <directionalLight position={[-6, -3, 2]} intensity={0.4} color="#7FE7D4" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#C9A86A" />

        <Suspense fallback={null}>
          <NodeField />
        </Suspense>

        <EffectComposer>
          <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.4} luminanceSmoothing={0.25} />
          <ChromaticAberration offset={[0.0005, 0.0007]} blendFunction={BlendFunction.NORMAL} />
          <Noise premultiply opacity={0.04} blendFunction={BlendFunction.OVERLAY} />
          <Vignette eskil={false} offset={0.25} darkness={0.85} />
        </EffectComposer>

        <ScrollCamera />
      </Canvas>
    </div>
  );
}

function ScrollCamera() {
  const { camera } = useThree();
  const state = useRef({ y: 0, mx: 0, my: 0 });

  useMemo(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      state.current.y = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
    };
    const onMouse = (e) => {
      state.current.mx = (e.clientX / window.innerWidth) * 2 - 1;
      state.current.my = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  useFrame(() => {
    const t = state.current.y;
    const targetZ = 6 - t * 3.5;
    const targetX = state.current.mx * 0.3;
    const targetY = -state.current.my * 0.25 + t * 0.4;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function NodeField() {
  const points = useRef();
  const { geometry, material } = useMemo(() => {
    const count = 1800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      positions[i * 3 + 2] = r * Math.cos(phi) - 2;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const m = new THREE.PointsMaterial({
      color: new THREE.Color("#E6E3DB"),
      size: 0.02,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return { geometry: g, material: m };
  }, []);

  useFrame((st) => {
    if (points.current) {
      points.current.rotation.y = st.clock.getElapsedTime() * 0.02;
    }
  });

  return <points ref={points} geometry={geometry} material={material} />;
}
