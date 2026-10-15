function TextField ({label, value, onChange, type, children}) {
    return (
        <label className="block mb-4 text-bold">
            {label}:
            <input  
            className= "border border-gray-300 rounded-md p-2 w-full"
            type={type} 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
            {children}
        </label>
    );
}
export default TextField;