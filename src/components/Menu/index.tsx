import { Link, useLocation } from '@tanstack/react-router'
import styles from './index.module.css'

function Menu() {

  const location = useLocation()

  const menu = [
    {
      name: 'Home',
      url: '/home',
      icon: ['/icons/home.svg', '/icons/home-alt.svg'],
    },
    {
      name: 'Artistas',
      url: '/artists',
      icon: ['/icons/disc.svg', '/icons/disc-alt.svg'],
    },
    {
      name: 'Playlists',
      url: '/playlists',
      icon: ['/icons/play.svg', '/icons/play-alt.svg'],
    },
    {
      name: 'Perfil',
      url: '/profile',
      icon: ['/icons/user.svg', '/icons/user-alt.svg'],
    }
  ]

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt={'Spotify'}
          src={'/logo.svg'}
        />
        <div className={styles.content}>
          {menu.map((item, index) => {
            const isActive = location.pathname.startsWith(item.url)
            return (
              <div key={index} className={styles.item}>
                <img
                  className={styles.icon}
                  alt={item.name}
                  src={isActive ? item.icon[1] : item.icon[0]}
                />
                <Link
                  className={`${styles.title} ${isActive ? styles.active : ''}`}
                  to={item.url}
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Menu
