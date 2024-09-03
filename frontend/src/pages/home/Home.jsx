import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    
    <div className='flex w-1/2 mx-auto   sm:h-[450px] md:h[550px] p-3 rounded-lg  overflow-hidden bg-gray-400  bg-clip-padding  backdrop-filter  backdrop-blur-lg bg-opacity-0  mt-32 '>
      <Sidebar/>
      <MessageContainer/>

    </div>
  )
}

export default Home