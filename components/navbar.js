import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex filter drop-shadow-md bg-gray-800 px-10 py-4 items-center'>
      <div className='w-3/12 flex items-center'>
        <Link className='text-2xl text-white font-semibold' href='./login'>
          Capsulate
        </Link>
      </div>
      <div className='w-9/12 flex justify-end items-center'></div>
    </nav>
  );
}
