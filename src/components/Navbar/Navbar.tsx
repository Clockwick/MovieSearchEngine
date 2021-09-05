import React from 'react';
import logo from 'logo.svg'

export const Navbar: React.FC = (props): JSX.Element => {
  return (
      <nav className="bg-gray-800">
        <div className="w-screen mx-auto px-2">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex items-stretch justify-start">

                    <img className="w-48" src={logo}/>
                    
                </div>
            </div>
        </div>
      </nav>
  )
};

