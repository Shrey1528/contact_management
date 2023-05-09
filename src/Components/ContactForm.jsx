import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action";
function ContactForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mob: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(addContact(form));
  }

  return (
    <div className="w-1/3 p-5 pt-10 pb-10 m-auto rounded-md backdrop-blur-md bg-white/30 shadow-md shadow-white ">
      <h2 className="text-3xl mb-5 font-bold text-blue-900">Create Contact</h2>
      <div className="mb-4">
        {/* <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label> */}
        <input
          className="w-11/12 border border-gray-400 p-2 rounded-md"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>
      <div className="mb-4">
        {/* <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label> */}
        <input
          className="w-11/12 border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
      <div className="mb-4">
        {/* <label className="block font-bold mb-2" htmlFor="last-name">
          Mobile Number
        </label> */}
        <input
          className="w-11/12 border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="number"
          name="mob"
          min="10"
          max="10"
          value={form.mob}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
      </div>
      <div className="mb-4">
        {/* <label className="block font-bold mb-2" htmlFor="status">
          Status
        </label> */}
        <select
          className="w-11/12 border border-gray-400 p-2 rounded-md"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
}

export default ContactForm;
