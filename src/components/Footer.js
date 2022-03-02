import React from 'react'
import '../Styling/Footer.css'
const Footer = () => {
     return (
          <div className="footer">
               <span className="name">
                    Inshorts clone made by -{" "}
                    <a href="https://www.linkedin.com/in/divyansh-raghuvanshi-892b11217/" target="__blank">
                         Divyansh Raghuvanshi
                    </a>
               </span>
               <hr style={{ width: "90%" }} />
               <div className="iconContainer">
                    {/* <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
                         <i className="fab fa-instagram-square fa-2x"></i>
                    </a> */}
                    {/* <a href="https://www.linkedin.com/in/divyansh-raghuvanshi-892b11217/" target="__blank">
                         <i className="fab fa-linkedin fa-2x"></i>
                    </a> */}
                    {/* <a href="https://piyushjsx.netlify.app/" target="__blank">
                         <i className="fas fa-link fa-2x"></i>
                    </a> */}
               </div>
          </div>
     )
}

export default Footer
