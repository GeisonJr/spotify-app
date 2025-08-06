import { useNavigate } from '@tanstack/react-router'
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

  return (
    <>
      <div
        className={styles.container}
        onClick={handleClick}
      >
        <img
          className={styles.image}
          alt={'Artista'}
          src={artist.images[0].url}
        />
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
