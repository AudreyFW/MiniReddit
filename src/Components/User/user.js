import user from './user.png';
import './user.css';




const User = () => { 

    function handleClick(e){
        e.preventDefault(e);
    }
        return ( 
        <div>
            <button onClick={handleClick}>
                <img src={user} alt='account ' id='user'/>
            </button>
        </div>
        )
}


export default User;
