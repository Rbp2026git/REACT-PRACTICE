import { useState } from 'react';
function BuggyCounter() {
    const [count, setCount] = useState(0);
    return (
        <button 
        className='py-2 px-3.5 rounded-[8px] bg-[#e2e8f0] text-[#1f2937] font-inherit cursor-pointer'
        onClick={() => setCount(count + 1)}>
            count: {count}
        </button>
    );
}
export default BuggyCounter;