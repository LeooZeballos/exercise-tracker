import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CreateExercise.css';

const CreateExercise = () => {
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState(["Loading..."]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
        setUser(res.data[0].username);
      }
      setLoading(false);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: user,
      description: description,
      duration: duration,
      date: date,
    };

    axios.post("http://localhost:5000/exercises", exercise).then((res) => {
      console.log(res.data);
    });

    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>User: </label>
          <select
            required
            className="form-control"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>{user}</option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
