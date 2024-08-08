import React from 'react'
import profile from '../../asset/fff.png'
import web from '../../asset/web.png'
import dev from '../../asset/dev.png';
import { Link } from 'react-router-dom';
import { FaUser, FaInbox, FaTwitter, FaYoutube } from 'react-icons/fa';
import WebSvg from '../../asset/svg/vector.svg'
import WebSvg1 from '../../asset/svg/vectors.svg'


const Desktop = () => {
    return (
        <div className='sm:hidden md:hidden lg:block'>
            <div className='w-full h-[260svh] bg-blacks text-white'>
                <div className='w-full h-[10svh] flex '>
                    <div className='w-[50%] h-full flex items-center justify-start px-4'>
                        <div className='w-[10%] h-full'></div>
                        <h3 className='text-whites font-[600] w-[70%] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> raymond</h3>
                    </div>
                    <div className='w-[50%] h-full flex justify-evenly items-center'>
                        <div className='w-[30%] h-full'></div>
                        <Link to={'#'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> about me</h3></Link>
                        <Link to={'/project'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> projects</h3></Link>
                       {/* <Link to={'#links'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> contact me</h3></Link> */}
                    </div>
                </div>
                <div className='w-full h-[10svh]'></div>
                <div className='w-full h-[60svh] flex'>
                    <div className='w-[50%] h-full flex justify-end'>
                        <div className='w-[80%] h-full  justify-start items-start'>
                            <div className='w-[60%] h-[50%] flex flex-col justify-start items-start space-y-3 py-2'>
                                <div className='w-full h-[5svh]'></div>
                                <h3 className='text-whites w-[100%] font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)] leading-[120%]'> hi, i
                                    <span className='text-whites font-[600] font-sans lowercase text-[calc(1px_+_2svw_+_2svh)]'>
                                        'm</span> <br /> oke raymond
                                </h3>
                                <h3 className='text-harsh font-[600] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)] w-[100%] '> frontend developer</h3>
                            </div>
                            <div className='w-[70%] h-[20%] flex'>
                                <div className='w-[50%] h-full flex justify-center items-center'>
                                    <h3 className='text-whites font-[600] font-sans text-[calc(1px_+_.8svw_+_.8svh)] rounded-full p-1 bg-green w-[95%] h-[50%] flex justify-center items-center text-center cursor-pointer hover:bg-blacks hover:border hover:border-white hover:rounded-full'><Link to={'https://www.dropbox.com/scl/fi/ynzcm7dpz9ne0qlzsrizg/OKE-RAYMOND-JESUTOFUNMI-CV.pdf?rlkey=hjvlzwp45l69ydf865tvigfca&st=y6rxkuxp&dl=0'} target='_blanck'>Download CV</Link> </h3>
                                </div>
                                <div className='w-[50%] h-full flex justify-center items-center'>
                                    <h3 className='text-whites font-[600] font-sans text-[calc(1px_+_.8svw_+_.8svh)] rounded-full p-1s flex justify-center items-center  w-[95%] h-[50%] cursor-pointer border border-harsh hover:bg-harsh'><Link to={'/project'}> projects</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-full flex justify-start items-start'>
                        <div className='w-[70%] h-[100%] rounded-full flex justify-center items-start'>
                            <img src={profile} alt="img" className='object-contain w-[90%] h-[80%]' />
                        </div>
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
                            working with HTML, CSS, JavaScript, React JS and Next JS Framework.
                        </h3>
                        <div className='w-[20%] h-full'></div>
                    </div>
                </div>
                <div className='w-full h-[30svh] flex'>
                    <div className='w-[10%] h-full'></div>
                    <div className='w-[80%] h-full flex gap-5'>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4' id='links'>
                            <div className='w-[calc(50%)] h-[50%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <Link><FaUser className='fill-green text-[calc(1px_+_1.5svw_+_1.5svh)] cursor-pointer' /></Link>
                            </div>
                            <div className='w-full h-[38%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>fullName</span><br />
                                    oke raymond jesutofunmi</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(50%)] h-[50%] bg-lightblack  flex justify-center items-center rounded-full'>
                                <FaInbox className='fill-green text-[calc(1px_+_1.5svw_+_1.5svh)] cursor-pointer' />
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites  font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>email</span><br />
                                    okeraymondjesutofunmi <br />@gmail.com</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(50%)] h-[50%] bg-lightblack  flex justify-center items-center rounded-full'>
                               <Link  to={'https://twitter.com/raymonddev_'} target='_blank'> <FaTwitter  className='fill-green text-[calc(1px_+_1.5svw_+_1.5svh)] cursor-pointer' /></Link>
                            </div>
                            <div className='w-full h-[40%]'>
                                <h3 className='text-whites font-[400] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] text-center'>
                                    <span className='text-whites font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>twitter</span><br />
                                    raymonddev_</h3>
                            </div>
                        </div>
                        <div className='w-[23%] h-full flex flex-col justify-center items-center p-2 gap-4'>
                            <div className='w-[calc(50%)] h-[50%] bg-lightblack  flex justify-center items-center rounded-full'>
                            <Link to={'https://youtube.com/@okeraymond?si=TT2vu6tv-_QMyHje'} target='_blank'><FaYoutube className='fill-green text-[calc(1px_+_1.5svw_+_1.5svh)] cursor-pointer' /></Link>
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
                <div className='w-full h-[5svh] '></div>
                <div className='w-full h-[50svh]'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> what i do</h3>
                    </div>
                    <div className='w-full h-[70%] flex justify-center items-end gap-8'>
                        <div className='w-[30svw] h-[80%] bg-lightblack'>
                            <div className='w-full h-[30%] flex'>
                                <div className='w-[15%] h-full'></div>
                                <img src={WebSvg} alt="img" className='w-[15%] h-auto' />
                            </div>
                            <div className='w-full h-[70%] flex '>
                                <div className='w-[20%] h-full'></div>
                                <h3 className='text-[#535353] font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> software development</h3>
                            </div>
                        </div>
                        <div className='w-[30svw] h-[80%] bg-lightblack'>
                            <div className='w-full h-[30%] flex'>
                                <div className='w-[15%] h-full'></div>
                                <img src={WebSvg1} alt="img" className='w-[15%] h-auto' />
                            </div>
                            <div className='w-full h-[70%] flex '>
                                <div className='w-[20%] h-full'></div>
                                <h3 className='text-[#535353] font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> web app development</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[10svh]'></div>
                <div className='w-full h-[50svh]'>
                    <div className='w-full h-[30%] flex justify-center items-center'>
                        <h3 className='text-white font-[600] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> my skills</h3>
                    </div>
                    <div className='w-full h-[70%] flex justify-center '>
                        <div className='w-[80%] h-full bg-lightblack flex justify-evenly items-center'>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_3svw_+_3svh)] leading-[70%]'> 82% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>JavaScript</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_3svw_+_3svh)] leading-[70%]'> 78% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>reactJS</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_3svw_+_3svh)] leading-[70%]'> 73% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>expressJS</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_3svw_+_3svh)] leading-[70%]'> 70% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>nodeJS</span></h3>
                            <h3 className='text-[#4F4F4F] font-[700] font-sans capitalize text-[calc(1px_+_3svw_+_3svh)] leading-[70%]'> 70% <br />
                                <span className='text-green font-[700] font-sans capitalize text-[calc(1px_+_1svw_+_1svh)]'>NextJS</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop