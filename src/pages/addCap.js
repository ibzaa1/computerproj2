import Head from 'next/head';
import Navbar2 from '../../components/navbar2';

export default function Home() {
  return (
    <>
      <Head>
        <title>Add Capsule</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar2 />

      <div class='dark:bg-gray-900 h-screen'>
        <div class='flex flex-col items-center pt-8 mx-auto'>
          <div class='rounded-xl dark:bg-gray-800'>
            <div class='p-6 md:space-y-6 sm:p-8'>
              <h1 class='font-bold text-gray-900 text-2xl text-white'>
                Add Capsule
              </h1>
              <form class='space-y-4 md:space-y-6' action='#'>
                <div>
                  <h1 class='mb-2 text-lg text-white'>Capsule Name</h1>
                  <input
                    type='text'
                    name='capsuleName'
                    class=' sm:text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    required=''
                  />
                </div>
                <div>
                  <label class='block mb-2 text-lg text-gray-900 dark:text-white'>
                    Add Capsule Input (Files)
                  </label>
                  <input
                    type='file'
                    class='sm:text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 text-white'
                    required=''
                  />
                </div>
                <div>
                  <h1 class='mb-2 text-lg text-white'>Capsule Time And Date</h1>
                  <input
                    type='time'
                    name='capsuleTime'
                    class='sm:text-sm rounded-lg p-2.5 bg-gray-700 text-white'
                    required=''
                  />
                  <input
                    type='date'
                    name='capsuleTime'
                    class='sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 text-white ml-2'
                    required=''
                  />
                </div>
                <div class='flex items-center'>
                  <input type='checkbox' />
                  <p class='dark:text-red-500 ml-2'>
                    I agree that files will be locked and inaccessable
                  </p>
                </div>
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    class='w-2/5 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 mr-5'
                  >
                    Add Capsule
                  </button>
                  <button
                    type='submit'
                    class='w-2/5 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}