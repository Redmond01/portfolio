import React, { useEffect } from 'react'
import Logo from '../asset/logo.png'
import Profile from '../asset/raymondoke.png'
import { FaEye, FaEyeSlash, FaTwitter, FaLinkedin , FaYoutube, FaGithub, FaReact, FaJsSquare, FaNode, FaMdb, FaDatabase } from 'react-icons/fa'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { onSideNav, offSideNav , onStack} from '../redux/slice'


const Mobile = () => {
    const sideNav = useSelector(function (state) {
        return state.mobile.slider
    })
    const stack =useSelector(function(state){
        return state.mobile.stack
    })
    const dispatch = useDispatch()

    useEffect(function(){
        window.addEventListener('scroll', function(){
            if(window.scrollY>70){
                dispatch(onStack(true))
            }

        })
        return(function(){
            window.removeEventListener('scroll', function(){
                if(this.window){
                    dispatch(onStack(false))
                }
            })
        })
    },[window])
    return (
        <div className='sm:block md:hidden lg:hidden'>
            <div className='w-full h-[300svh] bg-[#141313]'>
                <div className='w-full h-[15svh] bg-[#141313]  shadow-green shadow-lg flex justify-between items-center px-4 top-0 sticky z-[200]'>
                    <img src={Logo} alt="logo" className='w-[2rem] h-[2rem]' />
                    <FaEye className='fill-[#f5f5f5] w-[2rem] h-[2rem]' onClick={function () {
                        dispatch(onSideNav(true))
                    }} />
                    {sideNav ?
                        <div className={styles.sideNav}>
                            <div className='w-full h-full flex flex-col items-end'>
                                <div className='w-full h-[20%] flex items-end px-2'>
                                    <FaEyeSlash className='fill-[black] w-[2rem] h-[2rem]' onClick={function () {
                                        dispatch(offSideNav(false))
                                    }} />
                                </div>
                                <div className='w-full h-[80%] flex flex-col gap-4 items-center p-2'>
                                    <h3 className='w-full h-[24%] text-center text-[calc(1px_+_2svw_+_2svh)] capitalize font-[500]'>projects</h3>
                                    <hr  className='w-[80%] border-[1px] border-black'/>
                                    <h3 className='w-full h-[24%] text-center text-[calc(1px_+_2svw_+_2svh)] capitalize font-[500]'>blog</h3>
                                    <hr  className='w-[80%] border-[1px] border-black'/>
                                    
                                    <h3 className='w-full h-[24%] text-center text-[calc(1px_+_2svw_+_2svh)] capitalize font-[500]'>about me</h3>
                                </div>
                            </div>
                        </div> : ''
                    }
                </div>



                    <div className='w-full h-[90svh] relative '>
                        <div className='w-[50px] h-[250svh] absolute right-0'>
                            <div className='w-full h-[40svh] top-[22%] z-[10]  sticky flex flex-col justify-evenly items-center'>
                                <FaTwitter className='text-[calc(1px_+_3svw_+_3svh)] fill-[blue]'/>
                                <FaLinkedin className='text-[calc(1px_+_3svw_+_3svh)] fill-[skyblue]'/>
                                <FaYoutube className='text-[calc(1px_+_3svw_+_3svh)] fill-[red]'/>
                                <FaGithub className='text-[calc(1px_+_3svw_+_3svh)] fill-[white]'/>
                            </div>
                        </div>
                        <div className='w-full h-[25svh] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_3svw_+_3svh)] text-white uppercase font-[500]'> hi, <span className='text-[calc(1px_+_2svw_+_2svh)] font-[400] text-white lowercase'> i am</span> <br /> <span className='text-[calc(1px_+_4svw_+_4svh)] font-[900] font-sans text-green'>raymond</span> </h3>
                        </div>
                        <div className='w-full h-[55svh] flex justify-center items-center'>
                            <div className='w-[90%] h-[98%]'>
                                <h3 className='text-[calc(1px_+_2svw_+_2svh)] font-[500] text-white tracking-[1px]'>I'm a skilled software developer with an experience in Javascript, and expertise in 
                                    frameworks like React, Node.js, and Expressjs. I am a quick learner and collaborate closely 
                                    with clients to create efficient, scalable and user-friendly solutions that solve real-world problems.
                                    Let's work together to bring your ideas to life!
                                </h3>
                            </div>
                        </div>
                    </div>

                        <div className='w-full h-[10svh]'>
                            <h3 className='text-[calc(1px_+_3svw_+_3svh)] text-green capitalize font-[500] text-center underline-offset-4 underline'>stack</h3>
                        </div>

                    <div className='w-full h-[50svh] flex flex-col relative'>
                        {stack?
                        <div className='w-full h-full'>
                        
                        <div className={styles.stack}>
                            <div className='w-[32%] h-[90%] border border-green shadow-sm shadow-white flex items-center justify-center rounded-[1rem]'>
                                <FaReact className='text-[calc(1px_+_6svw_+_6svh)] fill-[#80DEEA]'/>
                            </div>
                            <div className='w-[32%] h-[90%] border border-green shadow-sm shadow-white flex items-center justify-center rounded-[1rem]'>
                                <FaJsSquare className='text-[calc(1px_+_6svw_+_6svh)] fill-[yellow]'/>
                            </div>
                            <div className='w-[32%] h-[90%] border border-green  flex items-center justify-center rounded-[1rem]'>
                                <FaNode className='text-[calc(1px_+_6svw_+_6svh)] fill-[green]'/>
                            </div>
                        </div>
                        <div className={styles.stack1}>
                        <div className='w-[32%] h-[90%] border border-green  flex items-center justify-center rounded-[1rem]'>
                                <FaDatabase className='text-[calc(1px_+_6svw_+_6svh)] fill-[#80DEEA]'/>
                            </div>
                            <div className='w-[32%] h-[90%] border border-green shadow-sm shadow-white flex items-center justify-center rounded-[1rem]'>
                                <FaJsSquare className='text-[calc(1px_+_6svw_+_6svh)] fill-[yellow]'/>
                            </div>
                            <div className='w-[32%] h-[90%] border border-green shadow-sm shadow-white flex items-center justify-center rounded-[1rem]'>
                                <FaNode className='text-[calc(1px_+_6svw_+_6svh)] fill-[green]'/>
                            </div>
                        </div>
                    
                        </div>
                        :''}
                    </div>


                    <div className='w-full h-[50svh] border border-white'>

                    </div>
            </div>
        </div>
    )
}

export default Mobile