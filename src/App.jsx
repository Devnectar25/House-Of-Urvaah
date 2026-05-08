import desktopImg from './assets/Untitled design.png'
import mobileImg from './assets/umobile.png'
import './App.css'

function App() {
  return (
    <div className="hero-container">
      <picture className="hero-picture">
        <source media="(max-width: 768px)" srcSet={mobileImg} />
        <img 
          src={desktopImg} 
          alt="House of Urvaah" 
          className="hero-image" 
        />
      </picture>
    </div>
  )
}

export default App
