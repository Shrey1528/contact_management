import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action";
import { Toaster } from "react-hot-toast";

function EditContact() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const AllContact = useSelector((store) => store.contacts);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(editContact({ id, ...form }));
  }

  useEffect(() => {
    AllContact.filter((el) => el.id === id && setForm(el));
  }, [AllContact, id]);

  return (
    <div className="w-1/3 p-5 pt-10 pb-10 m-auto rounded-md backdrop-blur-md bg-white/30 shadow-md shadow-white mobile:w-11/12">
      <h2 className="text-3xl mb-5 font-bold text-blue-900">Edit Contact</h2>
      <Toaster position="bottom-center" />
      <div className="mb-4">
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="number"
          name="mob"
          value={form.mob}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
      </div>
      <div className="mb-4">
        <select
          className="w-full border border-gray-400 p-2 rounded-md"
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

export default EditContact;
