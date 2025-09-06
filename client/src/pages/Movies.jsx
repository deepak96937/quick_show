import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MoveCard from '../components/MoveCard'
import BlurCircle from '../components/BlurCircle'


const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className=' relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top="150px" left="0" />
      <BlurCircle bottom="50px" right="50px" />
      <h1 className=' text-lg font-medium my-4'>Now Showing</h1>
      <div className=" flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.map((movie) => (
          <MoveCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">
        🎬 No Movies Available
      </h1>
      <p className="mt-4 text-gray-400 text-sm md:text-base">
        Please check back later for the latest updates.
      </p>
    </div>
  )
}

export default Movies