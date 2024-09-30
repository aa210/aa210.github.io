import React from "react"
import ReactDOM from "react-dom"

function Navbar() {
    return (
        <nav>
            <img src="https://th.bing.com/th/id/R.e2baaa02769a173c4ee608552589ca45?rik=pbdPmbtaucrLlg&pid=ImgRaw&r=0" className="nav-logo" />
        <h3 className="nav-logo-text">React Facts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

function Main() {
    return (
      <main>
<h1 className="main-title"> Fun Facts About React</h1>
            <ul className="list">
              <li> Was Released in 2013</li>
              <li> Create by Jordan Walke</li>
              <li> 100K stars on GitHub</li>
              <li> Maintained by FB</li>
              <li> Powers thousands of enterprise apps, including mobile apps</li>
              </ul>
        </main>
    )
}

function App(){
  return (
  <>
    <Navbar />
    <Main />
  </>    
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
