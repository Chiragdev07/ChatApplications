import React from 'react'
import Sidebar from '../../Componets/Sidebar/Sidebar';
import MessageComponets from '../../Componets/messages/MessageComponets';


const Home = () => {
  return (
    <div className='flex sm:h-[450px]  md:h-[550px]  rounded-lg  md:overflow-hidden bg-gray-400 bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-0' id='Home_Page '>
       
      <Sidebar/>
      <MessageComponets/>
    </div>
  )
}

export default Home