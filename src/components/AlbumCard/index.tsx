import If from '../If'
import styles from './index.module.css'
import type { AlbumCardProps } from './types'

function AlbumCard({ album }: AlbumCardProps) {

  const length = album.images?.length ?? 0

  return (
    <>
      <div className={styles.container}>
        <If condition={length === 0}>
          <div className={styles.noImage}>
            {album.name[0]}
          </div>
        </If>
        <If condition={length > 0}>
          <img
            className={styles.image}
            alt={'Album'}
            src={album.images?.[0].url}
          />
        </If>
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
