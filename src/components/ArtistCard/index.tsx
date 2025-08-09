import { useNavigate } from '@tanstack/react-router'
import If from '../If'
import Skeleton from '../Skeleton'
import styles from './index.module.css'
import type { ArtistCardProps } from './types'

function ArtistCard({ artist }: ArtistCardProps) {

  const navigate = useNavigate()

  const handleClick = () => {
    if (!artist) {
      return
    }

    navigate({
      to: '/artists/$artistId',
      params: {
        artistId: artist?.id
      }
    })
  }

  const length = artist?.images?.length ?? 0
  const hasImage = length > 0

  const isLoading = !artist

  return (
    <>
      <div
        className={styles.container}
        onClick={handleClick}
      >
        <Skeleton isLoading={isLoading}>
          <If condition={!hasImage}>
            <div className={styles.noImage}>
              {artist?.name[0] ?? 'A'}
            </div>
          </If>
          <If condition={hasImage}>
            <img
              className={styles.image}
              alt={'Artista'}
              src={artist?.images?.[0].url}
            />
          </If>
        </Skeleton>
        <div className={styles.content}>
          <Skeleton isLoading={isLoading}>
            <p className={styles.title}>
              {artist?.name ?? 'Carregando...'}
            </p>
          </Skeleton>
        </div>
      </div>
    </>
  )
}

export default ArtistCard
