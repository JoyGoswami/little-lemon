import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingForm() {
  const [values, setValues] = useState({
    date: "",
    time: "",
    numOfGuest: "",
    occasion: "",
  });

  const times = [
    "Choose Time",
    "10.00 am",
    "11.00 am",
    "12.00 am",
    "01.00 pm",
    "02.00 am",
    "03.00 am",
    "04.00 am",
    "05.00 am",
    "06.00 am",
    "07.00 am",
    "08.00 am",
    "09.00 am",
    "10.00 am",
  ];

  function options(vals) {
    return vals.forEach((val) => {
      <option value={val}>{val}</option>;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hi");
  }
  function onChangeListener(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="date">Choose Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={values.date}
          onChange={onChangeListener}
        />
      </div>
      <div className="field">
        <label htmlFor="time">Choose Time</label>
        <select
          id="time"
          name="time"
          onChange={onChangeListener}
          defaultValue={"DEFAULT"}
        >
          {/* <option disabled value="DEFAULT">
            Choose Time
          </option> */}
          {/* <option value="1">1</option>
          <option value="2">2</option> */}
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="numOfGuest">Number of Guests</label>
        <select id="numOfGuest" name="numOfGuest" onChange={onChangeListener}>
          {/* <option disabled value="DEFAULT">
            Choose Time
          </option> */}
          {/* <option value="1">1</option>
          <option value="2">2</option> */}
          {times.map((time, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={onChangeListener}
          defaultValue={"DEFAULT"}
        >
          <option disabled value={"DEFAULT"}>
            Select an Occasion
          </option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <Link to="/confirm">
        <input className="submit-btn" type="submit" value="Reserve a Table" />
      </Link>
    </form>
  );
}
