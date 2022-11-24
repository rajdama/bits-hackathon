import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckIcon from "@mui/icons-material/Check";
import "./Calender.css";
const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
  const [dayprog, setdayprog] = useState([false, false, false, false]);

  return (
    <div ClassName = "cont">
    <h1>TrackYourFitness</h1>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // mask='____/__/__'
        variant="static"
        orientation="landscape"
        value={value}
        disableFuture
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue.toLocaleDateString());
        }}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <CheckIcon color="red" /> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
      <div className="meal-chart">
        <div className="block">
          <p>Breakfast</p>
          <img src="" alt="img"></img>
          <p>name</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[0] = true;
              setdayprog(a);
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            V
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[0] = false;
              setdayprog(a);
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
        <div className="block">
          <p>Lunch</p>
          <img src="" alt="img"></img>
          <p>name</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[1] = true;
              setdayprog(a);
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            V
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[1] = false;
              setdayprog(a);
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
        <div className="block">
          <p>Snack</p>
          <img src="" alt="img"></img>
          <p>name</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[2] = true;
              setdayprog(a);
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            V
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[2] = false;
              setdayprog(a);
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
        <div className="block">
          <p>Dinner</p>
          <img src="" alt="img"></img>
          <p>name</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[3] = true;
              setdayprog(a);
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            V
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[3] = false;
              setdayprog(a);
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          if(dayprog[0] === true &&
             dayprog[1] === true &&
             dayprog[2] === true &&
             dayprog[3] === true){
             let a = [...highlightedDays, value.getDate()];
            setHighlightedDays(a);
          }
        }}
        style = {{
          marginTop:40,
          height:60,
          width:100,
          backgroundColor:"Coral",
          Color:"White",
          fontSize:20
        }}
      >
        Mark Me
      </button>
    </LocalizationProvider>
    </div>
  );
};

export default Calendar;
