import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import CameraView from "../components/CameraView";
import MapView from "../components/MapView";

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

          <div className="main-view">

            {mainView === "map" ? (
              <MapView />
            ) : (
              <CameraView />
            )}

          </div>

          <div className="bottom-controls">

            <div
              className="preview-view"
              onClick={swapViews}
            >

              {mainView === "map" ? (
                <CameraView />
              ) : (
                <MapView />
              )}

            </div>

            <div className="control-panel">

              <button className="emergency-btn">
                EMERGENCY
              </button>

              <div className="joystick">

                <div className="stick"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;