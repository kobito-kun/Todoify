import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { CheckLoggedIn } from '../utils/utils.js';
import axios from 'axios';

import Navbar from '../components/Navbar.js';
import AddPost from '../components/AddPost.js';
import Post from '../components/Post.js';

function SectionPage({match}) {

  const history = useHistory();
  const [toggleSection, setToggleSection] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const fetchPosts = () => {
    const headers = {
      headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios.get(`http://localhost:5000/post/many/${match.params.id}`, headers).then(data => {console.log(data); setPosts(data.data)})
  }

  useEffect(() => {
    if(!CheckLoggedIn()) return history.push("/login");
    fetchPosts();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {toggleSection
      ?
      <AddPost fetchPosts={fetchPosts} sectionID={match.params.id} toggleSection={toggleSection} setToggleSection={setToggleSection} />
      :
      ""
      }
      <Navbar />
      <section className="mt-10 p-10">
        <div className="flex justify-between items-center">
          <div onClick={() => history.goBack()}>
            back
          </div>
          <button className="px-4 py-2 bg-black shadow-lg text-white rounded-lg" onClick={() => setToggleSection(!toggleSection)}>Add a Post</button>
        </div>
        {posts.length > 0
        ?
        <div className="flex flex-wrap justify-center items-center">
          {posts.map(x => (
              <Post fetchPosts={fetchPosts} id={x._id} title={x.title} key={x._id} description={x.description} />
          ))}
        </div>
        :
        <h3 className="p-1  0 text-center text-2xl font-bold">Start by adding one!</h3>
        }
      </section>
    </div>
  )
}

export default SectionPage
