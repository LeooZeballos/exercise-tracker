import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, ExerciseList, EditExercise, CreateExercise, CreateUser } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
