import React from "react";
import {PiClockCountdownFill} from 'react-icons/pi'
import {SiLevelsdotfyi} from 'react-icons/si'
import {RiKeyboardLine} from 'react-icons/ri'
import {BiErrorAlt} from 'react-icons/bi'


function Sidebar(){
  return(
    <div className="flex justify-startS">
      <ul>
        <button className=" justify-center items-center flex min-w-[200px] rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 my-3">
          <div><PiClockCountdownFill size="1.7rem"/></div>
          <li className="mx-2">Time</li>
        </button>
        <button className="justify-center items-center flex min-w-[200px] rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 my-3">
          <div><SiLevelsdotfyi size="1.7rem"/></div>
          <li className="mx-2">Level</li>
        </button>
        <button className="justify-center items-center flex min-w-[200px] rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 my-3">
          <div><RiKeyboardLine size="1.7rem"/></div>
          <li className="mx-2">Avg WPM</li>
        </button>
        <button className="flex justify-center items-center min-w-[200px] rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 my-3">
          <div><BiErrorAlt size="1.7rem"/></div>
          <li className="mx-2">Accuracy</li>
        </button>
      </ul>
      
    </div>
  )
}

export default Sidebar