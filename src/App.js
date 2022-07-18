import React from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import { useState,useEffect } from "react";
import axios from 'axios';



const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [users, setUsers] = useState();
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    user: "name",
    mail: "",
    age: "",
    map: "",
    phone: "1",
    lock: "" 
  });

  const [title, setTitle] = useState({
    user: "",
    mail: "",
    age: "",
    map: "",
    phone: "",
    lock: "" 

  });

  const url = "https://randomuser.me/api/";
  const getUsers = async () => {
      try {
        const response = await axios.get(url).then((response)=>setUsers(response.data.results[0]))
          // console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, []);

    const handleShow = (e)=> {
     setVisible(true);
     if (!visible) {
      
        if (e.target.alt ==="user") {
            setUserInfo({...userInfo, [e.target.alt]: `${users.name.first + " " + users.name.last}` });
            setTitle({...title, [e.target.alt]: "name"})
            alert("göründüm")}
            console.log(userInfo.user);
            console.log(users.name.first);
            console.log(title);
       if (e.target.alt ==="mail") {
        //  setUserInfo({...userInfo, name: users.name.first + " " + users.name.last})}
            alert("ben mailim")}
       if (e.target.alt ==="age") {
        //  setUserInfo({...userInfo, name: users.name.first + " " + users.name.last})}
            setTitle({...title, [e.target.alt]: e.target.alt})
            alert("age göründüm")}
            console.log(title);
       if (e.target.alt ==="map") {
        //  setUserInfo({...userInfo, name: users.name.first + " " + users.name.last})}
            alert("street göründüm")}
       if (e.target.alt ==="phone") {
        //  setUserInfo({...userInfo, name: users.name.first + " " + users.name.last})}
            alert("phone göründüm")}
       if (e.target.alt ==="lock") {
        //  setUserInfo({...userInfo, name: users.name.first + " " + users.name.last})}
            alert("password göründüm")}
      } 
    }
    const handleTitle = (e) => {
      if (e.target.alt==="user")
      setTitle()
      
    }

    //   if (e.target.getAttribute("data-label") === "name") {
    //     setUserInfo({...userInfo, name: users.name.first + " " + users.name.last})}

        

    //   if (e.target.getAttribute("data-label") ==="email") {
    //     setUserInfo({...userInfo, email: users.email})} 


    //   if (e.target.getAttribute("data-label") ==="age") {
    //     setUserInfo({...userInfo, age:users.dob.age })} 

      
    //   setUserInfo({...userInfo, email: users.email})
    //   setUserInfo({...userInfo, age: users.dob.age})
    //   setUserInfo({...userInfo, street: users.location.street.number + " " + users.location.street.name})
    //   setUserInfo({...userInfo, phone: users.phone})
    //   setUserInfo({...userInfo, password: users.login.password})

      
    //  }
    // }

    const handleClose = () => {
      setVisible(false);
    }




  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="random user" className="user-img" />
          <p className="user-title" id="title">My {handleTitle} is</p>
          <p className="user-value" id="value"></p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img src={womanSvg} alt="user" id="iconImg" onMouseEnter={handleShow} onMouseLeave={handleClose} />
            </button>
            <button className="icon" data-label="email" >
              <img src={mailSvg} alt="mail" id="iconImg" onMouseEnter={handleShow} onMouseLeave={handleClose}/>
            </button>
            <button className="icon" data-label="age">
              <img src={womanAgeSvg} alt="age" id="iconImg" onMouseEnter={handleShow} onMouseLeave={handleClose} />
            </button>
            <button className="icon" data-label="street">
              <img src={mapSvg} alt="map" id="iconImg" onMouseEnter={handleShow} onMouseLeave={handleClose} />
            </button>
            <button className="icon" data-label="phone">
              <img src={phoneSvg} alt="phone" id="iconImg" onMouseEnter={handleShow} onMouseLeave={handleClose} />
            </button>
            <button className="icon" data-label="password">
              <img src={padlockSvg} alt="lock" id="iconImg" onMouseEnter={handleShow} onMouseLeave={handleClose} />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button">
              new user
            </button>
            <button className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
