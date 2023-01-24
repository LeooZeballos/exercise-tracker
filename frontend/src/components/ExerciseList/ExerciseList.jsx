import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ExerciseList.css";
import api from "../../utils";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  const deleteExercise = (id) => {
    axios.delete(api + "/exercises/" + id).then((res) => {
      console.log(res.data);
    });
    setExercises(exercises.filter((el) => el._id !== id));
  };

  useEffect(() => {
    axios.get(api + "/exercises").then((res) => {
      if (res.data.length > 0)
        setExercises(res.data.map((exercise) => exercise));
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <div className="title">
        <h3>Logged Exercises</h3>
        <Link to="/create" className="text-white btn btn-primary btn-sm">
          Create Exercise Log
        </Link>
      </div>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => {
            return (
              <tr className="exercise-item" key={exercise._id}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration} min</td>
                <td>{exercise.date.substring(5,7) + "/" + exercise.date.substring(8, 10) + "/" + exercise.date.substring(0,4)}</td>
                <td className="table-btns">
                  <Link className="btn btn-warning btn-sm" to={"/edit/" + exercise._id}>edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteExercise(exercise._id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
