import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom"
import { handleChange } from "react"
import { AiOutlineMenu } from "react"
import { menu } from "react"
import { Button } from "react"
import { img } from "react"
import { Heading } from "react"
import { handleSubmit } from "react"
import { setName } from "react"
import { email } from "react"
import { setEmail } from "react"
import { password } from "react"
import { setPassword } from "react"
import {props  } from "react"
// import {  } from "react"


const router = createBrowserRouter([
  {
    path: '/',
    element:
    <div>
    <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <div>
      <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
        RxDForm
      </Link>
    </div>

    <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Accueil
      </Link>
      {/* <Link
        to="/Dashboard"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Créer un sondage
      </Link> */}
      <Link
        to="Sondage"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Mes sondages
      </Link>
      <Link
        to="Register"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
       Se connecter
      </Link>
    </nav>
    {/* <div className="flex md:hidden" onClick={handleChange}>
      <div className=" p-2">
        <AiOutlineMenu size={22} />
      </div>
    </div> */}
  </div>
  <div
    className={` ${
      menu ? "translate-x-0" : "-translate-x-full"
    } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
  >
    <Link
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Accueil
    </Link>
    {/* <Link
      to="Dashboard"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[Sondage539165] transition-all cursor-pointer"
    >
      Créer un sondage
    </Link> */}
    <Link
      to="Sondage"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Mes sondages
    </Link>
    <Link
      to="Register"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
     Se connecter
    </Link>
  </div>

  <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          RxDForm
          <span className="text-brightGreen"> Application PWA de Sondages</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Bienvenue sur RxDForm, l'application qui vous permet de créer,
          partager et visualiser rapidement les résultats de vos sondages en
          ligne.
        </p>
        <p className=" text-lightText mt-5 text-start">
          Connectez-vous et commencez à créer des sondages dès maintenant.
        </p>
{/* 
        <Link to="login" spy={true} smooth={true} duration={500}>
          <Button title="Créer un compte" />
        </Link> */}
      </div>

      {/* <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div> */}

     <div className="flex flex-col md:flex-column justify-content-center">
     <p className="text-center py-3">Créer un compte</p>
        <form
          className="  REGISTER  space-y-5 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Full Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Password</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="**************"
              id="password"
              name="password"
            />
          </div>
          <Link
            className="underline w-96"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Login here.{" "}
          </Link>
          <div className="flex flex-row justify-start">
            <button type="submit" title="Log In" className=" bg-white" >S'inscrire</button>
          </div>
        </form>
        <div className="">
          {/* <img src={img} alt="img" /> */}
        </div>
      </div>
    </div>
  </div>
  },
  {
    path: '/Dashboard',
    element: <div>
<div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <div>
      <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
        RxDForm
      </Link>
    </div>

    <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Accueil
      </Link>
      {/* <Link
        to="/Dashboard"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Créer un sondage
      </Link> */}
      <Link
        to="/Sondage"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Mes sondages
      </Link>
      <Link
        to="/Register"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Se connecter
      </Link>
    </nav>

    {/* <div className="flex md:hidden" onClick={handleChange}>
      <div className=" p-2">
        <AiOutlineMenu size={22} />
      </div>
    </div> */}
  </div>
  <div
    className={` ${
      menu ? "translate-x-0" : "-translate-x-full"
    } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
  >
    <Link
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Accueil
    </Link>
    {/* <Link
      to="Dashboard"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Créer un sondage
    </Link> */}
    <Link
      to="/Sondage"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Mes sondages
    </Link>
    <Link
      to="/Register"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
     Se connecter
    </Link>
  </div>
  <br />  
    </div>
  },
    {
    path: '/Register',
    element: <div>


<div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <div>
      <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
        RxDForm
      </Link>
    </div>

    <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Accueil
      </Link>
      {/* <Link
        to="/Dashboard"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Créer un sondage
      </Link> */}
      <Link
        to="/Sondage"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Mes sondages
      </Link>
      <Link
        to="/Register"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
       Se connecter
      </Link>
    </nav>

    {/* <div className="flex md:hidden" onClick={handleChange}>
      <div className=" p-2">
        <AiOutlineMenu size={22} />
      </div>
    </div> */}
  </div>
  <div
    className={` ${
      menu ? "translate-x-0" : "-translate-x-full"
    } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
  >
    <Link
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Accueil
    </Link>
    {/* <Link
      to="Dashboard"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Créer un sondage
    </Link> */}
    <Link
      to="/Sondage"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Mes sondages
    </Link>
    <Link
      to="/Register"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
     Se connecter
    </Link>
  </div>
  <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 connexion ">
      {/* <Heading title1="Créer un compte" /> */}
      <p className="text-center py-3">Connxion</p>
      <div className="flex flex-col md:flex-row justify-content-center">
        <form
          className="  REGISTER  space-y-5 "
          onSubmit={handleSubmit}
        >
        
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Password</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="**************"
              id="password"
              name="password"
            />
          </div>
          <div className="flex flex-row justify-start">
            <button type="submit" title="Log In" className=" bg-white" >Se connecter</button>
          </div>
        </form>
        <div className="">
          {/* <img src={img} alt="img" /> */}
        </div>
      </div>
    </div>
    </div>
  },
    {
    path: '/Sondage',
    element: <div>
 <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <div>
      <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
        RxDForm
      </Link>
    </div>
    <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Accueil
      </Link>
      {/* <Link
        to="/Dashboard"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Créer un sondage
      </Link> */}
      <Link
        to="/Sondage"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
        Mes sondages
      </Link>
      <Link
        to="/Register"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#539165] transition-all cursor-pointer"
      >
       Se connecter
      </Link>
    </nav>

    {/* <div className="flex md:hidden" onClick={handleChange}>
      <div className=" p-2">
        <AiOutlineMenu size={22} />
      </div>
    </div> */}
  </div>
  <div
    className={` ${
      menu ? "translate-x-0" : "-translate-x-full"
    } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
  >
    <Link
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Accueil
    </Link>
    {/* <Link
      to="Dashboard"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Créer un sondage
    </Link> */}
    <Link
      to="/Sondage"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
      Mes sondages
    </Link>
    <Link
      to="/Register"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer"
    >
     Se connecter
    </Link>
  </div>
  <br />
  <div className="maincontaner_nsondage">
  <div className="text-right bg-white nsondage">
    <Link to="/Dashboard"
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-[#539165] transition-all cursor-pointer ">Créer un nouveau sondage</Link>
  </div>
  </div>
  <div class="testbox">
    <p class="ennocee">Sondage pour savoir le de développeur(se) au Sénégal 2024</p>
    <br />
      <form action="/" class="form-container">
        <div class="question">
          <label>Etez-vous développeur(se)?</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="oui" id="radio_21" name="Etez-vous-développeur(se)"/>
              <label for="radio_21" class="radio"><span>Oui</span><div class="round"></div></label>
            </div>
            <div>
              <input type="radio" value="non" id="22" name="Etez-vous-développeur(se)"/>
              <label for="22" class="radio"><span>Non</span><div class="round"></div></label>
            </div>
          </div>
        </div>
        <div class="question">
          <label>Depuis quand étes-vous dans ce domaine?</label>
          <div class="question-answer">
            <div>
              <input type="number" value="" id="radio_23" name="enjoy"/>
            </div>
          </div>
        </div>
        <div class="question">
          <label>Comment avez-vous appris la programmation ?</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="Grace-à-une-formation-gratuite" id="radio_25" name="Comment-avez-vous-appris-la-programmation"/>
              <label for="radio_25" class="radio"><span>Grace à une formation gratuite</span><div class="round"></div></label>
            </div>
            <div>
                <input type="radio" value="Grace-à-une-formation-payante" id="radio_26" name="Comment-avez-vous-appris-la-programmation"/>
                <label for="radio_26" class="radio"><span>Grace à une formation payante</span><div class="round"></div></label>
             </div>
            <div>
              <input type="radio" value="En-autodidacte" id="radio_27" name="Comment-avez-vous-appris-la-programmation"/>
              <label for="radio_27" class="radio"><span>En autodidacte</span><div class="round"></div></label>
           </div>
          </div>
        </div>
        <div class="question">
          <label>Quelles sont les langages de programmations avez-vous appris?</label>
          <div class="question-answer">
            <div>
              <textarea name="Quelles-sont-les-langage-de-programmation-avez-vous-appris" value="" id="radio_28"   cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
        <div class="question">
          <p>Quels sont les framework avez-vous appris?</p>
          <div class="question-answer">
            <div>
                <textarea name="Quels-sont-les-framework-avez-vous-appris" value="" id="radio_30"   cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Send</button>
        </div>
      </form>
    </div>
    </div>
  },
    {
    path: '/CreateSondage',
    element: <div>

    </div>
  },
])

function App() {
  return <RouterProvider router={router}/>

}
export default App;












//   const App = () => {
//   const [currentForm, setCurrentForm] = useState("login");
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   };
//   return (
//     <Router>
//       <div>
//         <Navbar />

//         <main>
//           <div id="home">
//             <Home />
//           </div>
//           <div id="login">
//             {currentForm === "login" ? (
//               <Login onFormSwitch={toggleForm} />
//             ) : (
//               <Register onFormSwitch={toggleForm} />
//             )}
//           </div>
//         </main>
//         <div>
//           <Dashboard/>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
