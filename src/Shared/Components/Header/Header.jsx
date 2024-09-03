import './Header.css'
import { Link } from 'react-router-dom'
import { Projects } from '../../../Modules/Projects/Projects'
import { Contact } from '../../../Modules/Contact/Contact'
import { useEffect,useState } from 'react'
export const Header = () => {
//   const [animationComplete , setAnimation] = useState(false);

//   useEffect(() => {
//   const timer = setTimeout(() => {
//       setAnimation(true);
//   }, 1500); 

//   return () => clearTimeout(timer);
// }, []);

    const myStyle={
     fontStyle : "italic",
     fontWeight : "100"
    }
  return (
    <div className="headerbox flex">
        <div className='flexName'>
         <h2 >Yukta</h2> &nbsp;
         <h2 style={myStyle}>Dandeva</h2>
        </div>
        <div className='nav'>
            <ul className='flex'>
                <li>About</li>
                <li><Link to="/projects" >Projects</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}
