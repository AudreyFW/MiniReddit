
import './App.css';
import LogIn from './Components/Account/LogIn'
import SearchBar from './Components/SearchBar/searchBar'
import {React, useState, useEffect} from 'react';
import Article from './Components/Articles/Article';
import Images from './Components/images/images';


function App() {
  const [articles, setArticles]=useState([]);
  const [subreddit, setSubreddit]=useState('Reddit');
  const [images, setImages]=useState([]);

  useEffect(()=>{
    fetch('https://www.reddit.com/r/'+subreddit+'.json').then(res=>{
      if(res.status !== 200) {
        console.log('Error');
        return;
      }

      res.json().then(data=>{
        if(data!=null){
          setArticles(data.data.children);
        }
      })
    })
  },[subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini Reddit</h1>
      </header>
          <aside>
            <h2>My Account</h2>
            <LogIn />
          </aside>
          <input
          className='input'
          value = {subreddit}
          onChange={ e=>setSubreddit(e.target.value)}
          />
          {
          (articles!=null)? articles.map((article, index)=> <Article key ={index} article ={article.data}/>): ''
          (images!=null)? images.map((images)=> <Images href={images.data} />): ''
          }
    </div>
  );
}

export default App;
