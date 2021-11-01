import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from?.pathname || '/home';
    
    const handleGoogleLogin = () => {
        signInGoogle()
        
        .then(result => {
            history.push(redirect_uri);
            console.log(result.user.displayName);
            const id = result.user.uid;
            const name = result.user.displayName;
            const email = result.user.email ;
            const newUser = {id, name, email};
            
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res=> res.json())
            .catch(err => console.log(err))
        })
        
    }
    
    
   
    return (
        <div>
            <div className='mx-4 mt-4'>
            <h2>Please Login with Google</h2>
            
            </div>
            <div className='buttons mt-3'>
                <Button onClick={handleGoogleLogin}>Google SignIn</Button>
            </div> 
            
        </div>
    );
};

export default Login;
