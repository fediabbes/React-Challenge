

function Projects (props) {

//   let array = [{title : 'project1' , imgsrc : projone  },
// {title: 'project2' , imgsrc : projtwo}, 
// {title: 'project3' , imgsrc : projthree},
// {title: 'project4' , imgsrc : projfour}]
    return (

        <div>
            <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
        {props.array.map(el => <div className="project-card">
            <img src= {el.imgsrc} alt="project" />
            <h3> {el.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>)}


          
  
   
       
         
        </div>
      </section>
        </div>

    
        
    ) 
}

export default Projects