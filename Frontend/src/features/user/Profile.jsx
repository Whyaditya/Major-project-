import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const fileRef = useRef(null);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [pic, setPic] = useState();
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const nav = useNavigate();
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  // useEffect(() => {}, []);

  const handleFileUpload = (pic) => {
    setLoading(true);
    if (pic === undefined) {
      setLoading(false);
      return (
        <div class="alert alert-danger" role="alert">
          empty image!!!!! please select an image!
        </div>
      );
    }

    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dq5bhyeii");
      fetch("https://api.cloudinary.com/v1_1/dq5bhyeii/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
          setLoading(false);
        });
    } else {
      <div class="alert alert-danger" role="alert">
        invalid img plz try agin!!!!
      </div>;
      return;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Check if the password field is empty
      if (!formData.password) {
        setLoading(false);
        setError("Please enter a password to make changes.");
        return;
      }

      const updatedFormData = { ...formData };

      if (!updatedFormData.name) {
        updatedFormData.name = user.name;
      }

      if (!updatedFormData.phone) {
        updatedFormData.phone = user.phone;
      }
      if (!updatedFormData.city) {
        updatedFormData.city = user.city;
      }

      const res = await fetch(
        `http://localhost:8080/api/users/update/${user.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        setLoading(false);
        setError(data.message || "Failed to update user details");
        return;
      }

      const data = await res.json();
      // Store updated user data in localStorage
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      setUpdateSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    // try {
    //     setLoading(true);
    //     const res = await fetch('/api/auth/signout');
    //     const data = await res.json();
    //     if (data.success === false) {
    //         setLoading(false);
    //         setError(data.message);
    //         return;
    //     }
    //     setLoading(false);
    //     nav('/');
    // } catch (error) {
    //     setError(data.message);
    // }

    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => handleFileUpload(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            src={user.pic}
            alt="profile"
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          />

          <input
            type="email"
            placeholder="email"
            id="email"
            defaultValue={user.email}
            className="border p-3 rounded-lg"
            disabled
          />
          <input
            type="text"
            placeholder="name"
            defaultValue={user.name}
            id="name"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="phone"
            defaultValue={user.phone}
            onChange={handleChange}
            id="phone"
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
            id="password"
            className="border p-3 rounded-lg"
          />
          <div class="col-md-4">
            <label for="inputState " class="form-label">
              your city
            </label>
            <select
              id="city"
              class="form-select"
              onChange={handleChange}
              defaultValue={user.city}
              value={formData.city}
            >
              <option value="kolkata">kolkata</option>
              <option value="mumbai">mumbai</option>
              <option value="delhi">delhi</option>
              <option value="patna">patna</option>
            </select>
          </div>

          <button
            disabled={loading}
            className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
        <div className="flex justify-between mt-5">
          <span
            onClick={handleDeleteUser}
            className="bg-red-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95 cursor-pointer"
          >
            Delete account
          </span>
          <span
            onClick={handleSignOut}
            className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95 cursor-pointer"
          >
            Sign out
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
