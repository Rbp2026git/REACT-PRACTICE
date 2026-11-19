import {useState} from 'react';

function useThrowError() {
    const [error, setError] = useState(null);

    if(error) throw error;
    // This is a custom hook that allows components to throw errors.
    //  It uses the useState hook to manage an error state. 
    // If an error is set, it throws the error, which can be caught by an error boundary in the component tree.
    //  The hook returns the setError function, allowing components to trigger an error when needed.
    return setError; 
}
export default useThrowError;