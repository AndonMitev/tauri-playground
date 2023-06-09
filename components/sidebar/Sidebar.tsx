import Link from 'next/link';

const Siderbar = () => {
  return (
    <nav className='flex flex-col bg-gray-800 min-w-[15%]'>
      <Link className='text-gray-300 hover:text-white py-2 px-4' href='/'>
        Home
      </Link>
    </nav>
  );
};

export default Siderbar;
