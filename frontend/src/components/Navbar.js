import React from 'react'

function Navbar() {
  return (
    <div style={{background: " rgba( 0, 0, 0, 1 )", backdropFilter: "blur(1px)"}} className="w-full fixed top-0 left-0 h-auto flex justify-between items-center p-4 text-white shadow-lg">
      <div>
        Todoify
      </div>
      <div>
        <i className="fas fa-bars"></i> Menu
      </div>
    </div>
  )
}

export default Navbar
