import If from '../If'
import Skeleton from '../Skeleton'
import styles from './index.module.css'
import type { PlaylistCardProps } from './types'

function PlaylistCard({ playlist }: PlaylistCardProps) {

  const length = playlist?.images?.length ?? 0
  const hasImage = length > 0

  const isLoading = !playlist

  return (
    <>
      <div className={styles.container}>
        <Skeleton isLoading={isLoading}>
          <If condition={!hasImage}>
            <div className={styles.noImage}>
              {playlist?.name[0] ?? 'P'}
            </div>
          </If>
          <If condition={hasImage}>
            <img
              className={styles.image}
              alt={'Playlist'}
              src={playlist?.images?.[0].url}
            />
          </If>
        </Skeleton>
        <div className={styles.content}>
          <Skeleton isLoading={isLoading}>
            <p className={styles.title}>
              {playlist?.name ?? 'Carregando...'}
            </p>
          </Skeleton>
          <Skeleton isLoading={isLoading}>
            <p className={styles.description}>
              {playlist?.description ?? 'Carregando...'}
            </p>
          </Skeleton>
        </div>
      </div>
    </>
  )
}

export default PlaylistCard
