import React from 'react'
import { Link } from "react-router-dom";
import vr from '../Img/profile/img2.png';


function Sidebar() {
    return (
        <>
            <hr className='line'></hr>
            <div className='left-container'>
                <div className='Saas-kit'>
                    Saas Kit
                </div>
                <div className='profile'>
                    <div className='image'><img src={vr}></img></div>
                    <div className='profilecontent'><h4>Adesh Samal</h4>
                        <h5>adeshsam73@gmail.com</h5>
                    </div>
                </div>

                <ul className='side-content'>
                    <Link to='/dashboard'><li>
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath-path="url(#clipPath0_7196_702)">
                                <path d="M8.16667 10.1333H3.5C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333ZM8.16667 16.8H3.5C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8ZM16.5 16.8H11.8333C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8ZM11.5333 6.5V3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5Z" stroke="#109CF1" stroke-width="1.4" />
                            </g>
                            <defs>
                                <clipPathPath id="clipPath0_7196_702">
                                    <rect width="20" height="20" fill="white" />
                                </clipPathPath>
                            </defs>
                        </svg>
                        </span><h5>Dashboard</h5></li></Link>

                    <Link to='/task'><li><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath-path="url(#clipPath0_7196_696)">
                            <path d="M2.49996 3.2H16.6666C16.7384 3.2 16.8 3.2616 16.8 3.33333V8.33333C16.8 8.40507 16.7384 8.46667 16.6666 8.46667H2.49996C2.42823 8.46667 2.36663 8.40507 2.36663 8.33333V3.33333C2.36663 3.2616 2.42823 3.2 2.49996 3.2ZM2.49996 11.5333H16.6666C16.7384 11.5333 16.8 11.5949 16.8 11.6667V16.6667C16.8 16.7384 16.7384 16.8 16.6666 16.8H2.49996C2.42823 16.8 2.36663 16.7384 2.36663 16.6667V11.6667C2.36663 11.5949 2.42823 11.5333 2.49996 11.5333Z" stroke="#C2CFE0" stroke-width="1.4" />
                        </g>
                        <defs>
                            <clipPathPath id="clipPath0_7196_696">
                                <rect width="20" height="20" fill="white" />
                            </clipPathPath>
                        </defs>
                    </svg>
                    </span><h5>Task</h5></li></Link>

                    <Link to='/email'><li><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath-path="url(#clipPath0_7196_689)">
                            <path d="M2.37496 5.0005V4.99992C2.37496 4.46528 2.80778 4.03325 3.33329 4.03325H16.6666C17.1967 4.03325 17.6333 4.46985 17.6333 4.99992V14.9999C17.6333 15.53 17.1967 15.9666 16.6666 15.9666H3.33329C2.80331 15.9666 2.36677 15.5301 2.36663 15.0002C2.36663 15.0001 2.36663 15 2.36663 14.9999L2.37496 5.0005Z" stroke="#C2CFE0" stroke-width="1.4" />
                            <path d="M2.5 5L10 10L17.5 5" stroke="#C2CFE0" stroke-width="1.4" />
                        </g>
                        <defs>
                            <clipPathPath id="clipPath0_7196_689">
                                <rect width="20" height="20" fill="white" />
                            </clipPathPath>
                        </defs>
                    </svg>
                    </span><h5>Email</h5></li></Link>

                    <Link to='/contact'><li><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath-path="url(#clipPath0_7196_683)">
                            <path d="M6.81106 6.11106C6.81106 4.34905 8.23793 2.92217 9.99994 2.92217C11.762 2.92217 13.1888 4.34905 13.1888 6.11106C13.1888 7.87307 11.762 9.29995 9.99994 9.29995C8.23793 9.29995 6.81106 7.87307 6.81106 6.11106ZM2.92217 14.8611C2.92217 14.4716 3.11169 14.0787 3.54717 13.6768C3.9874 13.2705 4.63067 12.904 5.39793 12.5966C6.93358 11.9814 8.78953 11.6722 9.99994 11.6722C11.2104 11.6722 13.0663 11.9814 14.602 12.5966C15.3692 12.904 16.0125 13.2705 16.4527 13.6768C16.8882 14.0787 17.0777 14.4716 17.0777 14.8611V17.0777H2.92217V14.8611Z" stroke="#C2CFE0" stroke-width="1.4" />
                        </g>
                        <defs>
                            <clipPathPath id="clipPath0_7196_683">
                                <rect width="20" height="20" fill="white" />
                            </clipPathPath>
                        </defs>
                    </svg>
                    </span><h5>User</h5></li></Link>

                    <Link to='/chat'><li><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath-path="url(#clipPath0_7196_677)">
                            <path d="M4.99996 14.3001H4.71001L4.50499 14.5051L2.36663 16.6435V3.33341C2.36663 2.80335 2.80323 2.36675 3.33329 2.36675H16.6666C17.1967 2.36675 17.6333 2.80335 17.6333 3.33341V13.3334C17.6333 13.8635 17.1967 14.3001 16.6666 14.3001H4.99996Z" stroke="#C2CFE0" stroke-width="1.4" />
                        </g>
                        <defs>
                            <clipPathPath id="clipPath0_7196_677">
                                <rect width="20" height="20" fill="white" />
                            </clipPathPath>
                        </defs>
                    </svg>
                    </span><h5>Chat</h5></li></Link>

                    <Link to='/deals'><li><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath-path="url(#clipPath0_7196_669)">
                            <path d="M2.49996 4.03325H17.5C17.5717 4.03325 17.6333 4.09485 17.6333 4.16659V15.8333C17.6333 15.905 17.5717 15.9666 17.5 15.9666H2.49996C2.42823 15.9666 2.36663 15.905 2.36663 15.8333V4.16659C2.36663 4.09485 2.42823 4.03325 2.49996 4.03325Z" stroke="#C2CFE0" stroke-width="1.4" />
                            <rect x="6.5" y="3.33325" width="1.16667" height="13.3333" fill="#C2CFE0" />
                            <rect x="12.3334" y="3.33325" width="1.16667" height="13.3333" fill="#C2CFE0" />
                        </g>
                        <defs>
                            <clipPathPath id="clipPath0_7196_669">
                                <rect width="20" height="20" fill="white" />
                            </clipPathPath>
                        </defs>
                    </svg>
                    </span><h5>Add User</h5></li></Link>
                </ul>
                <hr className='line2'></hr>
                <Link to='/setting'><div className='setting'>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath-path="url(#clipPath0_7205_663)">
                                <path d="M5.00004 8.33325C4.08337 8.33325 3.33337 9.08325 3.33337 9.99992C3.33337 10.9166 4.08337 11.6666 5.00004 11.6666C5.91671 11.6666 6.66671 10.9166 6.66671 9.99992C6.66671 9.08325 5.91671 8.33325 5.00004 8.33325ZM15 8.33325C14.0834 8.33325 13.3334 9.08325 13.3334 9.99992C13.3334 10.9166 14.0834 11.6666 15 11.6666C15.9167 11.6666 16.6667 10.9166 16.6667 9.99992C16.6667 9.08325 15.9167 8.33325 15 8.33325ZM10 8.33325C9.08337 8.33325 8.33337 9.08325 8.33337 9.99992C8.33337 10.9166 9.08337 11.6666 10 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99992C11.6667 9.08325 10.9167 8.33325 10 8.33325Z" fill="#C2CFE0" />
                            </g>
                            <defs>
                                <clipPathPath id="clipPath0_7205_663">
                                    <rect width="20" height="20" fill="white" />
                                </clipPathPath>
                            </defs>
                        </svg>
                    </span><h5>Setting</h5></div></Link>
            </div>
        </>
    )
}

export default Sidebar;