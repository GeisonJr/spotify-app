import If from '../If'
import styles from './index.module.css'
import type { PlaylistCardProps } from './types'

function PlaylistCard({ playlist }: PlaylistCardProps) {

  const length = playlist.images?.length ?? 0

  return (
    <>
      <div className={styles.container}>
        <If condition={length === 0}>
          <div className={styles.noImage}>
            {playlist.name[0]}
          </div>
        </If>
        <If condition={length > 0}>
          <img
            className={styles.image}
            alt={'Playlist'}
            src={playlist.images?.[0].url}
          />
        </If>
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
