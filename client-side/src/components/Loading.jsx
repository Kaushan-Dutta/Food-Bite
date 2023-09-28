import React from 'react'
import { CirclesWithBar } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='w-screen h-screen fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <CirclesWithBar
            height="100"
            width="100"
            color="#C63D2F"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
        />
    </div>
  )
}

export default Loading