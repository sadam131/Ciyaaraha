import React from 'react'
import HomeBanner from './HomeBanner'
import Posts from '../posts/Posts'
import ForYou from '../foryou/ForYou'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <Posts/>
        <ForYou/>
    </div>
  )
}

export default Home