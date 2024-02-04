import React from 'react'
import profile from '../asset/fff.png'
// import web from '../asset/web.png'
// import dev from '../asset/dev.png'
// import {ReactComponent as Web} from '../asset/svg/Vector.svg'

const Desktop = () => {
    return (
        <div className='sm:hidden md:block lg:block'>
            <div className='w-full h-[250svh] bg-blacks text-white'>
                <div className='w-full h-[10svh] flex '>
                    <div className='w-[50%] h-full flex items-center justify-start px-4'>
                        <div className='w-[10%] h-full'></div>
                        <h3 className='text-whites font-[600] w-[70%] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> raymond</h3>
                    </div>
                    <div className='w-[50%] h-full flex justify-end items-center px-2 gap-3'>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> about me</h3>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> projects</h3>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> contact me</h3>
                    </div>
                </div>
                <div className='w-full h-[10svh]'></div>
                <div className='w-full h-[60svh] flex'>
                    <div className='w-[50%] h-full flex justify-end'>
                        <div className='w-[60%] h-full flex flex-col justify-start items-center'>
                            <div className='w-full h-[50%] flex flex-col justify-end items-center space-y-3 py-2'>
                                <h3 className='text-whites w-[100%] font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> hi,i
                                    <span className='text-whites font-[600] font-sans lowercase text-[calc(1px_+_2svw_+_2svh)]'>
                                        am</span> <br /> oke raymond
                                </h3>
                                <h3 className='text-harsh font-[600] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)] w-[100%] '> frontend developer</h3>
                            </div>
                            <div className='w-full h-[20%] flex'>
                                <div className='w-[50%] h-full flex justify-center items-center'>
                                    <h3 className='text-whites font-[600] font-sans text-[calc(1px_+_.8svw_+_.8svh)] rounded-full p-1 bg-green w-[95%] h-[50%] flex justify-center items-center text-center cursor-pointer hover:bg-blacks hover:border hover:border-white hover:rounded-full'> Download CV</h3>
                                </div>
                                <div className='w-[50%] h-full flex justify-center items-center'>
                                    <h3 className='text-whites font-[600] font-sans text-[calc(1px_+_.8svw_+_.8svh)] rounded-full p-1 border border-whites flex justify-center items-center  w-[95%] h-[50%] cursor-pointer hover:bg-harsh'> projects</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-full flex justify-start items-center'>
                        <img src={profile} alt="img" className='object-contain w-[90%] h-full' />
                    </div>
                </div>
                <div className='w-full h-[30svh]'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> About me</h3>
                    </div>
                    <div className='h-[70%] w-full  flex '>
                        <div className='w-[20%] h-full'></div>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)] w-full h-full text-center flex justify-center items-center'>
                            I am Oke Raymond, a frontend developer from
                            Nigeria. I create beautiful and intuitive user interfaces
                            that are both functional and user-friendly. I have experience
                            working with HTML, CSS, JavaScript, and React.
                        </h3>
                        <div className='w-[20%] h-full'></div>
                    </div>
                </div>
                <div className='w-full h-[30svh] flex'>
                    <div className='w-[10%] h-full'></div>
                    <div className='w-[80%] h-full flex gap-5'>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2'>
                            <div className='w-[calc(50%)] h-[60%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <div className='w-[30%] h-[40%] rounded-full bg-green'></div>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>fullName</span><br />
                                    oke raymond jesutofunmi</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2'>
                            <div className='w-[calc(50%)] h-[60%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <div className='w-[30%] h-[40%] rounded-full bg-green'></div>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites  font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>email</span><br />
                                    okeraymondjesutofunmi <br />@gmail.com</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2'>
                            <div className='w-[calc(50%)] h-[60%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <div className='w-[30%] h-[40%] rounded-full bg-green'></div>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>twitter</span><br />
                                    raymonddev_</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2'>
                            <div className='w-[calc(50%)] h-[60%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <div className='w-[30%] h-[40%] rounded-full bg-green'></div>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>linkdedin</span><br />
                                    oke raymond jesutofunmi</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[10%] h-full'></div>
                </div>
                <div className='w-full h-[50svh] border border-white'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> what i do</h3>
                    </div>
                    <div className='w-full h-[70%] border border-white'>
                        <div className='w-[30svw] h-[80%] border border-white bg-lightblack'>
                            <div className='w-full h-[30%] flex'>
                                <div className='w-[15%] h-full'></div>
                                {/* <Web/> */}
                            </div>
                            <div className='w-full h-[70%] border border-white flex '>
                                <div className='w-[20%] h-full'></div>
                                <h3 className='text-[#535353] font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> software development</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop