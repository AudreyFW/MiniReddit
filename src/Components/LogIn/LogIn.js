import './LogIn.css';
import {useState} from 'react';
import LogInForm from './LogInForm';

const LogIn =()=>{
    const adminUser= {
        email:'audrey@gmail.com',
        password:'12345'
    }

    const [user, setUser]=useState({name:'', email:''});
    const [error, setError]=useState('');

    const Login= details=>{
        console.log(details);

        if(details.email===adminUser.email && details.password === adminUser.password ){
            console.log('Logged in');
            setUser({
                name:details.name,
                email:details.email
            })
        }else{
            console.log('Details do not match!')
            setError('Details do not match!')
        }
    }
    
    

    const logout=()=>{
        setUser({
            name:'',
            email:''})
    }

    return (
        <div className='LogIn'>
            {
            (user.email !=='')?(
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span> </h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ):
            <LogInForm login={Login} error={error} />
            }
        </div>
    )
}

export default LogIn;