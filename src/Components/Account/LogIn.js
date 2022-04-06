
import './LogIn.css';

const LogIn=()=> (
        <form action='/' method='get'>
            <label className='LogIn'>User</label>
            <input
                text='text'
                id='user'
                placeholder="User id"
                name='Id' />
            <br></br>
            <label className='Password'>Password</label>
            <input
                text='text'
                id='password'
                placeholder="Password"
                name='password' />
        </form>
    );



export default LogIn;