import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {
        dispatch(addContact(form))
    }

    return (
        <div className="w-full md-w-6/12 lg-w-6/12 sm-w-full xs-w-full  mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold mb-4"> Create Contact</h2>
            <div className="mb-4 w-full flex flex-row justify-content:space-between align-items:center">
                <label className="w-2/6 xs-w-full text-left block font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-4/6 xs-w-full border border-gray-400 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 w-full flex flex-row justify-content:space-between align-items:center">
                <label className="block text-left xs-w-6/6 w-2/6 font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-4/6 border xs-w-6/6 border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 w-full  flex flex-row justify-content:space-between align-items:center">
                <label className="block text-left sm-w-full xs-w-6/6 w-2/6 font-bold mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-4/6 xs-w-6/6 sm-w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="number"
                    name="mob"
                    maxlength="10"
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 w-full  flex flex-row justify-content:space-between align-items:center">
                <label className="block text-left xs-w-full  w-2/6 font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-4/6 border xs-w-full border-gray-400 p-2 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Add Contact
            </button>
        </div>
    );
}


export default ContactForm