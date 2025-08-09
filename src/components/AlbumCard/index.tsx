import If from '../If'
import Skeleton from '../Skeleton'
import styles from './index.module.css'
import type { AlbumCardProps } from './types'

function AlbumCard({ album }: AlbumCardProps) {

  const length = album?.images?.length ?? 0
  const hasImage = length > 0

  const isLoading = !album

  return (
    <>
      <div className={styles.container}>
        <Skeleton isLoading={isLoading}>
          <If condition={!hasImage}>
            <div className={styles.noImage}>
              {album?.name[0] ?? 'A'}
            </div>
          </If>
          <If condition={hasImage}>
            <img
              className={styles.image}
              alt={'Album'}
              src={album?.images?.[0].url}
            />
          </If>
        </Skeleton>
        <div className={styles.content}>
          <Skeleton isLoading={isLoading}>
            <p className={styles.title}>
              {album?.name ?? 'Carregando...'}
            </p>
          </Skeleton>
          <Skeleton isLoading={isLoading}>
            <p className={styles.description}>
              {album?.release_date ?? 'Carregando...'}
            </p>
          </Skeleton>
        </div>
      </div>
    </>
  )
}

export default AlbumCard
