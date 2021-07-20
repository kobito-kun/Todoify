import React, {useState, useRef} from 'react'
import Slide from 'react-reveal/Slide';
import axios from 'axios'

function AddPost({fetchPosts, sectionID, toggleSection, setToggleSection}) {

  const [clicked, setClicked] = useState(false);
  const titleInput = useRef();
  const descriptionInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    const object = {
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      section: sectionID,
    }
    const headers = {
      headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios.post("http://localhost:5000/post/", object, headers).then(data => {
      console.log(data)
      if(data.status === 200){
        fetchPosts();
        setToggleSection(!toggleSection);
        setClicked(false);
      }
    })
  }

  return (
    <div className="fixed z-10 h-screen w-screen filter top-0 left-0" style={{background: "	rgb(0, 0, 0, 0.4)"}}>
      <div className="fixed left-2/4 top-2/4" style={{transform: "translate(-50%, -50%)"}}>
        <Slide top duration={1000}>
          <div className="p-10 rounded-lg shadow-lg bg-white">
            <i onClick={() => setToggleSection(!toggleSection)} className="cursor-pointer fas fa-times absolute top-5 right-5"></i>
            <h3 className="font-bold text-2xl">
              Add a Post
            </h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input ref={titleInput} className="outline-none focus:border-black duration-300 border-blue-500 border-b my-1 w-full px-4 py-2" placeholder="Section Name..." />
              <input ref={descriptionInput} className="outline-none focus:border-black duration-300 border-blue-500 border-b my-1 w-full px-4 py-2" placeholder="Brief Description..." />
              <button type="submit" className="px-4 py-2 w-full bg-blue-500 rounded-lg shadow-lg my-1 text-white font-bold flex items-center justify-center">
                {clicked
                ?
                <svg className="animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                :
                ""
                }
                Create
              </button>
            </form>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default AddPost
