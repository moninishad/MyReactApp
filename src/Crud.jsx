import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Crud() {
  const [post, setPost] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const API_URL = "https://dummy-json.mock.beeceptor.com/posts";


  // Read (GET)
  const fetchPost = async () => {
    const res = await axios.get(API_URL);
    setPost(res.data);
  };

  const handleSubmit = async () => {
    if (!newTitle.trim()) return;


    // Update
    try {
      if (editTitle) {
        alert(editTitle);
        const res = await axios.patch(`${API_URL}/${editTitle}`, {
          id: editTitle,
          title: newTitle,
          body: "Updated body",
          userId: 1,
        });

        setPost(post.map((p) => (p.id === editTitle ? p : res.data)));
        setEditTitle(null);
      } else {
        const res = await axios.post(API_URL, {
          id: editTitle,
          title: newTitle,
          body: "This is a test body",
          userId: 1,
        });
        setPost([res.data, ...post]);
        setEditTitle(null);
      };



// Create a new (post)
      const res = await axios.post(API_URL, { title: newTitle });

      const newPost = {
        id: Date.now(),
        title: newTitle,
      };

      setPost([newPost, ...post]);
      setNewTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (page) => {
    setEditTitle(page.id);
    setNewTitle(page.title);
  };


  // Delete 

  const handleDelete =async (id) => {
    const res =await axios.delete(`${API_URL}/${id}`);
    setPost(post.filter((p) => p.id !== id));
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="max-w-2xl    mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 ">
      <div className="font-semibold text-blue-500 text-center ">
        CRUD Operations
        <br />
        <span className="text-pink-500 ">
          (Create [get], Read [post], Update [patch], Delete [deletePost])
        </span>
      </div>

      <div className="font-bold text-3xl pb-5 text-center">CRUD Operations</div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a new title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-gray-300 rounded-md mr-2 p-2 w-full"
        />
        <button
          onClick={handleSubmit}
          className={`${
            editTitle
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-md`}
        >
          {editTitle ? "Update" : "Create"}
        </button>
      </div>
      <div className=" italic text-xl ">
        {post.map((page) => (
          <div key={page.id}>
            <div className="flex border border-gray-100 bg-gray-100 rounded-md shadow my-5 p-2 justify-between">
              <div>{page.title}</div>
              <div className="space-x-4 ">
                <button className="bg-green-500 text-white rounded-md  px-3"
                onClick={() => handleEdit(page)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white rounded-md  px-4"
                onClick={() => handleDelete(page.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crud;
