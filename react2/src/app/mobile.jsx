import React, { useEffect, useRef } from 'react'
import profile from '../asset/fff.png'
import devLogo from '../asset/dev.png'
import webLogo from '../asset/web.png'

import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'
import { FaAlignJustify, FaTimes, FaExternalLinkAlt ,FaGithub, FaTwitch, FaYoutube, FaTwitter} from 'react-icons/fa'
import { onSideNav } from '../redux/slice'
import { SiMongoose, SiJavascript, SiReact, SiCss3, SiRedux, SiMongodb, SiTailwindcss, SiHtml5, SiExpress } from 'react-icons/si'
import softwareLogo from '../asset/Vector.png'

const mobile = () => {
    const show = useSelector(function (state) {
        return state.mobile
    })
    const dispatch = useDispatch()
    // const urlLocation = useLocation()
    // const currentLocation = urlLocation.pathname
    // currentLocation = useRef()

    // useEffect(function(){
    //     if(urlLocation.pathname !== currentLocation){
    //         dispatch(onSideNav())
    //     }
    // },[])





    return (
        <div className='w-full h-full sm:block md:hidden lg:hidden'>
            <div className={`w-full h-[285svh] bg-[#171717] relative transition-all duration-[2s]  ${show ? `opacity-1` : `opacity-[.9]`}`}>
                <div className='w-full h-[10svh] flex justify-between items-center px-3 top-0 sticky bg-blacks z-[2]'>
                    <h1 className='text-white capitalize font-[700] text-[calc(1px_+_3svw_+_3svh)] font-sans'>raymond</h1>
                    <FaAlignJustify fill='white' className={`transition-all duration-[2s] ${show ? `opacity-1` : `opacity-0`} text-[calc(1px_+_2svw_+_2svh)]`} onClick={function () {
                        dispatch(onSideNav())
                        // console.log(location.pathname)
                    }} />

                    <div className={`transition-all duration-[2s] ${show ? styles.close : styles.open}`}>
                        <div className='w-full h-[20%]'> <FaTimes fill='black' className='text-[calc(1px_+_4svw_+_4svh)] p-2 ' onClick={function () {
                            dispatch(onSideNav())
                        }} />
                        </div>
                        <div className='w-full h-[80%] flex flex-col justify-center items-center'>
                            <Link to={'/projects'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>projects</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />
                            <div className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>projects</h3>
                                <FaExternalLinkAlt />
                            </div>
                            <hr className='w-[90%] border-1 border-black' />

                            <div className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>blog</h3>
                                <FaExternalLinkAlt />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[30svh] flex border border-white'>
                    <div className='w-[50%] h-full'>
                        <div className='w-full h-[5%]'></div>
                        <div className='w-full h-[50%]   px-3'>
                            <h1 className='text-[calc(1px_+_2.2svw_+_2.2svh)] font-sans font-[700] capitalize text-white'>
                                hi, i <span className='lowercase'>am</span> <br /> <span className='text-[calc(1px_+_1.7svw_+_1.7svh)] tracking-[1px]  border border-white'>oke raymond </span> 
                            </h1>
                            <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-sans font-[300] capitalize text-[#828282]'>
                                frontend developer
                            </h3>
                        </div>
                        <div className='w-full h-[20%] flex gap-3 justify-center items-start border border-white'>
                            <div className=' w-[25svw] h-[3.5svh] bg-[#27AE60] rounded-full flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] capitalize font-[500] font-sans text-white'>donwload CV</h3>
                            </div>
                            <div className=' w-[20svw] h-[3.5svh]  rounded-full flex justify-center items-center border border-white'>
                                <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] capitalize font-[500] font-sans text-white'>projects</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-full flex justify-center items-start border border-white'>
                        <div className='w-[80%] h-[60%] flex justify-center items-center'>
                            <img src={profile} alt="img" className='w-full  object-cover' />
                        </div>
                    </div>
                </div>
                <div className='w-fulll h-[5svh] flex justify-center items-center'>
                    <hr className='border-[px] border-white rounded-full w-[85%]' />
                </div>
                <div className='w-full h-[75svh]'>
                    <div className='w-full h-[15%] text-center'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white underline underline-offset-4'>about me</h3>
                    </div>
                    <div className='w-full h-[85%] flex justify-center text-center'>
                        <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[400] capitalize text-green w-[90%]'>
                            I am Oke Raymond, a frontend developer from
                            Nigeria. I create beautiful and intuitive user interfaces
                            that are both functional and user-friendly. I have experience
                            working with HTML, CSS, JavaScript, and React. I am committed
                            to delivering high-quality work and thrive in fast-paced environments.
                            I am confident in my ability to work well with others and contribute
                            to life-changing projects. I believe that technology has the power
                            to change the world for the better, and I am excited to be a part
                            of that change. If you have any further questions or would like
                            to learn more about my experience, please don't hesitate to ask.</h3>
                    </div>
                </div>
                <div className='w-full h-[85svh] flex flex-col justify-center items-center relative'>
                    <div className='w-full h-[10%] text-center'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white underline underline-offset-4'>stacks</h3>
                    </div>
                    <div className='w-[90%] h-[70%] grid grid-cols-3 grid-rows-3 justify-center items-center gap-4 z-[1]'>
                        <SiHtml5 className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] rounded-md fill-[#F06529] shadow-sm shadow-white border border-white p-2' />
                        <SiCss3 className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#3C5D95]' />
                        <SiJavascript className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[yellow]' />
                        <SiReact className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#80DEEA]' />
                        <SiMongodb className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#4DB33D]' />
                        <SiExpress className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#4db33d]' />
                        <SiMongoose className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#B71C1C]' />
                        <SiRedux className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#faf9f6]' />
                        <SiTailwindcss className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_17svh)] text-[calc(1px_+_11svw_+_11svh)] border border-white p-2 shadow-sm shadow-white rounded-md fill-[#80DEEA]' />
                    </div>
                    <div className='w-full h-[15%]'></div>
                </div>
                <div className='w-full h-[40svh] flex flex-col'>
                    <div className='w-full h-[20%] text-start px-4'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white underline underline-offset-[3px]'>my interests</h3>
                    </div>
                    <div className='w-full h-[70%] flex justify-center items-start gap-1'>
                        <div className='w-[48%] h-[68%] bg-[#212121] flex flex-col justify-center items-start'>
                            <img src={softwareLogo} alt="logo" className='px-3' />
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] px-3 font-[500] font-sans text-[#535353]'>website development</h3>
                        </div>
                        <div className='w-[48%] h-[68%] bg-[#212121] flex flex-col justify-center items-start'>
                            <img src={devLogo} alt="logo" className='px-3' />
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] px-2 font-[500] font-sans text-[#535353]'>software development</h3>
                        </div>
                    </div>
                    <div className='w-full h-[10%]'></div>
                </div>
                <div className='w-full h-[20svh]'>
                    <div className='w-full h-[40%] text-center px-4'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white'>contacts</h3>
                    </div>
                    <div className='w-full h-[60%] flex justify-evenly items-center'>
                       <Link to={'https://twitter.com/raymonddev_'} target='_blank'><FaTwitter className='text-[calc(1px_+_4svw_+_4svh)] border border-white rounded-lg p-1 fill-[#1DA1F2]'/></Link>
                       <Link to={'https://github.com/Redmond01'} target='_blank'><FaGithub className='text-[calc(1px_+_4svw_+_4svh)] border border-white rounded-lg p-1 fill-whites'/></Link>
                       <Link to={'https://youtube.com/@okeraymond?si=TT2vu6tv-_QMyHje'} target='_blank'><FaYoutube className='text-[calc(1px_+_4svw_+_4svh)] border border-white rounded-lg p-1 fill-[red]'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mobile