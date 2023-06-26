import React,{useState,Fragment} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App()
{
    //Store the input from the AddUser
    const [usersList,setUsersList]=useState([]);

    // Input from the the AddUser will be stored here and then it will send to UserList
    const addUserHandler = (uName,uAge)=>
    {
        setUsersList((prevUsersList)=>
        {
            return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
        });
    };

    return(
        // <React.Fragment>
        <Fragment>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </Fragment>
    )
};
export default App;