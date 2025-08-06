import styles from './index.module.css'
import type { AlbumCardProps } from './types'

function AlbumCard({ album }: AlbumCardProps) {

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          alt={'Album'}
          src={album.images[0].url}
        />
        <div className={styles.content}>
          <p className={styles.title}>
            {album.name}
          </p>
          <p className={styles.description}>
            {album.release_date}
          </p>
        </div>
      </div>
    </>
  )
}

export default AlbumCard
