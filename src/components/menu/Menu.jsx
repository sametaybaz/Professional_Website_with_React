import "./menu.scss";

export default function Menu({menuOpenProp,setMenuOpenProp}) {
  return (
    <div className={'menu '+ (menuOpenProp && "active")}>
        <ul> 
            <li onClick={()=>setMenuOpenProp(false)}><a href="#intro">Home</a></li>
            <li onClick={()=>setMenuOpenProp(false)}><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>setMenuOpenProp(false)}><a href="#works">Works</a></li>
            <li onClick={()=>setMenuOpenProp(false)}><a href="#testimonials">Testimonials</a></li>
            <li onClick={()=>setMenuOpenProp(false)}><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}
