import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faPlus, faClock, faFaceGrin } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className='flex filter drop-shadow-md bg-gray-800 px-10 py-4 items-centers'>
      <div className='w-3/12 flex items-center'>
        <Link className='text-2xl text-white font-semibold' href='./main'>
          Capsulate
        </Link>
      </div>
      <div className='w-9/12 flex justify-end items-center'></div>
      <Link href='../addCap'>
        <div className='px-5 py-3 border-2 mr-10 hover:bg-slate-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ fontSize: 30, color: 'white' }}
          />
        </div>
      </Link>
      <div className='px-5 py-3 border-2 mr-10 hover:bg-slate-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
        <FontAwesomeIcon
          icon={faClock}
          style={{ fontSize: 30, color: 'white' }}
        />
      </div>
      <div className='px-5 py-3 border-2 mr-10 hover:bg-slate-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
        <FontAwesomeIcon
          icon={faFaceGrin}
          style={{ fontSize: 30, color: 'white' }}
        />
      </div>
    </nav>
  );
}
