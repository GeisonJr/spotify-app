import ArtistCard from '@/components/ArtistCard'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Map from '@/components/Map'
import { createFileRoute } from '@tanstack/react-router'

import type { ArtistResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/artists/')({
  loader: async () => {
    return {
      artists
    }
  },
  component: Artists
})

function Artists() {

  const { artists } = Route.useLoaderData()

  return (
    <>
      <Layout>
        <Header
          title={'Top Artistas'}
          description={'Aqui você encontra seus artistas preferidos'}
        />
        <div className={styles.content}>
          <Map data={artists.data.items}>
            {(artist) => {
              return <ArtistCard
                key={artist.id}
                artist={artist}
              />
            }}
          </Map>
        </div>
      </Layout>
    </>
  )
}

const artists: ArtistResponse = {
  message: 'Artistas buscados com sucesso',
  data: {
    "href": "https://api.spotify.com/v1/me/top/artists?locale=en-GB,en-US;q%3D0.9,en;q%3D0.8",
    "limit": 20,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 2,
    "items": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5WoWlP0ihSFIxnppxjwSgE"
        },
        "followers": {
          "href": null,
          "total": 354981
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5WoWlP0ihSFIxnppxjwSgE",
        "id": "5WoWlP0ihSFIxnppxjwSgE",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb076046c880745c7a4a9e489a",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174076046c880745c7a4a9e489a",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178076046c880745c7a4a9e489a",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Low Roar",
        "popularity": 60,
        "type": "artist",
        "uri": "spotify:artist:5WoWlP0ihSFIxnppxjwSgE"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3JFsVIxOn7STeilPICkkB2"
        },
        "followers": {
          "href": null,
          "total": 2267823
        },
        "genres": ["groove metal", "metal", "heavy metal", "nu metal", "death metal"],
        "href": "https://api.spotify.com/v1/artists/3JFsVIxOn7STeilPICkkB2",
        "id": "3JFsVIxOn7STeilPICkkB2",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5ebb943a08242864dc3364a9478",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174b943a08242864dc3364a9478",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178b943a08242864dc3364a9478",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Lamb of God",
        "popularity": 66,
        "type": "artist",
        "uri": "spotify:artist:3JFsVIxOn7STeilPICkkB2"
      }
    ]
  },
  pagination: {
    hasNext: false,
    hasPrevious: false,
    currentPage: 1,
    totalPages: 1
  }
}

