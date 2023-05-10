import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";
import { removeContact } from "../Redux/action";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { GrDocumentMissing } from "react-icons/gr";
import { Toaster } from "react-hot-toast";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState({});
  let data = undefined;
  const AllContacts = useSelector((store) => store.contacts);
  const dispatch = useDispatch();
  // console.log(AllContacts)

  const togglePopup = (contact) => {
    setSingleContact(contact);

    setIsOpen(!isOpen);
  };
  useEffect(() => {}, [dispatch, AllContacts.length]);
  return (
    <div className="justify-center pt-16 text-gray-50 p-4 w-full ">
      <div className="m-4 flex justify-end ">
        <button className="rounded-md bg-green-600 pt-3 pb-3 pl-3 pr-3 text-xl shadow-lg shadow-green-500">
          <Link to="/contact_form">Add Contact</Link>
        </button>
      </div>
      {AllContacts.length === 0 && (
        <div
          className="text-blue-500"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            padding: "10%",
            margin: "3rem 0",
          }}
        >
          <GrDocumentMissing style={{ fontSize: "4rem" }} />

          <h1 className="text-4xl text-blue-950">No Contacts Found</h1>
        </div>
      )}
      <div
        id="contact_list"
        // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        className="flex flex-col"
      >
        <Toaster position="bottom-center" />
        {AllContacts.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-gray-300 rounded-lg shadow-md m-4 p-4 text-blue-950 flex items-center justify-between border-2 mobile:flex-col"
            >
              <div
                onClick={() => togglePopup(el)}
                className="w-3/4 flex items-center mobile:flex-col"
              >
                <img
                  className="w-20 rounded-full"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC"
                  alt=""
                />
                <div className="p-4">
                  {isOpen && (
                    <Popup close={() => togglePopup(data)} el={singleContact} />
                  )}
                </div>{" "}
                <div className="text-left mobile:text-sm">
                  <p>
                    <span className="font-extrabold">First Name :</span>{" "}
                    {el.first_name}
                  </p>
                  <p>
                    <span className="font-extrabold">Last Name :</span>{" "}
                    {el.last_name}
                  </p>
                  {/* <p>Mobile   : {el.mob}</p> */}
                  <p>
                    <span className="font-extrabold">Status :</span>{" "}
                    {el.status === "active" ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mobile:mt-4">
                <Link to={`edit/${el.id}`}>
                  <button className="rounded bg-green-500 p-2 ">
                    <AiFillEdit style={{ color: "white" }} />
                  </button>
                </Link>

                <button
                  onClick={() => dispatch(removeContact(el.id))}
                  className="rounded p-2 bg-red-600 text-white"
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
