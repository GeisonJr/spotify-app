import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Map from '@/components/Map'
import PlaylistCard from '@/components/PlaylistCard'
import { createFileRoute } from '@tanstack/react-router'

import type { PlaylistResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/playlists/')({
  loader: async () => {
    return {
      playlists
    }
  },
  component: Playlists
})

function Playlists() {

  const { playlists } = Route.useLoaderData()

  return (
    <>
      <Layout>
        <Header
          title={'Minhas Playlists'}
          description={'Sua coleção pessoal de playlists'}
        />
        <div className={styles.content}>
          <Map data={playlists.data.items}>
            {(playlist) => {
              return <PlaylistCard
                key={playlist.id}
                playlist={playlist}
              />
            }}
          </Map>
        </div>
      </Layout>
    </>
  )
}

const playlists: PlaylistResponse = {
  message: 'Playlists fetched successfully',
  data: {
    "href": "https://api.spotify.com/v1/users/geisonjr/playlists?offset=0&limit=50&locale=en-GB,en-US;q%3D0.9,en;q%3D0.8",
    "limit": 50,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 14,
    "items": [
      {
        "collaborative": false,
        "description": "Phonk",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/3zGxnE3zuVDPH9o4HpMbZE"
        },
        "href": "https://api.spotify.com/v1/playlists/3zGxnE3zuVDPH9o4HpMbZE",
        "id": "3zGxnE3zuVDPH9o4HpMbZE",
        "images": [
          {
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72cd23135c7b61a80ef084d0141",
            "height": null,
            "width": null
          }
        ],
        "name": "PHONK",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/lazz8j9bs7e4slcys2pj4nj5w"
          },
          "href": "https://api.spotify.com/v1/users/lazz8j9bs7e4slcys2pj4nj5w",
          "id": "lazz8j9bs7e4slcys2pj4nj5w",
          "type": "user",
          "uri": "spotify:user:lazz8j9bs7e4slcys2pj4nj5w",
          "display_name": "DanDart1992"
        },
        "public": true,
        "snapshot_id": "AAC6JFSsGkkXzVAOB6XBO8D1RDMR9FL4",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/3zGxnE3zuVDPH9o4HpMbZE/tracks",
          "total": 182
        },
        "type": "playlist",
        "uri": "spotify:playlist:3zGxnE3zuVDPH9o4HpMbZE",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/5ITPmRD9of7ZhVdK8yqpfC"
        },
        "href": "https://api.spotify.com/v1/playlists/5ITPmRD9of7ZhVdK8yqpfC",
        "id": "5ITPmRD9of7ZhVdK8yqpfC",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e0267e4046891a0207cd9e27574",
            "height": null,
            "width": null
          }
        ],
        "name": "👨‍💻",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAABEIhQJ40QIjuHr16KAUChyTO0qlD",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/5ITPmRD9of7ZhVdK8yqpfC/tracks",
          "total": 3
        },
        "type": "playlist",
        "uri": "spotify:playlist:5ITPmRD9of7ZhVdK8yqpfC",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/1vuMk8nSJ6vazGQAqGr7Dx"
        },
        "href": "https://api.spotify.com/v1/playlists/1vuMk8nSJ6vazGQAqGr7Dx",
        "id": "1vuMk8nSJ6vazGQAqGr7Dx",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e025cfecf6160be44a1137fefc9",
            "height": null,
            "width": null
          }
        ],
        "name": "🇸🇰",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAAAsolcctygqXvi6vBk26ayi7fIaG7",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/1vuMk8nSJ6vazGQAqGr7Dx/tracks",
          "total": 1
        },
        "type": "playlist",
        "uri": "spotify:playlist:1vuMk8nSJ6vazGQAqGr7Dx",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/1NW1XhUYK8WG5ZGfJCsN08"
        },
        "href": "https://api.spotify.com/v1/playlists/1NW1XhUYK8WG5ZGfJCsN08",
        "id": "1NW1XhUYK8WG5ZGfJCsN08",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e02503b16348e47bc3c1c823ebaab67616d00001e029478c87599550dd73bfa7e02ab67616d00001e02e741cd9dc139d57cc2906186ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e02503b16348e47bc3c1c823ebaab67616d00001e029478c87599550dd73bfa7e02ab67616d00001e02e741cd9dc139d57cc2906186ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e02503b16348e47bc3c1c823ebaab67616d00001e029478c87599550dd73bfa7e02ab67616d00001e02e741cd9dc139d57cc2906186ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
            "height": 60,
            "width": 60
          }
        ],
        "name": "Sla",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAAD4SB4BFAQjBZlazDcqEqhogI1fXA",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/1NW1XhUYK8WG5ZGfJCsN08/tracks",
          "total": 14
        },
        "type": "playlist",
        "uri": "spotify:playlist:1NW1XhUYK8WG5ZGfJCsN08",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/4MUMPHzBvPcPHezNtfZDq6"
        },
        "href": "https://api.spotify.com/v1/playlists/4MUMPHzBvPcPHezNtfZDq6",
        "id": "4MUMPHzBvPcPHezNtfZDq6",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e02168309ba3a3565cc1fd7134aab67616d00001e024763cf5dbe6e0585bf2d37afab67616d00001e0253d09a982d1c5c0cd58b1b88ab67616d00001e027636e1c9e67eaafc9f49aefd",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e02168309ba3a3565cc1fd7134aab67616d00001e024763cf5dbe6e0585bf2d37afab67616d00001e0253d09a982d1c5c0cd58b1b88ab67616d00001e027636e1c9e67eaafc9f49aefd",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e02168309ba3a3565cc1fd7134aab67616d00001e024763cf5dbe6e0585bf2d37afab67616d00001e0253d09a982d1c5c0cd58b1b88ab67616d00001e027636e1c9e67eaafc9f49aefd",
            "height": 60,
            "width": 60
          }
        ],
        "name": "CAR",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/bkbw3t4itrqrun1jtv4j92ju2"
          },
          "href": "https://api.spotify.com/v1/users/bkbw3t4itrqrun1jtv4j92ju2",
          "id": "bkbw3t4itrqrun1jtv4j92ju2",
          "type": "user",
          "uri": "spotify:user:bkbw3t4itrqrun1jtv4j92ju2",
          "display_name": "XoXo"
        },
        "public": true,
        "snapshot_id": "AAAAC09ovDUKb05JRzhH/so76cm4oXa4",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/4MUMPHzBvPcPHezNtfZDq6/tracks",
          "total": 98
        },
        "type": "playlist",
        "uri": "spotify:playlist:4MUMPHzBvPcPHezNtfZDq6",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/3DaoHFIh4aeT9fMzQIZMrI"
        },
        "href": "https://api.spotify.com/v1/playlists/3DaoHFIh4aeT9fMzQIZMrI",
        "id": "3DaoHFIh4aeT9fMzQIZMrI",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e02455cc3060b25c1f0015269feab67616d00001e0288e3cda6d29b2552d4d6bc43ab67616d00001e02a91c10fe9472d9bd89802e5aab67616d00001e02f460dcdffa04e30a8a3d68eb",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e02455cc3060b25c1f0015269feab67616d00001e0288e3cda6d29b2552d4d6bc43ab67616d00001e02a91c10fe9472d9bd89802e5aab67616d00001e02f460dcdffa04e30a8a3d68eb",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e02455cc3060b25c1f0015269feab67616d00001e0288e3cda6d29b2552d4d6bc43ab67616d00001e02a91c10fe9472d9bd89802e5aab67616d00001e02f460dcdffa04e30a8a3d68eb",
            "height": 60,
            "width": 60
          }
        ],
        "name": "《 XoXo 》",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/bkbw3t4itrqrun1jtv4j92ju2"
          },
          "href": "https://api.spotify.com/v1/users/bkbw3t4itrqrun1jtv4j92ju2",
          "id": "bkbw3t4itrqrun1jtv4j92ju2",
          "type": "user",
          "uri": "spotify:user:bkbw3t4itrqrun1jtv4j92ju2",
          "display_name": "XoXo"
        },
        "public": true,
        "snapshot_id": "AAADsDXaQjeaF4bvr0NNts6namT+GVUP",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/3DaoHFIh4aeT9fMzQIZMrI/tracks",
          "total": 1016
        },
        "type": "playlist",
        "uri": "spotify:playlist:3DaoHFIh4aeT9fMzQIZMrI",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/7juQu9ayPXoNNPGc2CJvS5"
        },
        "href": "https://api.spotify.com/v1/playlists/7juQu9ayPXoNNPGc2CJvS5",
        "id": "7juQu9ayPXoNNPGc2CJvS5",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e020519b076559abbe7e2d4e410ab67616d00001e0290a50cfe99a4c19ff3cbfbdbab67616d00001e02ad08f4b38efbff0c0da0f252ab67616d00001e02e71708b667804f6241dd1a59",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e020519b076559abbe7e2d4e410ab67616d00001e0290a50cfe99a4c19ff3cbfbdbab67616d00001e02ad08f4b38efbff0c0da0f252ab67616d00001e02e71708b667804f6241dd1a59",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e020519b076559abbe7e2d4e410ab67616d00001e0290a50cfe99a4c19ff3cbfbdbab67616d00001e02ad08f4b38efbff0c0da0f252ab67616d00001e02e71708b667804f6241dd1a59",
            "height": 60,
            "width": 60
          }
        ],
        "name": "Neess",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAADDCupix3h28zsjPdQcEP4V0PUgkr",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/7juQu9ayPXoNNPGc2CJvS5/tracks",
          "total": 9
        },
        "type": "playlist",
        "uri": "spotify:playlist:7juQu9ayPXoNNPGc2CJvS5",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/7hihXEo683OGE9P04HZ1XE"
        },
        "href": "https://api.spotify.com/v1/playlists/7hihXEo683OGE9P04HZ1XE",
        "id": "7hihXEo683OGE9P04HZ1XE",
        "images": [
          {
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72ce204b6240dd475113fa235e0",
            "height": null,
            "width": null
          }
        ],
        "name": "Rocket League",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/playstation_music"
          },
          "href": "https://api.spotify.com/v1/users/playstation_music",
          "id": "playstation_music",
          "type": "user",
          "uri": "spotify:user:playstation_music",
          "display_name": "PlayStation®️"
        },
        "public": true,
        "snapshot_id": "AAAAtlS87Cb9amxCpc8VOc1GB7pBPxt0",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/7hihXEo683OGE9P04HZ1XE/tracks",
          "total": 110
        },
        "type": "playlist",
        "uri": "spotify:playlist:7hihXEo683OGE9P04HZ1XE",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/2YCmuMgYN9wy9D1y1XafeY"
        },
        "href": "https://api.spotify.com/v1/playlists/2YCmuMgYN9wy9D1y1XafeY",
        "id": "2YCmuMgYN9wy9D1y1XafeY",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e02d4549c0e601fbe7e8622a2f5",
            "height": null,
            "width": null
          }
        ],
        "name": "🇷🇺",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAABPyq/fa0CAvvqhZyD7S5ToPIxbXO",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/2YCmuMgYN9wy9D1y1XafeY/tracks",
          "total": 2
        },
        "type": "playlist",
        "uri": "spotify:playlist:2YCmuMgYN9wy9D1y1XafeY",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/41MkpDh5ppfvrS3RUwPZnM"
        },
        "href": "https://api.spotify.com/v1/playlists/41MkpDh5ppfvrS3RUwPZnM",
        "id": "41MkpDh5ppfvrS3RUwPZnM",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e029213de9bc3ba255dfccc64c5ab67616d00001e02a35608dcc5a2bd90319f1e55ab67616d00001e02a58013ed42bbc88760094da5ab67616d00001e02c4b756fb640a647b1e5edf75",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e029213de9bc3ba255dfccc64c5ab67616d00001e02a35608dcc5a2bd90319f1e55ab67616d00001e02a58013ed42bbc88760094da5ab67616d00001e02c4b756fb640a647b1e5edf75",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e029213de9bc3ba255dfccc64c5ab67616d00001e02a35608dcc5a2bd90319f1e55ab67616d00001e02a58013ed42bbc88760094da5ab67616d00001e02c4b756fb640a647b1e5edf75",
            "height": 60,
            "width": 60
          }
        ],
        "name": "🇧🇷",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAAYk2XnTGzDwwfySyWGtvkyyhREiVC",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/41MkpDh5ppfvrS3RUwPZnM/tracks",
          "total": 74
        },
        "type": "playlist",
        "uri": "spotify:playlist:41MkpDh5ppfvrS3RUwPZnM",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/1x9N8D71ViOgtBDDXY66ci"
        },
        "href": "https://api.spotify.com/v1/playlists/1x9N8D71ViOgtBDDXY66ci",
        "id": "1x9N8D71ViOgtBDDXY66ci",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e02128450651c9f0442780d8eb8ab67616d00001e023ff93054fb48f76a5915d90eab67616d00001e02b6af77b2116b532bfa053294ab67616d00001e02f6c46838e4425ea96e2562fe",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e02128450651c9f0442780d8eb8ab67616d00001e023ff93054fb48f76a5915d90eab67616d00001e02b6af77b2116b532bfa053294ab67616d00001e02f6c46838e4425ea96e2562fe",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e02128450651c9f0442780d8eb8ab67616d00001e023ff93054fb48f76a5915d90eab67616d00001e02b6af77b2116b532bfa053294ab67616d00001e02f6c46838e4425ea96e2562fe",
            "height": 60,
            "width": 60
          }
        ],
        "name": "Only Intenational",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAA2FIXpJ8BweuVuasqd1DiCLGQfUgP",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/1x9N8D71ViOgtBDDXY66ci/tracks",
          "total": 357
        },
        "type": "playlist",
        "uri": "spotify:playlist:1x9N8D71ViOgtBDDXY66ci",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/5MccQFnqzW9w3eBH9rx1kt"
        },
        "href": "https://api.spotify.com/v1/playlists/5MccQFnqzW9w3eBH9rx1kt",
        "id": "5MccQFnqzW9w3eBH9rx1kt",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e020ae8a64fbea1d651f53c2cedab67616d00001e023b27e1cd8a6bc6804c2e5fd2ab67616d00001e02cc3c88a5caf0ae3c54a43c3aab67616d00001e02cd7e670a91d0263d2ee1d8a7",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e020ae8a64fbea1d651f53c2cedab67616d00001e023b27e1cd8a6bc6804c2e5fd2ab67616d00001e02cc3c88a5caf0ae3c54a43c3aab67616d00001e02cd7e670a91d0263d2ee1d8a7",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e020ae8a64fbea1d651f53c2cedab67616d00001e023b27e1cd8a6bc6804c2e5fd2ab67616d00001e02cc3c88a5caf0ae3c54a43c3aab67616d00001e02cd7e670a91d0263d2ee1d8a7",
            "height": 60,
            "width": 60
          }
        ],
        "name": "Faixas do Shazam",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAAY3wJLZPs894i6dSxwNUoPTPtzLmq",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/5MccQFnqzW9w3eBH9rx1kt/tracks",
          "total": 98
        },
        "type": "playlist",
        "uri": "spotify:playlist:5MccQFnqzW9w3eBH9rx1kt",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/1omtlu5WYFEJSdbC78nZqB"
        },
        "href": "https://api.spotify.com/v1/playlists/1omtlu5WYFEJSdbC78nZqB",
        "id": "1omtlu5WYFEJSdbC78nZqB",
        "images": [
          {
            "url": "https://mosaic.scdn.co/640/ab67616d00001e02206dcb32282da4c6a778d073ab67616d00001e024ff62a8bad528d3b04d0794eab67616d00001e026acbb6167824a651fe60dd40ab67616d00001e0276c9ae751ec0ad7ddd2f1b5b",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://mosaic.scdn.co/300/ab67616d00001e02206dcb32282da4c6a778d073ab67616d00001e024ff62a8bad528d3b04d0794eab67616d00001e026acbb6167824a651fe60dd40ab67616d00001e0276c9ae751ec0ad7ddd2f1b5b",
            "height": 300,
            "width": 300
          },
          {
            "url": "https://mosaic.scdn.co/60/ab67616d00001e02206dcb32282da4c6a778d073ab67616d00001e024ff62a8bad528d3b04d0794eab67616d00001e026acbb6167824a651fe60dd40ab67616d00001e0276c9ae751ec0ad7ddd2f1b5b",
            "height": 60,
            "width": 60
          }
        ],
        "name": "🇯🇵",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": false,
        "snapshot_id": "AAAAQDp5/h99zpgO4FJfmRLyUYatMLwb",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/1omtlu5WYFEJSdbC78nZqB/tracks",
          "total": 57
        },
        "type": "playlist",
        "uri": "spotify:playlist:1omtlu5WYFEJSdbC78nZqB",
        "primary_color": null
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/7wKPRJrt4CLL72ng6fPWZi"
        },
        "href": "https://api.spotify.com/v1/playlists/7wKPRJrt4CLL72ng6fPWZi",
        "id": "7wKPRJrt4CLL72ng6fPWZi",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e02abe839956cac18092c3bec37",
            "height": null,
            "width": null
          }
        ],
        "name": "FUN",
        "owner": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/geisonjr"
          },
          "href": "https://api.spotify.com/v1/users/geisonjr",
          "id": "geisonjr",
          "type": "user",
          "uri": "spotify:user:geisonjr",
          "display_name": "GeisonJr"
        },
        "public": true,
        "snapshot_id": "AAAAJB/4+f6e4wwH62S6CwXAGs+m9ZGT",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/7wKPRJrt4CLL72ng6fPWZi/tracks",
          "total": 5
        },
        "type": "playlist",
        "uri": "spotify:playlist:7wKPRJrt4CLL72ng6fPWZi",
        "primary_color": null
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

