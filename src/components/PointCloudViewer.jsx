import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";

function PointCloud() {
  const pcd = useLoader(
    PCDLoader,
    "/office1.pcd"
  );

  return <primitive object={pcd} />;
}

export default function PointCloudViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={1} />

      <PointCloud />

      <OrbitControls />
    </Canvas>
  );
}