
function Aboutme (props) {
    return (
       <div>
             <section id="about-me">
        <h1>
          Hello, my name is
          <span className="rotate text-important"> {props.name} </span>,<br />
          and i make horrible websites.
        </h1>
        {props.children}
      </section>
       </div>
    )
}

export default Aboutme
