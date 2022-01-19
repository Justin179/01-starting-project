import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const[usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) => {

    // 很重要，原list加一的寫法 (when your state update rely on the previous state)
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName, age:uAge, id: Math.random().toString()}];
    });

  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
