# Insight.IO Dashboard

A React-based implementation of the Insight.IO robotics dashboard as part of the ERIC Robotics Frontend Assignment.

## Overview

This project recreates the Insight.IO dashboard interface shown in the assignment demo. The dashboard is designed to provide operators with a unified view of robot status, camera feeds, and mapping data through a clean and responsive user interface.

The application is being built using React and Vite, with a focus on component-based architecture, maintainability, and performance.

## Features

### Current Progress

* React + Vite project setup completed
* Project structure initialized
* Dashboard component architecture planned
* Local development environment configured

### Planned Features

* Responsive dashboard layout
* Navigation sidebar
* Mission status and system health indicators
* Camera feed panel
* Interactive 3D map visualization
* View switching between camera and map
* Emergency controls and operator actions
* Modern UI matching the provided design reference

## Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)
* CSS3

### Visualization (Planned)

* Three.js
* React Three Fiber
* PCDLoader

### Robotics Integration (Optional / Bonus)

* ROSLib.js
* ROS2 Web Bridge

## Project Structure

```text
src/
│
├── components/
│   ├── Sidebar/
│   ├── TopBar/
│   ├── CameraView/
│   ├── MapView/
│   └── Controls/
│
├── pages/
│   └── Dashboard/
│
├── assets/
│
├── styles/
│
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm

## Design Goals

* Match the provided dashboard reference as closely as possible
* Maintain a clean and modular codebase
* Ensure responsive behavior across screen sizes
* Keep components reusable and easy to extend
* Support future ROS2 integration

## Development Approach

The project follows a component-driven architecture where each major dashboard section is developed as an independent and reusable React component. This approach improves maintainability, readability, and scalability.

The implementation is divided into phases:

1. Core dashboard layout
2. Navigation and status components
3. Camera feed integration
4. 3D map visualization
5. Interaction and control systems
6. UI refinement and responsiveness

## Future Enhancements

* Live ROS2 integration
* Real-time telemetry updates
* Multiple camera feeds
* Mission history and analytics
* Advanced map controls
* Point cloud streaming support

## Assignment Information

This project is being developed as part of the ERIC Robotics technical assessment assignment.

## Author

Vaibhavi Iratkar
