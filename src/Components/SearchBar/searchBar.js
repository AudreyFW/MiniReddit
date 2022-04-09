import './searchBar.css';

const SearchBar = ()=>(
    <form action='' method="get" id='form'>
        <label className='transparent'>Search Articles</label>
        <input
        type='text'
        id ='query'
        className='input'
        placeholder="Articles"
        name='R'
        />
        <button type='submit'>🔎</button>
        <script>
        </script>
    </form>
);

export default SearchBar;
