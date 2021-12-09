import './App.css';
import Header from './Components/header.js'
import Aboutme from './Components/aboutme.js';
import Projects from './Components/projects.js';
import Contact from './Components/contact.js'
import Footer from './Components/footer.js'
import img from './images/John-Doe.jpg'
import projone from './images/proj1.jpg'
import projtwo from './images/proj2.jpg'
import projthree from './images/proj3.jpg'
import projfour from './images/proj4.jpg'

function App() {
  const name = 'Fedi'
  const footer = 'GOMYCODE TUNIS'
  const array = [
   {title : 'project1' , imgsrc : projone},
  {title: 'project2' , imgsrc : projtwo}, 
  {title: 'project3' , imgsrc : projthree},
  {title: 'project4' , imgsrc : projfour}]

 

  return (
    <div className="App">
      <Header name = {name} />
      <Aboutme  name =  {name} >
      <img className="avatar" src= {img} alt="jhon-doe" ></img>
      </Aboutme>
      <Projects  array = {array} />
      <Contact /> 
      <Footer  footer = {footer} />
      

    </div>
  );
}

export default App;
