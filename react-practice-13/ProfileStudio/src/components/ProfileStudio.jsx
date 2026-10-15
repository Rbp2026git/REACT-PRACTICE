import { useState } from 'react';
import TextField from './TextField';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';
import Output from './Output';

const BIO_MAX = 60;

function ProfileStudio () {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [likes, setLikes] = useState(0);
    const [showBug, setShowBug] = useState(false);

    return (
        <div className="p-6 max-w-[510px] min-w-[360px] bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Profile Studio</h2>
            <p className="text-gray-600 mb-4">Welcome to the Profile Studio!</p>
            <TextField 
            type="text"
            label="Name" 
            value={name} 
            onChange={setName} />

            <TextField 
            label="Age" 
            type="number"
            value={age} 
            onChange={setAge} />

            <TextField 
            type="text"
            label="Bio" 
            value={bio} 
            onChange={(v) =>setBio(v.slice(0, BIO_MAX))}>
                <div className={bio.length === BIO_MAX ? 'text-red-500' : 'text-gray-500'}>
                    {bio.length}/{BIO_MAX}
                </div>
            </TextField>

            <div className="flex gap-2 items-center">
                <button 
                className='py-2 px-3.5 rounded-[8px] bg-[#2563eb] text-[#fff] font-inherit cursor-pointer' 
                onClick={() => setLikes((n) => n + 1)}
                >
                    👍Like
                </button>
                <button 
                className='py-2 px-3.5 rounded-[8px] bg-[#e2e8f0] text-[#1f2937] font-inherit cursor-pointer' 
                disabled={likes === 0}
                onClick={() => setLikes((n) => n - 1)}
                >
                    👎Unlike
                </button>
                <span>{likes}</span>
            </div>
            <Output name={name} age={age} bio={bio} likes={likes} />
            <div>
                <button 
                className='py-2 px-3.5 rounded-[8px] bg-[#e2e8f0] text-[#1f2937] font-inherit cursor-pointer'
                onClick = {() => setShowBug(true)}>
                    Bug Demo chalao
                </button>
                {showBug && (
                    <div className= "mt-3">
                        <ErrorBoundary onReset={() => setShowBug(false)}>
                            <BuggyCounter />
                        </ErrorBoundary>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ProfileStudio;