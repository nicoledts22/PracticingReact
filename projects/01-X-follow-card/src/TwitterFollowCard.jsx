import { useState } from "react"

export function TwitterFollowCard ({ children, username = 'unknown', initialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttomClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar nicoledts22" src={`https://unavatar.io/${username}`}></img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttomClassName} onClick={handleClick} >
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
