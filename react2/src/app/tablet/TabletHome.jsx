import React from 'react'
import profile from '../../asset/fff.png';
import web from '../../asset/web.png';
import dev from '../../asset/dev.png';
import { FaUser, FaInbox, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WebSvg from '../../asset/svg/Vector.svg'
import WebSvg1 from '../../asset/svg/Vectors.svg'

const TabletHome = () => {
    return (
        <div className='sm:hidden md:block lg:hidden'>
            <div className='w-full h-[160svh] bg-blacks text-white'>
                <div className='w-full h-[10svh] flex '>
                    <div className='w-[50%] h-full flex items-center justify-start px-4'>
                        <div className='w-[10%] h-full'></div>
                        <h3 className='text-whites font-[600] w-[70%] font-sans capitalize text-[calc(1px_+_1.5svw_+_1.5svh)]'> raymond</h3>
                    </div>
                    <div className='w-[50%] h-full flex justify-evenly items-center'>
                        <div className='w-[30%] h-full'></div>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] cursor-pointer'> <Link to={'/'}> about me</Link></h3>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] cursor-pointer'><Link to={'/project'}> projects</Link></h3>
                        {/* <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] cursor-pointer'> contact me</h3> */}
                    </div>
                </div>
                <div className='w-full h-[40svh] flex items-end'>
                    <div className='w-[50%] h-[80%] flex justify-end'>
                        <div className='w-[80%] h-full  justify-start items-start'>
                            <div className='w-[90%] h-[50%] flex flex-col justify-start items-start space-y-3 py-2'>
                                <div className='w-full h-[5svh]'></div>
                                <h3 className='text-whites w-[100%] font-[600] font-sans capitalize text-[calc(1px_+_1.5svw_+_1.5svh)] leading-[120%]'> hi, i
                                    <span className='text-whites font-[600] font-sans lowercase text-[calc(1px_+_1.5svw_+_1.5svh)]'>
                                        am</span> <br /> oke raymond
                                </h3>
                                <h3 className='text-harsh font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] w-[100%] '> frontend developer</h3>
                            </div>
                            <div className='w-[70%] h-[20%] flex'>
                                <div className='w-[50%] h-full flex justify-center items-center'>
                                    <h3 className='text-whites font-[600] font-sans text-[calc(1px_+_.6svw_+_.6svh)] rounded-full p-1 bg-green w-[95%] h-[40%] flex justify-center items-center text-center cursor-pointer hover:bg-blacks hover:border hover:border-white hover:rounded-full'><Link to={'https://www.dropbox.com/scl/fi/ynzcm7dpz9ne0qlzsrizg/OKE-RAYMOND-JESUTOFUNMI-CV.pdf?rlkey=hjvlzwp45l69ydf865tvigfca&st=y6rxkuxp&dl=0'} target='_blanck'>Download CV</Link> </h3>
                                </div>
                                <div className='w-[50%] h-full flex justify-center items-center'>
                                    <h3 className='text-whites font-[600] font-sans text-[calc(1px_+_.6svw_+_.6svh)] rounded-full p-1s flex justify-center items-center  w-[95%] h-[40%] border border-harsh'><Link to={'/project'}> projects</Link></h3>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='w-[50%] h-full flex justify-start items-center'>
                        <div className='w-full h-[100%]rounded-full flex justify-center items-center'>
                            <img src={profile} alt="img" className='w-[60%] h-auto' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[20svh]'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> About me</h3>
                    </div>
                    <div className='h-[70%] w-full  flex '>
                        <div className='w-[20%] h-full'></div>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] w-full h-full text-center flex justify-center items-center'>
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
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(90%)] h-[35%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <Link ><FaUser className='fill-green text-[calc(1px_+_1.2svw_+_1.2svh)]' /></Link>
                            </div>
                            <div className='w-full h-[38%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.86vw_+_.86vh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>fullName</span><br />
                                    oke raymond jesutofunmi</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(90%)] h-[35%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <Link to={''} target='_blank'><FaInbox className='fill-green text-[calc(1px_+_1.2svw_+_1.2svh)]' /></Link>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites  font-[400] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>email</span><br />
                                    okeraymondjesutofunmi <br />@gmail.com</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(90%)] h-[35%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <Link to={''} target='_blank'><FaTwitter className='fill-green text-[calc(1px_+_1.2svw_+_1.2svh)]' /></Link>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.86vw_+_.86vh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>twitter</span><br />
                                    raymonddev_</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(90%)] h-[35%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <Link to={''} target='_blank'><FaYoutube className='fill-green text-[calc(1px_+_1.2svw_+_1.2svh)]' /></Link>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.86vw_+_.86vh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>linkdedin</span><br />
                                    oke raymond jesutofunmi</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[20svh]'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_1.5svw_+_1.5svh)]'> what i do</h3>
                    </div>
                    <div className='w-full h-[70%] flex justify-center items-center gap-8'>
                        <div className='w-[30%] h-[60%] bg-lightblack'>
                            <div className='w-full h-[30%] flex'>
                                <div className='w-[15%] h-full'></div>
                                <img src={WebSvg} alt="img" />
                            </div>
                            <div className='w-full h-[70%] flex '>
                                <div className='w-[20%] h-full'></div>
                                <h3 className='text-[#535353] font-[600] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'> software development</h3>
                            </div>
                        </div>
                        <div className='w-[30%] h-[60%] bg-lightblack'>
                            <div className='w-full h-[30%] flex'>
                                <div className='w-[15%] h-full'></div>
                                <img src={WebSvg1} alt="img" />
                            </div>
                            <div className='w-full h-[70%] flex '>
                                <div className='w-[20%] h-full'></div>
                                <h3 className='text-[#535353] font-[600] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'> web app development</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[30svh]'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-white font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> my skills</h3>
                    </div>
                    <div className='w-full h-[70%] flex justify-center '>
                        <div className='w-[80%] h-full bg-lightblack flex justify-evenly items-center'>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)] leading-[70%]'> 82% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>JavaScript</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)] leading-[70%]'> 73% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>react</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)] leading-[70%]'> 70% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>express</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)] leading-[70%]'> 70% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)]'>nodejs</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabletHome