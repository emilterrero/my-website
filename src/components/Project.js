function Projects() {

    return (
        <div className='projects'>

        <div className='project-card'>
        <a href='https://codepen.io/emilterrero/full/yLoqpyv' target='_blank'><img src='./stackLogos/lps.png' /></a>
        <div className='project-info'>
        <h3>Rock, Paper, Scissors</h3>
        <p>This project was assigned as pre-course work to the General Assembly SEI program. It was meant to be built with HTML, CSS, and Javascript. It was a fun project to work on cause it showed how far my self taught journey took me before getting into a bootcamp.</p>
        </div>
        </div>



        <div className='project-card'>
        <a href=' https://emilterrero.github.io/simon-game/' target='_blank'><img src='./stackLogos/simonGame.png' /></a>
        <div className='project-info'>
        <h3>Simon Game</h3>
        <p>The Simon Game was created as a project for the G.A. Fullstack program. The game was built using HTML, CSS and Javascript.</p>
        </div>
        </div>

        <div className='project-card'>
        <a href='https://snowboardmarketplace.netlify.app/' target='_blank'><img src='./stackLogos/marketplace.png' /></a>
        <div className='project-info'>
        <h3>Snowboard Marketplace</h3>
        <p>This website is a fun project I have built on my own time using CSS and React.js. Since one of my hobbies are snowboarding, I created a website where people may purchase snowboards and eventually even sell snowboards. This is an on going project, as I explore other areas of fullstack development, it will implemented to this site for practice.</p> 
        </div>
        </div>

        <div className='project-card'>
        <a href='https://etopenaichallenge.netlify.app/' target='_blank'><img src='./stackLogos/openAi.png' /></a>
        <div className='project-info'>
        <h3>Open AI App</h3>
        <p>The OpenAI app is fetching from the API from OpenAI, the site was built using CSS and React.js. The site allows you to make a request to the OpenAI api and its response will be generated by an AI. The fetch request required an API key from OpenAI.</p> 
        </div>
        </div>

        <div className='project-card'>
        <a href='https://codesandbox.io/p/sandbox/image-slider-bis23-49nf6z' target='_blank'><img src='./stackLogos/imgSldr.png' /></a>
        <div className='project-info'>
        <h3>Image Slider for BIS23 Class</h3>
        <p>This was an assignment apart of my Client-Side Programming class. The purpose of this assignment is to display by basic understanding of JavaScript web development fundamentals. I decided to make it fun by referencing a vacation I really enjoyed.</p> 
        </div>
        </div>

        <div className='project-card'>
        <a href='https://codesandbox.io/p/sandbox/mileage-calculator-l6hldy' target='_blank'><img src='./stackLogos/mpgCal.png' /></a>
        <div className='project-info'>
        <h3>MPG Calculator for BIS23 Class</h3>
        <p>This was an assignment apart of my Client-Side Programming class. The purpose of this assignment is to further prove our understanding of JavaScript computer programming fundamentals. I also took the time out to make sure I worked on the CSS to create a carefully design and responsive webpage.</p> 
        </div>
        </div> 

        </div>
    )
}

export default Projects;
