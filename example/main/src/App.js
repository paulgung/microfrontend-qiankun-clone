import { BrowserRouter as Router, Link } from 'react-router-dom'
import './reset.css'
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="router">
        <Router>
          <div>
            <nav>
              <ul>
                <li className="sub-meanu">
                  <Link to="/">Index</Link>
                </li>
                <li className="sub-meanu">
                  <Link to="/vue1">SubApp 1</Link>
                </li>
                <li className="sub-meanu">
                  <Link to="/vue2">SubApp 2</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Router>
      </div>

      <div id="micro-container" />
    </div>
  )
}

export default App
