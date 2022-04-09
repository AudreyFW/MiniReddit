
import './LogIn.css';

const LogIn=()=> (
        <form action='/' method='get'>
            <label className='LogIn'></label>
            <input
                text='text'
                id='user'
                placeholder="User id"
                name='Id' />
            <br></br>
            <label className='Password'></label>
            <input
                text='text'
                id='password'
                placeholder="Password"
                name='password'
                />
            <br></br>
            <br></br>
            <a href='https://www.reddit.com' title ='Lien inscription MiniReddit'>Sign In</a>
        </form>
    );

export default LogIn;