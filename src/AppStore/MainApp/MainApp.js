import React, { useState } from "react";

import GamesApp from "../Games/GamesApp"
import NewsApp from "../News/NewsApp";
import FoodApp from "../Food/FoodApp";
import SocialApp from "../Social/SocialApp";
import "./MainApp.css"


const tablist = [
  { tabId: "social", displaytext: "Social" },
  { tabId: "games", displaytext: "Games" },
  { tabId: "news", displaytext: "News" },
  { tabId: "food", displaytext: "Food" },
];

const games = [
  { id: 1, info:"games", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i4aBkgPY1_zE2MGZ5ww8JSzqnr645hhRcg&s", nameApp: "Crossy Road" },
  { id: 2, info:"games", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yV8FZ2QXlrZUVMr11Ltabc7-tXnjWoieYQ&s", nameApp: "Hill Climb 2" },
  { id: 3, info:"games", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaA8N12lOAme9aXvNXQphIcU55Z3eXVn56g&s", nameApp: "Angry Birds" },
  { id: 4, info:"games", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zbVQIvKZtPtnUQhTdg7Bw4ud6chUv1ovKA&s", nameApp: "Super Chef" },
  
];
const news = [
  { id: 1, info:"news", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQhp8lKTtXVoBBh4EOBkINklzy1ok8mfDFQ&s", nameApp: "Inshorts" },
  { id: 2, info:"news", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLtDDUSa-hQODoabveb4Ue0UpwiMppfZayw&s%27", nameApp: "SmartNews" },
  { id: 3, info:"news", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgB3nng010xpHmXszDUba-sxeRWZaDnDNycw&s%27", nameApp: "Way2News" },
  { id: 4, info:"news", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYYqbfEmedHTTPN31nW9bIgFVkAPhQydeZA&s%27", nameApp: "Google News'" },

];
const social = [
  { id: 1, info:"social", url: "https://img.icons8.com/color/96/facebook.png", nameApp: "Facebook" },
  { id: 2, info:"social", url: "https://img.icons8.com/color/96/instagram-new.png", nameApp: "Instagram" },
  { id: 3, info:"social", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", nameApp: "LinkedIn" },
  { id: 4, info:"social", url: "https://img.icons8.com/color/96/whatsapp.png", nameApp: "Whatsapp" },
];
const food = [
  { id: 1, info:"food", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png", nameApp: "Zomato" },
  { id: 2, info:"food", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png", nameApp: "Swiggy" },
  { id: 3, info:"food", url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg", nameApp: "Domino's Pizza" },
  { id: 4, info:"food", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP75kjM0kdQp8Fj_yllUhcZ-p2XfKC4MZSFQ&s%27", nameApp: "Instacarts" },
 
];

function MainApp() {
  const [data, setdata] = useState("Social");

  const changefun = (tabId) => {
    setdata(tabId);
    console.log("tab", data);
  };;

  const [search,setsearch] = useState("")
  const [active] =useState({social,games,news,food});

  const changefunc =(e)=>{
    setsearch(e.target.value)
     console.log("search",search)
  }
 
 
  const result2 =active[data]?.filter(item =>
    item.nameApp.toLowerCase().includes(search.toLowerCase())
  )||[];

  return (
    <div>
      <div className="mainapp">
        <h1>App Store</h1>
        <input type="text" onChange={changefunc} />
        <br />
        <ul className="list">
        {tablist.map((item) => (
          <button key={item.tabId} onClick={() => changefun(item.tabId)}>
            {item.displaytext}
          </button>
        ))}
        </ul>
       
        <ul className="data">
        {result2.map((val)=>(
          <div key={val.id}>
          <FoodApp val ={val}/>,
          <GamesApp  val={val} />,
          <SocialApp  val ={val}/>,
          <NewsApp  val ={val}/>
          </div>
        ))}
        
        </ul>
      </div>
    </div>
  );
}

export default MainApp;
