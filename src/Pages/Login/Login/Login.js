import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import AddUser from '../../AddUser';


const Login = () => {
    const { signInGoogle,user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from?.pathname || '/home';
    
    const handleGoogleLogin = () => {
        signInGoogle()
        
        .then(result => {
            history.push(redirect_uri);
        })
        
    }
    
   
    return (
        <div>
            <div className='mx-4 mt-4'>
            <h2>Please Login with Google</h2>
            
            </div>
            {
                    user?.email?
                    <AddUser />:
                    console.log('added')
            }
            <div className='buttons mt-3'>
                <Button onClick={handleGoogleLogin}>Google SignIn</Button>
            </div> 
            
        </div>
    );
};

export default Login;
