import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TopBar from "./components/topBar"; // Importing TopBar component
import Dashboard from "./components/dashboard"; // Importing Dashboard component
import AddUsers from "./components/addUsers"; // Importing AddUsers component
import EditUsers from "./components/editUsers"; // Importing EditUsers component

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the application with the Router component */}
      <TopBar />{" "}
      {/* Render the TopBar component at the top of the application */}
      <Routes>
        {" "}
        {/* Define the routes for the application */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Route to the Dashboard component when path is /dashboard */}
        <Route path="/add-users" element={<AddUsers />} />{" "}
        {/* Route to the AddUsers component when path is /add-users */}
        <Route path="/edit-users/:id" element={<EditUsers />} />{" "}
        {/* Route to the EditUsers component when path is /edit-users/:id */}
        <Route path="*" element={<Navigate to="/Dashboard" />} />{" "}
        {/* Default route to redirect to Dashboard if no matching route */}
      </Routes>
    </Router>
  );
}

export default App;
