import "./Chart.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

let imjusttakingexample = [
  {
    image:
      "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-cute-cartoon-burger-with-food-elements-elementlovely-foodcartoon-foodhand-png-image_613521.jpg",
    name: "burger",
    carlories: 560,
  },
];

export default function Chart() {

  const [elements, setelements] = useState([]);
  const [selectedCell, setSelectedCell] = useState("");

  let occupiedCells = []


  const openSearch = () => {
    document.getElementById("myOverlay").style.display = "block";
  };
  const closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
    window.location.reload();
  };
  const user = useSelector((state) => state.user);
  const foodList = user.message;
  console.log(foodList);
  const generatetable = () => {
    let ele = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 7; j++) {
        if(occupiedCells.includes(`${i}${j}`)){
          let image = React.createElement(
            "img",
            {
              src: "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-cute-cartoon-burger-with-food-elements-elementlovely-foodcartoon-foodhand-png-image_613521.jpg",
              style: {
                width:"90px",
                height:"90px",
              }
            }
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
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
              },
            },
            image,
            "burger"
            
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
  useEffect(() => {
    generatetable();
  }, []);
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
              {foodList.length != 0 ?
                foodList.map((food) => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        occupiedCells.push(selectedCell);
                        console.log(occupiedCells);
                        console.log(selectedCell);
                        console.log(food);
                      }}
                      style={{ color: "black" }}
                    >
                      {food.title}
                    </Dropdown.Item>
                  );
                }):""}
            </DropdownButton>
          </form>
          <div className="searchresult">
            <img src={imjusttakingexample[0].image} alt="img"></img>
            <div className="detailsfood">
              <p>{imjusttakingexample[0].name}</p>
              <p>carlories : {imjusttakingexample[0].carlories}</p>
            </div>
          </div>
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
      <div className="container">{elements}</div>
      <button className="start">Start</button>
    </div>
  );
}
