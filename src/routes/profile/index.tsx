import Layout from '@/components/Layout'
import { createFileRoute } from '@tanstack/react-router'

import If from '@/components/If'
import link from '@/components/Link/index.module.css'
import type { UserResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/profile/')({
  loader: async () => {
    return { user }
  },
  component: Profile
})

function Profile() {

  const { user } = Route.useLoaderData()

  return (
    <>
      <Layout>
        <div className={styles.content}>
          <If condition={user.data.images.length === 0}>
            <div className={styles.noAvatar}>
              {user.data.display_name[0]}
            </div>
          </If>
          <If condition={user.data.images.length > 0}>
            <img
              className={styles.avatar}
              alt={'Avatar'}
              src={user.data.images[0]?.url}
            />
          </If>
          <h2 className={styles.username}>
            {user.data.display_name}
          </h2>
          <a
            className={link.container}
            href={'http://127.0.0.1:3000/auth/logout'}
          >
            {'Sair'}
          </a>
        </div>
      </Layout>
    </>
  )
}

const user: UserResponse = {
  message: 'Usuário carregado com sucesso',
  data: {
    "country": "BR",
    "display_name": "GeisonJr",
    "email": "eu+spotify@geison.dev",
    "explicit_content": {
      "filter_enabled": false,
      "filter_locked": false
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/user/geisonjr"
    },
    "followers": {
      "href": null,
      "total": 6
    },
    "href": "https://api.spotify.com/v1/users/geisonjr",
    "id": "geisonjr",
    "images": [],
    "product": "premium",
    "type": "user",
    "uri": "spotify:user:geisonjr"
  }
}
