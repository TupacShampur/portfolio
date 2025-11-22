import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Roman Ivashkevych
        </h2>
        <a href='https://github.com/TupacShampur'>
          <img className='App-logo' src='/github-mark-white.png' alt='GitHub'/>
        </a>
      </header>
      <p className='App-about'>
        Junior Front-End Developer. I build web applications using React. I have experience working with APIs, OAuth authentication, and deploying applications to production. I’m looking for a team where I can grow and bring real value.
      </p>
      <div className='App-projects'>
        <h3>Projects</h3>
        <p className='App-projects-subtitle'>new projects coming soon...</p>
        <div className='App-card'>
          <a href='https://jammming-nine.vercel.app/' target='_blank' rel='noopener noreferrer'>

          <img className='App-card-icon'src='/Jammming.png'/>
          <h3 className='App-card-header'>Jammming</h3>
          <p className='App-card-description'>Spotify playlists creator</p>
          <p className='App-card-specifics'>Spotify API | OAuth (PKCE) | React</p>
          </a>
        </div>
          <div className="App-card-link">
            <a href="https://github.com/TupacShampur/jammming" target="_blank" rel="noopener noreferrer">
              View Code →
            </a>
          </div>
      </div>
      <div className="App-skills">
        <h3>Skills</h3>
        <div className="App-skills-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>Git</span>
          <span>REST API</span>
          <span>OAuth2</span>
        </div>
      </div>
      <div className='App-contact'>
        <h3>Contact</h3>
        <div className='App-contact-info'>
          <a href='mailto:roma.ivashckevych@gmail.com'>
            roma.ivashckevych@gmail.com
          </a>
          <a href="https://linkedin.com/in/roman-ivashkevych-a77388239" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>  
        </div>
      </div>
    </div>
  );
}

export default App;
