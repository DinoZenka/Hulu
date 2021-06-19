import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';
import { useState, useEffect } from 'react';

let Thumbnails = forwardRef(({ result }, ref) => {

  const [like, toggleLike] = useState(false);
  const svg = like ? { fill: 'white', stroke: '#06202A', strokeOpacity: '0.5' } : { fill: '#06202A', stroke: 'white' };

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div ref={ref} className=" group px-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        alt={result.title}
        layout='responsive'
        width={1920}
        height={1080}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${result.poster_path}`
        }
        className='cursor-pointer'
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>
          {result.overview}
        </p>
        <h2 className='cursor-pointer  mt-1 text-2xl text-white transition-all duration-100 ease-in-out  group-hover:font-bold'>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100 pb-4'>
          {result.media_type && `${result.media_type} • `}{" "}
          {result.release_date || result.first_air_date} • {" "}
          <ThumbUpIcon className='cursor-pointer  h-5 mx-2'
            fill={svg.fill} stroke={svg.stroke} strokeOpacity={svg.strokeOpacity}
            onClick={() => { toggleLike(!like) }}
          />
          {result.vote_count}

        </p>
      </div>
    </div>

  )
});

export default Thumbnails
