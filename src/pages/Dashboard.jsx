import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <div className="content-area">

          <div className="main-view">
            <video 
              autoPlay 
              loop 
              muted
              src="D:\apnaCollege\eric_assignment\eric_assignment\src\assets\mapview.mp4"
            />
            <TopBar />
            
            <div className="bottom-controls">
              <div className="preview-view">
                Click to enter camera view
              </div>

              <div className="control-panel">
                <button className="emergency-btn">
                  EMERGENCY
                </button>

                <div className="joystick">
                  ⊙
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
