import { useNavigate } from '@tanstack/react-router'
import If from '../If'
import styles from './index.module.css'
import type { ArtistCardProps } from './types'

function ArtistCard({ artist }: ArtistCardProps) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate({
      to: '/artists/$artistId',
      params: {
        artistId: artist.id
      }
    })
  }

  const length = artist.images?.length ?? 0

  return (
    <>
      <div
        className={styles.container}
        onClick={handleClick}
      >
        <If condition={length === 0}>
          <div className={styles.noImage}>
            {artist.name[0]}
          </div>
        </If>
        <If condition={length > 0}>
          <img
            className={styles.image}
            alt={'Artista'}
            src={artist.images?.[0].url}
          />
        </If>
        <div className={styles.content}>
          <p className={styles.title}>
            {artist.name}
          </p>
        </div>
      </div>
    </>
  )
}

export default ArtistCard
