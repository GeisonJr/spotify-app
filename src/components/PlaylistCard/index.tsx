import styles from './index.module.css'
import type { PlaylistCardProps } from './types'

function PlaylistCard({ playlist }: PlaylistCardProps) {

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          alt={'Playlist'}
          src={playlist.images[0].url}
        />
        <div className={styles.content}>
          <p className={styles.title}>
            {playlist.name}
          </p>
          <p className={styles.description}>
            {playlist.description}
          </p>
        </div>
      </div>
    </>
  )
}

export default PlaylistCard
