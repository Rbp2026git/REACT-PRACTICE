import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddUser = (newUser) => {
    setUsers((pervUsers) => [...pervUsers, newUser]);
  }

  return (
    <div className="font-sans max-w-[480px] mx-auto p-4">
      <Header />

      <SearchBox searchTerm = {searchTerm}  onSearchChange ={setSearchTerm} />

      <RegistrationForm onAddUser = {handleAddUser} />

      <UserList  users = {users} searchTerm = {searchTerm}/>

      <FeedbackForm />
    </div>
  )
}

export default App
