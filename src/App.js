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

const url = "https://randomuser.me/api/";


// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [users, setUsers] = useState([]);
  const [userList, setUserList] = useState([]);
  const [title, setTitle ] = useState("name");
  const [value, setValue ] = useState("");
  const [picture, setPicture ] = useState("");
  const [loading, setLoading ] = useState(true);


  
 
  const getUsers = async () => {
      try {
         setLoading(true); // buna gerek yok 
        const { data } = await axios.get(url);
        setUsers(data.results[0]);
        setValue(Object.values(data.results[0].name).splice(1).join(" "));
        setPicture(data.results[0].picture.large);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    // console.log(users.data.results[0].name.first);


    useEffect(() => {
      getUsers();
      
    }, []);

    useEffect(() => {
      setTitle("name");
      
    }, [users]);

    const handleNewUser = () => {
      // setLoading(true)
      getUsers();
    }
      
    const handleAddUser= () => {
      const added = {
        id: users.login.uuid,
        firstname: users.name.first,
        email: users.email,
        phone: users.phone,
        age: users.dob.age
      }
      if(userList.filter((item) => item.id==users.login.uuid).length > 0) {
        alert("Dies User wurde schon hinzugefügt.")
      } else {
        setUserList((oldList)=> [...oldList, added]);
      }
    }

      
      
     



  



  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container" >
          <img src={picture&&picture} alt="random user" className="user-img" />
          <p className="user-title" id="title">My {title} is </p>
          <p className="user-value" id="value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseEnter={() => {setValue(Object.values(users.name).splice(1).join(" ")); setTitle("name")}} >
              <img src={users.gender==="female"? womanSvg : manSvg} alt="user" id="iconImg" />
            </button>
            <button className="icon" data-label="email" onMouseEnter={() => {setValue((users.email)); setTitle("email")}}>
              <img src={mailSvg} alt="mail" id="iconImg" /> 
            </button>  
              <button className="icon" data-label="age" onMouseEnter={() => {setValue((users.dob.age)); setTitle("age")}}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street" onMouseEnter={()=> {setValue((users.location.street.name)); setTitle("adresse")}}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone" onMouseEnter={() => {setValue((users.phone)); setTitle("phone")}}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password"onMouseEnter={() => { setValue((users.login.password)); setTitle("password")}}>
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={handleNewUser}>{loading === true ? "Loading" : "New User"}
            </button>
            <button className="btn" type="button" onClick={handleAddUser}>
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
                {userList?.map((item) => {
                  return (
                    <tr className="body-tr">
                    <td>{item.firstname}</td>
                    <td>{item.email} </td>
                    <td>{item.phone} </td>
                    <td>{item.age} </td>
                    </tr>
                    
                    )
                })}



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
