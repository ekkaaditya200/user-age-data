import React, { useState,useRef } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from './ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // To store input from the user
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');

    // To handle the error
    const [error,setError]=useState();

    // On submit the form it will wake up 
    const addUserHandler = (event) => 
    {
        // Prevent the refresh of page
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        // console.log(enteredUsername,enteredAge);
        //We need to lifting the data up to UsersList

        //Trim will delete the blank spac
        if(enteredName.trim().length === 0|| enteredAge.trim().length === 0)
        {
            setError({
                title:"Invalid input",
                message:'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        // if(enteredAge<'1') //input is string 
        if(+enteredAge<1) // we can convert to number
        {
            setError({
                title:"Invalid input",
                message:'Please enter a valid age (age>0).'
            })
            return;
        }

        props.onAddUser(enteredUsername,enteredAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';

        //Reset the input to empty
        setEnteredAge(''); 
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper> 

        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                type="text" 
                value={enteredUsername} 
                onChange={usernameChangeHandler}
                ref={nameInputRef}
                ></input>
                <label htmlFor="age">Age(Year)</label>
                <input 
                id="age" 
                type="number" 
                value={enteredAge} 
                onChange={ageChangeHandler}
                ref={ageInputRef}
                ></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>

    </Wrapper>
    )
}
export default AddUser;