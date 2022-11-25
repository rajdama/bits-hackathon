import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckIcon from "@mui/icons-material/Check";
import "./Calender.css";
import { useSelector } from 'react-redux';
import { getChart } from "../actions/user_actions";
const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
  const [dayprog, setdayprog] = useState([false,false, false, false]);
  const user = useSelector((state) => state.auth);
  const opt = useSelector((state) => state.user.chart);


  const diet = {
    "Monday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"", 
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    },
    "Tuesday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"",
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    },
    "Wednesday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"",
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    },
    "Thursday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"",
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    },
    "Friday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"",
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    },
    "Saturday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"",
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    },
    "Sunday":{
      "breakfast":{
        "img":"",
        "name":"",
        "calories":0
      },
      "lunch":{
        "img":"",
        "name":"",
        "calories":0
      },
      "evening-snack":{
        "img":"",
        "name":"",
        "calories":0
      },
      "dinner":{
        "img":"",
        "name":"",
        "calories":0
      }
    }
  }
  const d = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
  ]
  const makeit = () => {
    const dayget = {
      '0':'Monday','1':'Tuesday','2':'Wednesday','3':'Thursday','4':'Friday','5':'Saturday','6':'Sunday'
    }
    const mealget = {
      '0':'breakfast','1':'lunch','2':'evening-snack','3':'dinner'
    }
    opt.forEach((item) => {
      item.diet.forEach((item2) => {
        let i = item2["cell"];
        console.log(dayget[i[1]],mealget[i[0]]);
        diet[dayget[i[1]]][mealget[i[0]]]["img"] = item2["food"]["image"];
        diet[dayget[i[1]]][mealget[i[0]]]["name"] = item2["food"]["title"];
        diet[dayget[i[1]]][mealget[i[0]]]["calories"] = item2["food"]["calories"];
      })
    })
  }
  makeit();
  console.log('diet =>',diet);
  console.log("user => ",user);
  console.log("din ==> " , d[value.getDay()]);
  return (
    <div ClassName = "cont">
    <h1 className = "title">TrackYourFitness</h1>
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
          document.getElementsByClassName("breakfast")[0].classList.remove("change-color");
          document.getElementsByClassName("lunch")[0].classList.remove("change-color");
          document.getElementsByClassName("snack")[0].classList.remove("change-color");
          document.getElementsByClassName("dinner")[0].classList.remove("change-color");
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
        <div className="block breakfast">
          <p style = {{textDecoration:"underline",fontSize:30}}>Breakfast</p>
          <img src={diet[d[value.getDay()]]["breakfast"]["img"]} alt="img"></img>
          <p>{diet[d[value.getDay()]]["breakfast"]["name"]}</p>
          <p>Calories : {diet[d[value.getDay()]]["breakfast"]["calories"]}</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[0] = true;
              setdayprog(a);
              document.getElementsByClassName("breakfast")[0].classList.add("change-color");
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            &#10004;
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[0] = false;
              setdayprog(a);
              document.getElementsByClassName("breakfast")[0].classList.remove("change-color");
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
        <div className="block lunch">
          <p style = {{textDecoration:"underline",fontSize:30}}>Lunch</p>
          <img src={diet[d[value.getDay()]]["lunch"]["img"]} alt="img"></img>
          <p>{diet[d[value.getDay()]]["lunch"]["name"]}</p>
          <p>Calories : {diet[d[value.getDay()]]["lunch"]["calories"]}</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[1] = true;
              setdayprog(a);
              document.getElementsByClassName("lunch")[0].classList.add("change-color");
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            &#10004;
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[1] = false;
              setdayprog(a);
              document.getElementsByClassName("lunch")[0].classList.remove("change-color");
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
        <div className="block snack">
          <p style = {{textDecoration:"underline",fontSize:30}}>Snack</p>
          <img src={diet[d[value.getDay()]]["evening-snack"]["img"]} alt="img"></img>
          <p>{diet[d[value.getDay()]]["evening-snack"]["name"]}</p>
          <p>Calories : {diet[d[value.getDay()]]["evening-snack"]["calories"]}</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[2] = true;
              setdayprog(a);
              document.getElementsByClassName("snack")[0].classList.add("change-color");
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            &#10004;
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[2] = false;
              setdayprog(a);
              document.getElementsByClassName("snack")[0].classList.remove("change-color");
            }}
            style={{ backgroundColor: "red", marginRight: 3 }}
          >
            X
          </button>
        </div>
        <div className="block dinner">
          <p style = {{textDecoration:"underline",fontSize:30}}>Dinner</p>
          <img src={diet[d[value.getDay()]]["dinner"]["img"]} alt="img"></img>
          <p>{diet[d[value.getDay()]]["dinner"]["name"]}</p>
          <p>Calories : {diet[d[value.getDay()]]["dinner"]["calories"]}</p>
          <button
            onClick={() => {
              let a = dayprog;
              a[3] = true;
              setdayprog(a);
              document.getElementsByClassName("dinner")[0].classList.add("change-color");
            }}
            style={{ backgroundColor: "lightgreen", marginRight: 3 }}
          >
            &#10004;
          </button>
          <button
            onClick={() => {
              let a = dayprog;
              a[3] = false;
              setdayprog(a);
              document.getElementsByClassName("dinner")[0].classList.remove("change-color");
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
          console.log(diet[d[value.getDay()]]["breakfast"]["img"]);
        }}
        style = {{
          marginTop:40,
          height:60,
          width:100,
          backgroundColor:"lightcoral",
          marginBottom:40,
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