import './Aside.css'
import project2 from '../../utils/videos/project2.mp4'
import project1 from '../../utils/videos/project1.mp4'
import { Link } from 'react-router-dom'
import { Projects } from '../Projects/Projects'
export const Aside = ({path3}) => {
  return (
    <div className='aside'>
     
     <div>
      <h1>Skills</h1>
     </div>
     <ul>
      <li><h4>Prog. Languages </h4>C, C++(efficient), Java, Python, SQL</li>
      <li><h4>Web Development </h4>
          Frontend - HTML, CSS, JavaScript, React, Bootstrap, Tailwind <br />
          Backend - NodeJS(ExpressJS) <br />
          Database - MongoDB, MySql
      </li>
      <li><h4>Soft Skills </h4>Communication, Presentation skills, Discipline, TeamWork </li>
      <li><h4>Other </h4> Postman, Figma(Wireframes , Prototypes), Git, Github</li>
      <li><p> Currently learning Data Structures!</p></li>
     </ul>
      <div className='linkproject '>
      <Link to="/projects" >
      <div className='flex'>
        <h3>Check Out My Projects</h3>
       <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d={path3} fill="black"/>
       </svg>
       </div>
      
       </Link>
       </div>
    </div>
  )
}
