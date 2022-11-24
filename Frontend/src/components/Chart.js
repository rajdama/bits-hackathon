import "./Chart.css";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {occupiedCells} from "../actions/user_actions"
import {makeChart} from "../actions/user_actions"
import {getChart} from "../actions/user_actions"
import { Navigate } from 'react-router-dom'

export default function Chart() {

  const [elements, setelements] = useState([]);
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedFood, setSelectedFood] = useState({});
  const dispatch = useDispatch();


  const openSearch = () => {
    document.getElementById("myOverlay").style.display = "block";
  };
  const closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
  };
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getChart(auth.user._id));
  }, [])
  let chart = []
  let foodlist
  if (user.message) {
    foodlist = user.message;
  }
  if(user.chart){
    if(user.chart.length !=0){
      user.chart.map((item) => {
        return (item.diet.map((diet)=>{
               chart.push(diet)
         }))
        })
    }
    }
    
  const generatetable = () => {
    let ele = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 7; j++) {
        let occupiedCellsInfo = []
       occupiedCellsInfo = user.occupiedCells.length!=0 ? user.occupiedCells.filter((item) => {return item.cell == `${i}${j}`}) : occupiedCellsInfo
       if(occupiedCellsInfo.length != 0){

          let image = React.createElement(
            "img",
            {
              src: `${occupiedCellsInfo[0].food.image}`,
              style: {
                width:"90px",
                height:"90px",
                marginTop:"5px",
                borderRadius:"50%",
                margin:"auto"
              }
            }
          )

          let calorie = React.createElement(
            "p",
            {
            style: {
              fontSize: "12px",
            }
            },
            `calories: ${occupiedCellsInfo[0].food.calories}`
          )

          let title = React.createElement(
            "p",
            {
              style: {
                fontSize: "12px",
                display: "flex",
                flexDirection: "column",
              }
            },
            occupiedCellsInfo[0].food.title,
            calorie
          )
  
          let cell = React.createElement(
            "div",
            {
              className: "class",
              style: {
                color: "black",
                backgroundColor: "lightgrey",
                height: "auto",
                border: "solid 1px",
                display: "flex",
                flexDirection: "column",
                alignItem: "center",
                justifyContent: "center",
              },
            },
            image,
            title
            
          );
          ele.push(cell);
        }
        else{
          let addbtn = React.createElement(
            "button",
            {
              className: `${i}${j}`,
              style: {
                backgroundColor: "lightgreen",
                color: "white",
                height: "30px",
                width: "30px",
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 20,
              },
              onClick: () => {
                setSelectedCell(`${i}${j}`);             
                openSearch();
              },
            },
            "+"
          );
          let cell = React.createElement(
            "div",
            {
              className: "class",
              style: {
                color: "black",
                backgroundColor: "lightgrey",
                height: "auto",
                border: "solid 1px",
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
              },
            },
            addbtn
            
          );
          ele.push(cell);
        }
      }
    }
    setelements(ele);
    console.log(elements);
  };
  const generateFoodList = () => {
    let ele = []
    for(let i=0; i<4; i++){
      for(let j=0; j<7; j++){
        const currentItem = chart.filter((item) => {return item.cell == `${i}${j}`})
        let image = React.createElement(
          "img",
          {
            src: `${currentItem[0].food.image}`,
            style: {
              width:"90px",
              height:"90px",
              marginTop:"5px",
              borderRadius:"50%",
              margin:"auto"
            }
          }
        )

        let calorie = React.createElement(
          "p",
          {
          style: {
            fontSize: "12px",
          }
          },
          `calories: ${currentItem[0].food.calories}`
        )

        let title = React.createElement(
          "p",
          {
            style: {
              fontSize: "12px",
              display: "flex",
              flexDirection: "column",
            }
          },
          currentItem[0].food.title,
          calorie
        )

        let cell = React.createElement(
          "div",
          {
            className: "class",
            style: {
              color: "black",
              backgroundColor: "lightgrey",
              height: "auto",
              border: "solid 1px",
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
            },
          },
          image,
          title
          
        );
        ele.push(cell);
      }
    }
    setelements(ele);
  }
  useEffect(() => {
    if(user.chart.length ==0){
        generatetable();
      }
      else{
        generateFoodList();
      }
  }, []);

  if(user.chart.length ==0 && user.message.length ==0){
    return <Navigate to={"/goal"} />
  }

  return (
    <div>
      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          ×
        </span>
        <div className="overlay-content">
          <form>
            <DropdownButton
              variant={"primary"}
              id="dropdown-basic-button"
              title="Select Food"
            >
              {foodlist ?
                foodlist.map((food) => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        setSelectedFood(food)
                      }}
                      style={{ color: "black" }}
                    >
                      {food.title}
                    </Dropdown.Item>
                  );
                }):""}
            </DropdownButton>
          </form>
          {
            selectedFood.title &&
            <>
          <div className="searchresult">
            <img src={selectedFood.image} alt="img"></img>
            <div className="detailsfood">
              <p>{selectedFood.title}</p>
              <p>carlories : {selectedFood.calories}</p>
            </div>
          </div>
          <button onClick={()=>{
            dispatch(occupiedCells({cell:selectedCell,food:selectedFood}))
            window.location.reload();
          }} style={{marginLeft:"500px",marginTop:"10px"}}>Save</button>
            </>
          }
        </div>
      </div>
      <div className="Header">Make your own chart</div>
      <div className="Daysname">
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>

      <div className="container mb-5">{elements}</div>
      {
        !user.chart &&  <button onClick={()=>{
        
          dispatch(makeChart(user.occupiedCells,auth.user._id))
          }} className="start my-5">Make Chart</button>
      }

    </div>
  );
}
