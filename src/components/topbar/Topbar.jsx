import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpenProp,setMenuOpenProp}) {
  return (
    <div className={"topbar " + (menuOpenProp && "active")}>
      <div className="wrapper">
          <div className="left">
              <a href="#intro" className="logo">SamedyA</a>
              <div className="itemContainer">
                <Person className="icon" /> 
                <span>+44 924 12 86</span>
              </div>
              <div className="itemContainer">
                <Mail className="icon" /> 
                <span>abdulsamet_aybaz19@gmail.com</span>
              </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpenProp(!menuOpenProp)}> 
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
      </div>
    </div>
  )
}


