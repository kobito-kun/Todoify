import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Post({id, title, description, fetchPosts}) {

  const history = useHistory();

  // eslint-disable-next-line
  const handleClick = () => {
    history.push(`/dashboard/post/${id}`)
  }
  
  const deletePost = () => {
    const headers = {
      headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios.delete(`http://localhost:5000/post/${id}`, headers).then(data => {fetchPosts()})
  }

  return (
    <div className="p-4 select-none overflow-x-hidden hover:scale-105 flex-col duration-300 transform m-2 w-60 h-40 rounded-2xl shadow-lg flex justify-center items-center border">
      <i onClick={() => deletePost()} className="fas fa-trash cursor-pointer"></i>
      <h3 className="text-2xl font-thin truncate">{title}</h3>
      <h10 className="text-xs truncate">{description}</h10>
    </div>
  )
}

export default Post
