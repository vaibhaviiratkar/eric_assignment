import PointCloudViewer from "./PointCloudViewer";

export default function MapView() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <PointCloudViewer />
    </div>
  );
}