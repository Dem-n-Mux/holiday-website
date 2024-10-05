import React from 'react'

const ReviewsCard = ({ data }) => {
  return (
    <div className="border p-4 rounded-xl bg-secondary w-1/3">
      <h1 className="text-xl font-bold text-white">Total Reviews : </h1>
      <div className="w-full">
        <h1 className="text-3xl font-bold text-white mx-auto">{data}</h1>
      </div>
    </div>
  )
}

export default ReviewsCard