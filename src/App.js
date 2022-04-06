import logo from './logo.svg';
import './App.css';
import LogIn from './Components/Account/LogIn'
import SearchBar from './Components/SearchBar/searchBar'
import {react, ReactDOM} from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini Reddit</h1>
      </header>
      <body>
          <aside>
            <h2>My Account</h2>
            <LogIn />
            <p>Sign in</p>
          </aside>
          <SearchBar />
      </body>
    </div>
  );
}

export default App;
