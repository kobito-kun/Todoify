import React from 'react';
import {useHistory} from 'react-router-dom';

function Section({id, title, description}) {

  const history = useHistory();

  const handleClick = () => {
    history.push(`/dashboard/section/${id}`)
  }

  return (
    <div onClick={() => handleClick()} className="p-4 select-none overflow-x-hidden hover:scale-105 flex-col duration-300 transform m-2 w-60 h-40 rounded-2xl shadow-lg flex justify-center items-center border">
      <h3 className="text-2xl font-thin truncate">{title}</h3>
      <h10 className="text-xs truncate">{description}</h10>
    </div>
  )
}

export default Section
