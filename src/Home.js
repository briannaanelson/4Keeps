import React, {useState, useEffect} from "react";
import "./Home.css"

export const Home = () => {



    return (

        <>
        <div className="intro">
        <img src="./images/4keepsintro.png" alt="homelogo"></img>
        <div className="introduction">
        <h1>Introducing 4Keeps.</h1>
        
       
        <h3>4Keeps. is an application where parents can strore unlimited memories about their little ones from birth up until their last year of highschool.<br></br>
            In the app you can add children, create entries of memories, when they took place, and which child the memory involed.<br></br>
            Essintally, the goal of 4keeps. is to give parents a place to store all these memories throught the child's life and <br></br>
            later pass on the login to the child so that they are able to go back and read these wonderful entries. 
             </h3>
             </div>
        <h1>Our Creators</h1>
            <div className="founders">
                <div className="founderpic">
            <img src={'/images/briannaCropped.png'} alt="brianna" className="brianna"></img>
            <h2>Brianna</h2>
            </div>
            <div className="founderpic">
            <img src={'/images/kennedyCropped.png'} alt="kennedy" className="kennedy"></img>
            <h2>Kennedy</h2>
            </div>
            <div className="founderpic">
            <img src={'/images/gabbyCropped.png'} alt="gabby" className="gabby"></img>
            <h2>Gabby</h2>
            </div>
            </div>
           
        

        
        <h3>4keeps. was founded by Brianna Nelson and Gabrielle Howell, two lifelong bestfriends. Brianna is a mother of 1, as well as a Systems Administrator, <br></br>currently working through
            a Full Stack Web Development Bootcamp and Gabby is a current Gifted Teaching Specialist. The idea of 4keeps. <br></br>came about when Brianna needed an idea for her
            front end capstone project. Gabby had the perfect idea, Brianna had the coding skills to bring the app to life,<br></br> and they both had the perfect 3 year old to test out the app on.
            Brianna's daughter and Gabby's godchild Kennedy Grace. <br></br>This app is a place 4keeps and a place where memories R 4ever.
        </h3>
        </div>
        </>
    )
}