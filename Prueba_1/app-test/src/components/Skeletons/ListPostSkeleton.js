import React from 'react'
import SkeletonCard from './components/SkeletonCard'

export default function ListPostSkeleton() {
  return (
    <div>
      {
        [0,1,2,3,4,5,6,7,8].map((a, i) => <SkeletonCard key={i} width={"100%"} />)
      }
    </div>
  )
}
