import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import CameraView from "../components/CameraView";
import MapView from "../components/MapView";

import EmergencyButton from "../components/EmergencyButton";
import Joystick from "../components/Joystick";
import MiniPreview from "../components/MiniPreview";

import "./Dashboard.css";

const Dashboard = () => {
  const [mainView, setMainView] = useState("map");

  const swapViews = () => {
    setMainView((prev) =>
      prev === "map" ? "camera" : "map"
    );
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <TopBar />

        <div className="content-area">

          {/* Main View */}
          <div className="main-view">
            {mainView === "map" ? (
              <MapView />
            ) : (
              <CameraView />
            )}
          </div>

          {/* Bottom Section */}
          <div className="bottom-controls">

            {/* Preview Window */}
            <MiniPreview onClick={swapViews}>
              {mainView === "map" ? (
                <CameraView />
              ) : (
                <MapView />
              )}
            </MiniPreview>

            {/* Controls */}
            <div className="control-panel">
              <EmergencyButton />
              <Joystick />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;