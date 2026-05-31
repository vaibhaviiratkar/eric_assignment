import "./CameraView.css";
import demoVideo from "../assets/cameraview.mp4";

const CameraView = () => {
  return (
    <video
      className="camera-video"
      src={demoVideo}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default CameraView;