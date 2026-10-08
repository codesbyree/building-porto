"use client";

import { Spinner } from "@/components/ui/spinner";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, useGLTF, Center, useProgress, Environment } from "@react-three/drei";
import * as THREE from "three";

import {
  ToolsWidget,
  LogoWidget,
  EnergyConsumptionWidget,
  SmartLightingWidget,
  HvacNodeWidget,
  AirQualityWidget,
  BuildingTotalCostWidget,
  BuildingComfortRateWidget,
} from "@/features/widgets/components";
import { WidgetIsland } from "@/components/ui/widget";

const MODEL_PATH = "/models/low_rise_wall_to_wall_office_building-opt.glb";
const CAMERA_ANGLE_DEG = 80;
const TARGET_Y = -7;
const CAM_DISTANCE = 30;

const LOCKED_POLAR_ANGLE = (CAMERA_ANGLE_DEG * Math.PI) / 180;
const horizontalRadius = CAM_DISTANCE * Math.sin(LOCKED_POLAR_ANGLE);
const initialCamX = horizontalRadius * Math.SQRT1_2;
const initialCamY = TARGET_Y + CAM_DISTANCE * Math.cos(LOCKED_POLAR_ANGLE);
const initialCamZ = horizontalRadius * Math.SQRT1_2;

function BuildingModel() {
  const { scene } = useGLTF(MODEL_PATH);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group position={[0, -14, 0]} rotation={[0, -2.37, 0]}>
      <Center top>
        <primitive object={scene} scale={0.005} />
      </Center>
    </group>
  );
}

function CustomLoader() {
  const { active } = useProgress();
  if (!active) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 flex-col gap-2">
      <Spinner />
      <span className="text-gray-800 dark:text-gray-200 text-sm font-medium whitespace-nowrap">Loading 3D Model</span>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);

export default function MonitoringPage() {
  return (
    <main className="w-dvw h-dvh bg-gray-200 dark:bg-gray-700 relative z-0 overflow-hidden">
      <WidgetIsland position="left">
        <LogoWidget />
        <EnergyConsumptionWidget />
        <SmartLightingWidget />
        <HvacNodeWidget />
      </WidgetIsland>

      <WidgetIsland position="right">
        <ToolsWidget />
        <BuildingTotalCostWidget />
        <BuildingComfortRateWidget />
        <AirQualityWidget />
      </WidgetIsland>

      <CustomLoader />

      <Canvas
        shadows
        camera={{
          position: [initialCamX, initialCamY, initialCamZ],
          fov: 45,
        }}
        onCreated={({ camera }) => {
          camera.lookAt(0, TARGET_Y, 0);
        }}
        dpr={[1, 1.5]}
      >
        <Environment preset="city" environmentIntensity={0.6} />
        <hemisphereLight args={["#ffffff", "#334155", 0.2]} />

        <directionalLight
          castShadow
          position={[80, 50, 20]}
          intensity={5}
          color="#fffbeb"
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-25}
          shadow-camera-right={25}
          shadow-camera-top={25}
          shadow-camera-bottom={-25}
          shadow-camera-near={1}
          shadow-camera-far={150}
          shadow-bias={-0.0005}
        />

        <Suspense fallback={null}>
          <PresentationControls global cursor speed={1.5} zoom={1} polar={[0, 0]} azimuth={[-Infinity, Infinity]}>
            <BuildingModel />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </main>
  );
}
