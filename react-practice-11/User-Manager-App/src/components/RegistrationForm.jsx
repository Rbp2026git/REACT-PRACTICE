import { useState } from "react";

function RegistrationForm({onAddUser}) {

    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.age) {
            setError("Sahi field bharna jaruri hai");
            return;
        }

        onAddUser(formData);
        setFormData({
            name: '',
            email: '',
            age: ''
        });
        setError('');
    }

    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>📝 Register User (Multiple Inputs → Single State Object)</h3>
            <form>
                <input
                    className="box-border w-full p-2 mb-2 rounded-md block border border-[#ccc]"
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    className="box-border w-full p-2 mb-2 rounded-md block border border-[#ccc]"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    className="box-border w-full p-2 mb-2 rounded-md block border border-[#ccc]"
                    type="number"
                    name="age"
                    value={formData.age}
                    placeholder="Age"
                    onChange={handleChange}
                />

                <button className="px-4 py-2 rounded-md border-0 bg-indigo-600 text-white cursor-pointer"
                    onClick={handleSubmit}
                >
                    Add User
                </button>
            </form>

            {error && <p className = "text-green-600 text-sm">⚠️ {error}</p>}
        </div>
    );
}
export default RegistrationForm;