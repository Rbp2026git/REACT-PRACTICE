import { useState } from 'react'
import './App.css'

function App() {

  const skillsArray = ["HTML", "CSS", "JavaScript", "React"];
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subscribe: false,
    skills: [],
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  // console.log(formData);
  const handleTextChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => (
      {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }
    ));
  };

  const handleSkillChange = (skill) => {
    setFormData((prev) => {
      const allReadySelected = prev.skills.includes(skill);
      const updatedSkills = allReadySelected ? (
        prev.skills.filter((s) => s !== skill)
      ) : [...prev.skills, skill];

      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  const isAllSelected = formData.skills.length === skillsArray.length; // This gives boolean value(true || false)
  const handleSelectAllToggle = () => {
    setFormData((prev) => (
      {
        ...prev,
        skills: isAllSelected ? [] : [...skillsArray],
      }
    ))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("name, email aur phone number ko bharna jaroori hai!");
      return;
    }
    const newUser = {
      ...formData,
      id: crypto.randomUUID(),
    };
    setUsers((prev) => [...prev, newUser]);

    setFormData(initialState);
    setError('');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );
  });

  return (

    <div className='max-w-[420px] mx-auto p-5 font-sans'>

      <h1 className='text-center mb-5'>User Manager (Practice Project)</h1>
      {/* ----------------- FORM --------------- */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-[14px] p-4 border border-[#ddd] rounded-[10px] mb-6'>
        <div className='flex gap-[10px] flex-wrap'>
          <input
            className='flex-1 min-w-[200px] px-[10px] py-2 rounded-[6px] border border-[#ccc] text-sm'
            placeholder='Name'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleTextChange}
          />

          <input
            className=' flex-1 min-w-[200px] px-[10px] py-2 rounded-[6px] border border-[#ccc] text-sm'
            placeholder='Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleTextChange}
          />

          <input
            className='flex-1 min-w-[200px] px-[10px] py-2 rounded-[6px] border border-[#ccc] text-sm'
            placeholder='Phone Number'
            type='number'
            name='phone'
            value={formData.phone}
            onChange={handleTextChange}
          />
        </div>

        {/* Single Checkbox */}
        <label className='flex items-center gap-[6px] text-sm'>
          <input
            type='checkbox'
            name='subscribe'
            checked={formData.subscribe}
            onChange={handleTextChange}
          />
          Subscribe to newsletter
        </label>

        {/* Multiple checkbox */}
        <div className='border border-[#eee] rounded-lg p-[10px]'>
          <div className='flex justify-between items-center mb-2'>
            <span className='font-semibold'>Skills</span>
            <button
              type='button'
              className='px-[10px] py-1 text-xs rounded-[6px] border border-[#999} bg-[#f5f5f5] cursor-pointer'
              onClick={handleSelectAllToggle}
            >
              {isAllSelected ? "Deselect All" : "Select All"}
            </button>
          </div>

          <div className='flex gap-[14px] flex-wrap flex-col'>
            {skillsArray.map((skill) => (
              <label className='flex items-center gap-[6px] text-sm' key={skill}>
                <input
                  type='checkbox'
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                />
                {skill}
              </label>
            ))}
          </div>

        </div>

        <button
          type='submit'
          className='px-4 py-[10px] bg-[#2563eb] text-white border-0 rounded-[6px] cursor-pointer font-semibold'
        >
          Submit
        </button>

        {error && <p className='text-[#c0392b]'>{error}</p>}

      </form>

      {/* --------------------SEARCH---------------- */}
      <div>
        <input
          type='text'
          placeholder='Search by name or email...'
          className=' flex-1 min-w-[200px] px-[10px] py-2 rounded-[6px] border border-[#ccc] text-sm'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* --------------------USER CARD---------------- */}
      <div className='grid grid-cols-[repeat(auto-fill, minm ax(9220px, 1fr))] gap-[14px]'>
        {filteredUsers.length === 0 && (
          <p className='text-[#888]'>Koi user nahi mila</p>
        )}

        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className='relative border border-[#ddd] rounded-[10px] p-[14px] bg-[#fafafa]'
          >
            <button
              className='absolute top-2 right-2 border-0 bg-[#fee2e2] text-[#b91c1c] rounded-full w-6 h-6 cursor-pointer text-xs leading-none'
            >
              X
            </button>

            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>
              Newsletter: {user.subscribe ? "Yes" : "No"}
            </p>
            <p>
              Skills: {user.skills.length > 0 ? user.skills.join(', ') : "None"}
            </p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default App
