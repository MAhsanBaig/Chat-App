import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h[550px] p-3 justify-center min-w-96  rounded-lg  overflow-hidden bg-gray-400  bg-clip-padding  backdrop-filter  backdrop-blur-lg bg-opacity-0 '>
      <Sidebar/>
      <MessageContainer/>

    </div>
  )
}

export default Home