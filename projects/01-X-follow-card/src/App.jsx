import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    username: 'nicoledts22',
    name: 'Andrea Nicole',
    isFollowing: false
  },
  {
    username: 'yinnibh',
    name: 'Yinni Barreto',
    isFollowing: true
  },
  {
    username: 'barretojm',
    name: 'Juan Manuel Barreto',
    isFollowing: false
  }
]

function App() {
  return(
  <section className='App'>
    {
      users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          username={username}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))
    }
  </section>
  )
}

export default App
