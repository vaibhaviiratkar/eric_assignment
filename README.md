# Insight.IO Dashboard

A React-based implementation of the Insight.IO robotics dashboard developed as part of the ERIC Robotics Frontend Assignment.

---

## Overview

This project recreates the Insight.IO dashboard interface shown in the assignment demo. The dashboard provides operators with a centralized interface for monitoring robot status, visualizing mapping data, and viewing camera feeds.

The implementation focuses on responsive design, component-based architecture, maintainability, and smooth user interaction.

---

## Features

### Dashboard UI

* Responsive dashboard layout
* Sidebar navigation panel
* Mission status display
* System health indicators
* AUTO/MANUAL control section
* Emergency control interface

### Camera View

* Video-based camera feed visualization
* Main view and preview mode support
* Responsive video rendering

### 3D Map Visualization

* Interactive 3D visualization using Three.js
* Point cloud (.pcd) support
* Orbit controls for navigation
* Expandable architecture for future ROS integration

### User Interaction

* Swap between Camera View and Map View
* Responsive controls
* Modern dashboard styling
* Smooth UI transitions

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)
* CSS3

### 3D Visualization

* Three.js
* React Three Fiber
* React Three Drei
* PCDLoader

### Development Tools

* Git
* GitHub
* npm

---

## Project Structure

```text
src/
│
├── assets/
│   ├── demo.mp4
│
├── components/
│   ├── Sidebar.jsx
│   ├── TopBar.jsx
│   ├── CameraView.jsx
│   ├── MapView.jsx
│   ├── PointCloudViewer.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
│
public/
└── sample.pcd
```

---

## Installation

### Prerequisites

* Node.js (18+ recommended)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

## Setup

Clone the repository:

```bash
git clone https://github.com/vaibhaviiratkar/eric_assignment.git
```

Navigate to the project folder:

```bash
cd eric_assignment
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application runs entirely on a local development server provided by Vite.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Architecture & Design Decisions

### React Component Architecture

The dashboard is organized into reusable React components to improve maintainability and scalability.

Major UI sections such as:

* Sidebar
* Top Navigation
* Camera View
* Map View
* Control Panel

are implemented as independent components.

### State Management

React state is used to manage dashboard interactions, including:

* Active view selection
* Camera/Map swapping
* UI state updates

### 3D Visualization

Three.js and React Three Fiber were selected to provide an efficient and extensible solution for rendering point cloud data in the browser.

This approach enables future integration with:

* ROS2
* ROSBridge
* ROSLib.js
* Live robot telemetry

without significant architectural changes.

---

## Self Hosting

The application is self-hosted locally using Vite's development server.

To run the project:

```bash
npm install
npm run dev
```

No external hosting platform is required.

---

## Future Improvements

Given additional development time, the following enhancements could be implemented:

* ROS2 integration using ROSLib.js
* Live robot telemetry streaming
* Real-time camera feeds
* Dynamic mission management
* Advanced point cloud controls
* Authentication and user roles
* Historical mission analytics

---

## Screenshots and video 

screen shot and video are in demo folder.


## Assignment Information

This project was developed as part of the ERIC Robotics technical assessment assignment.

The objective was to recreate the Insight.IO dashboard interface while maintaining a clean, modular, and scalable codebase.

---

## Author

Vaibhavi Iratkar
mob no: 7558751744
email: vaibhaviiratkar@gmail.com
