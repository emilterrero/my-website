function Projects() {

    return (
        <div className='render projects'>

        <div className='project-card'>
        <a href='https://codepen.io/emilterrero/full/yLoqpyv' target='_blank'><img src='./stackLogos/lps.png' /></a>
        <div className='project-info'>
        <h3>Rock, Paper, Scissors</h3>
        <p>This project was assigned as pre-course work to the General Assembly SEI program. It was meant to be built with html, css, and javascript. It was a fun project to work on cause it showed how far my self taught journey took me before getting into a bootcamp.</p>
        </div>
        </div>



        <div className='project-card'>
        <a href=' https://emilterrero.github.io/simon-game/' target='_blank'><img src='./stackLogos/simonGame.png' /></a>
        <div className='project-info'>
        <h3>Simon Game</h3>
        </div>
        </div>

        <div className='project-card'>
        <a href='x' target='_blank'><img src='./stackLogos/marketplace.png' /></a>
        <div className='project-info'>
        <h3>Missing Link</h3>
        </div>
        </div>

        </div>
    )
}

export default Projects;
