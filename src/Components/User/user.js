import user from './user.png';
import './user.css';

import {Link} from 'react-router-dom';


const User =()=>{
        return ( 
        <div>
        <Link to='/loginform'>
            <img src={user} alt='account ' id='user'/>
        </Link>
        </div>
        )
}


export default User;
