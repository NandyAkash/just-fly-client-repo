import React, { useRef } from 'react';
import useAuth from '../Hooks/useAuth';

const AddUser = () => {
    const {user} = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e => {
        nameRef.current.value = user.displayName;
        emailRef.current.value = user.email;
        const id = user.uid;
        const name = nameRef.current.value;
        const email = emailRef.current.value ;
        const newUser = {id, name, email};
        fetch('http://localhost:8080/users',{
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                alert('Succesfully added a user');
                e.target.reset();
            }
        })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Add User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="Enter your name"/>
                <input type="email" ref={emailRef} name="" id="" placeholder="Enter your email" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;