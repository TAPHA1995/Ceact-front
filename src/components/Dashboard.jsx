// import React from "react";
import Button from "../layout/Button";
import React, {useState, useEffect} from 'react'
import axios from "axios";

const Dashboard = (props) => {
    const [sondage, setSondage] = useState([])
    useEffect(()=>{
        sondageaffiche()
    }, [])
    const sondageaffiche = async()=>{
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}sondage`).then(
            (res)=>{
                console.log(res)
            }
        )
    }
   
    return (
      <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <form
            className="w-full md:w-2/5 space-y-5 pt-20">
            <div className="">
                <p>Quelle équipe sera le vainqueur de la CAN 2024</p>
              <label htmlFor="text">Sénégal</label> 
               <input className="" value="sénégal" type="radio" id="vainqueur" name="vaiqueur"/><br/>
              <label htmlFor="text">Nigeria</label>
              <input className=" " value="nigeria" type="radio" id="vainqueur" name="vaiqueur"/>
            </div>
            <div className="flex flex-row justify-start">
              <Button type="submit" title="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  