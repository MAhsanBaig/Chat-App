import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations  from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const[search,setsearch]=useState("")
  const {setSelectedConversation}= useConversation()
  const{conversations}=useGetConversations()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search)return
    if(search.length < 3){
      return toast.error("search must be 3 character long")
    }
    const conversation =conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setsearch('')
    }else{
      toast.error("No such user found!")
    }
  }
  return (
    <form  onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search__' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle  bg-sky-500 text-white mx-3' >
        <IoSearchSharp className='w-6 h-6 outline-none '/>
        </button>
    </form>
  )
}

export default SearchInput