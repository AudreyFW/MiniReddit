import './searchBar.css';

const SearchBar = ()=>(
    <form action='' method="get">
        <label className='transparent'>Search Articles</label>
        <input
        type='text'
        id ='header-search'
        placeholder="Articles"
        name='S'/>
        <button type='submit'>Search</button>
    </form>
);

export default SearchBar;
