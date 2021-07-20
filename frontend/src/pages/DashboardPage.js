import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { CheckLoggedIn } from '../utils/utils.js';
import axios from 'axios';

import AddSection from '../components/AddSection.js';
import Section from '../components/Section.js';
import Navbar from '../components/Navbar.js';

function Dashboard() {

  const history = useHistory();
  const [sections, setSections] = useState([]);
  const [toggleSection, setToggleSection] = useState(false);
  
  const fetchSections = () => {
    const headers = {
      headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios.get("http://localhost:5000/section", headers).then(data => { setSections(data.data)})
  }

  useEffect(() => {
    if(!CheckLoggedIn()) return history.push("/login");
    fetchSections();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {toggleSection
      ?
        <AddSection toggleSection={toggleSection} setToggleSection={setToggleSection} />
      :
        ""
      }
      <Navbar />
      <section className="p-10 mt-10">
        <div className="flex justify-between items-center">
          <div>

          </div>
          <button className="px-4 py-2 bg-black shadow-lg text-white rounded-lg" onClick={() => setToggleSection(!toggleSection)}>Add a Section</button>
        </div>

        {sections.length > 0 
        ? 
          <div className="flex flex-wrap justify-center items-center">
            {sections.map(x => (
              <Section id={x._id} key={x._id} title={x.title} description={x.description} />
              ))
            }
          </div>
        : 
          "Start by adding a section"}
      </section>

    </div>
  )
}

export default Dashboard
