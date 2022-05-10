import user from './user.png';
import './user.css';
import {Route, Router} from 'react-router-dom';
import LogInForm from '../LogIn/LogInForm';

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
