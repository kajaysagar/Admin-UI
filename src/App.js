import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";

export const StudentContext = React.createContext();

function App() {
  let data1 = {
    earnings: "30,000",
    annual: "360000",
    tasks: "20",
    pending: 26,
  };
  let [data, setData] = useState([
    {
      name: "Raj",
      degree: "BE",
      dept: "Electrical",
      mobile: "123456",
      email: "raj@gmail.com",
    },
    {
      name: "Ram",
      degree: "BE",
      dept: "Electrical",
      mobile: "123456",
      email: "raj@gmail.com",
    },
  ]);
  return (
    <>
      <Router>
        <StudentContext.Provider value={{ data, setData }}>
          <div style={{ display: "grid", gridTemplateColumns: "17% 83%" }}>
            <div>
              <SideBar />
            </div>
            <div>
              <Routes>
                <Route
                  path="/dashboard"
                  element={<Dashboard value={data1} />}
                />

                <Route path="/all-students" element={<AllStudents />} />
                <Route path="/add-students" element={<AddStudent />} />
              </Routes>
            </div>
          </div>
        </StudentContext.Provider>
      </Router>
    </>
  );
}

export default App;
