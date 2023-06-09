import Image from 'next/image';

import { getGameDetails } from '@/services';

const GameDetails = async ({ params }: any) => {
  const game = await getGameDetails(params.id);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{game.name}</h1>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/3'>
          <div className='w-full h-96 relative'>
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              className='cover'
            />
          </div>
        </div>
        <div className='md:w-2/3 md:pl-8'>
          <p className='mb-4'>{game.description}</p>
          <div className='flex flex-wrap items-center mb-4'>
            <p className='mr-2'>Metacritic Score:</p>
            {game.metacritic_platforms.map(
              (platform: {
                url: string;
                platform: { name: string; url: string };
                metascore: string;
              }) => (
                <a
                  key={platform.platform.url}
                  href={platform.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-2 py-1 bg-gray-200 text-gray-800 rounded-full mr-2'
                >
                  {platform.platform.name}: {platform.metascore}
                </a>
              )
            )}
          </div>
          <p className='mb-4'>
            Released: {new Date(game.released).toLocaleDateString()}
          </p>
          <p className='mb-4'>Rating: {game.rating}/5</p>
          <p className='mb-4'>Genres:</p>
          <div className='flex flex-wrap mb-4'>
            {game.genres.map((genre: any) => (
              <span
                key={genre.id}
                className='px-2 py-1 bg-gray-200 text-gray-800 rounded-full mr-2 mb-2'
              >
                {genre.name}
              </span>
            ))}
          </div>
          <a
            href={game.website}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
