import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { CheckLoggedIn } from '../utils/utils.js';
import axios from 'axios';

import Navbar from '../components/Navbar.js';
import AddPost from '../components/AddPost.js';

function SectionPage({match}) {

  const history = useHistory();
  const [toggleSection, setToggleSection] = useState(true);
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
      <section className="mt-14">
        {posts.map(x => (
          <div>
            {x.title}
          </div>
        ))}
      </section>
    </div>
  )
}

export default SectionPage
