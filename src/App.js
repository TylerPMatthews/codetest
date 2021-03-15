import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
const Styled = styled.div`
  text-align: center;
  margin: 5%;
  .preText {
    color: red;
  }
  .Mui-checked {
    color: red;
  }
`;

//DATA
const values = {
  "01bbb998-af3d-47a4-b0ff-e67d033d80e9": "Luz Ballard",
  "01021494-f157-4183-964c-6b0ddc964ab8": "Corey Johnson",
  "97a2daa4-406b-4b1c-831e-bdfd90b224f2": "Andrew Torres",
  "6256ba85-b59f-40b9-8715-406cc54d7f05": "Nichole Wilson",
  "5c0c746c-ec56-4fb7-8b32-066b64d70611": "Nancy Hall",
  "c103b480-8efb-450f-9141-6a8037de2348": "Agnes Lorenzen",
  "4e0cc3dc-fce9-45d9-85c7-a3ae5cb0ce57": "Donald Hyde",
  "f80af139-5c68-4475-8cb6-ced7e38c6f43": "Dennis Fuller",
  "5073359e-b228-4852-b1a3-3f2edfc8672f": "Francis Hodgkins",
  "9c9a3cc8-044e-43d0-87ff-58a6b44eca53": "David McLain",
};

//App Component
function App() {
  //Set data into state
  const [data, setData] = useState(values);

  const initialFormValues = {
    user: false,
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  //Data to an array
  const result = Object.keys(data).map(function (key) {
    return [key, data[key]];
  });

  //Checked to an array
  const checkToArr = Object.keys(formValues).map(function (key) {
    return [key];
  });

  const change = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <Styled>
      <h2>User Form</h2>
      <form>
        {result.map((item, idx) => {
          return (
            <div key={idx}>
              <label>
                {" "}
                {`${item[1]}`}
                <Checkbox
                  type="checkbox"
                  name={`${item[0]}`}
                  id="checked"
                  onChange={handleChange}
                  value={formValues.user}
                />
              </label>
            </div>
          );
        })}
        <button>Clear</button>
      </form>
      {checkToArr.map((item, idx) => {
        return (
          <div key={idx} className="preText">
            <pre>{item}</pre>
          </div>
        );
      })}
    </Styled>
  );
}

export default App;
