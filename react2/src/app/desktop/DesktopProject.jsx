import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-loading'

const desktopContact = () => {
  return (
    <div className='sm:hidden md:hidden lg:block w-full h-[100svh] bg-blacks'>
      <div className='w-full h-[10svh] flex '>
        <div className='w-[50%] h-full flex items-center justify-start px-4'>
          <div className='w-[10%] h-full'></div>
          <h3 className='text-whites font-[600] w-[70%] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> raymond</h3>
        </div>
        <div className='w-[50%] h-full flex justify-evenly items-center'>
          <div className='w-[30%] h-full'></div>
          <Link to={'/'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> about me</h3></Link>
          <Link to={'/project'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> projects</h3></Link>
          {/* <Link to={'#links'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> contact me</h3></Link> */}
        </div>
      </div>

      <div className='w-full h-[90svh] '>
        <div className='w-full h-[5rem] flex justify-center items-center'>
          <div className='w-[40%] h-full flex justify-center items-center'>
            <h3 className='text-[3rem] text-white uppercase font-poppins'>MY PROJECTS</h3>
          </div>
        </div>
        <div className='w-full h-[40rem] flex justify-center items-center flex-col'>
          <Wave height={'20rem'} width={'20rem'}/>
          <h3 className='text-[2rem] text-whites'> uploading soon.....</h3>
        </div>
      </div>
    </div>
  )
}

export default desktopContact