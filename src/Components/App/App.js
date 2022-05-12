import './App.css';
import {React, useState, useEffect} from 'react';
import Article from '../Articles/Article';
import refresh from '../../pngegg.png';
import User from '../User/user';
import LogIn from '../LogIn/LogIn';



function App() {
  const [articles, setArticles]=useState([]);
  const [subreddit, setSubreddit]=useState('Reddit');

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
      <form className='search-form'>
       <input
          type='search'
          id='search-input'
          className='input'
          value={subreddit}
          onChange={ e=>setSubreddit(e.target.value)}
          />
        <button 
          type="submit" 
          className="search-button"
          onClick={ e=>setSubreddit(e.target.value)}>
            <img src={refresh} alt='click to refresh' className='refresh'/>
        </button>
        <User />
      </form>
      <h1>Mini Reddit</h1>
      <LogIn />
          {
          (articles!=null)? articles.map((article, index)=> <Article key ={index} article ={article.data}/>): ''
          }
      
    </div>
  ); 
}

export default App;
