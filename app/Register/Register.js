"use client";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({});
  const fuChange = (eve) => {
    const { value, name, type, checked } = eve.target;
    // console.log(name,value)

    if (type == "checkbox") {
      var checkedValues = data["Hobboies"] ? data["Hobboies"].split(",") : [];

      if (checked) {
        checkedValues.push(value)[("cric", "fb")];
      } else {
        checkedValues.splice(checkedValues.indexOf(value), 1);
      }
      setData({ ...data, Hobboies: checkedValues.join() });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const fnRegister = async () => {
    try {
      console.log(data);
      const res = await axios.post("http://localhost:2020/std/reg-std", {
        data,
      });
      console.log(res);
    } catch (ex) {
      console.error(ex.message)
    } finally {
    }
  };
  return (
    <div>
      <h3>Resister</h3>

      <p>
        <b>User ID: </b> <input name="uid" onChange={fuChange} />
      </p>
      <p>
        <b>Password: </b>
        <input name="pwd" onChange={fuChange} />
      </p>
      <p>
        <b>
          Gender:{" "}
          <b>
            {" "}
            <input value="M" name="gen" type="radio" onChange={fuChange} />
            Male <input
              value="F"
              name="gen"
              type="radio"
              onChange={fuChange}
            />{" "}
            Female
          </b>{" "}
        </b>
      </p>
      <p>
        <b>
          Hobboies:{" "}
          <b>
            {" "}
            <input
              value="cric"
              name="cric"
              onChange={fuChange}
              type="checkbox"
            />
            Cricket{" "}
            <input value="fb" name="fb" onChange={fuChange} type="checkbox" />{" "}
            Football
          </b>{" "}
        </b>
      </p>

      <p>
        <b>Country:</b>{" "}
        <select name="country" onChange={fuChange}>
          <option>Please Select</option>
          <option>India</option>
          <option>China</option>
          <option>United States</option>
        </select>
      </p>
      <p>
        <b>Address:</b> <textarea name="address" onChange={fuChange}></textarea>
      </p>

      <p>
        <button onClick={fnRegister}>Register</button>
      </p>
    </div>
  );
};

export default Register;
