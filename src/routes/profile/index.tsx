import If from '@/components/If'
import Layout from '@/components/Layout'
import link from '@/components/Link/index.module.css'
import { get } from '@/functions'
import { createFileRoute } from '@tanstack/react-router'

import type { UserResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/profile/')({
  loader: async () => {

    const response = await get('/user/profile')

    if (!response.ok) {
      throw new Error('Failed to load user profile')
    }

    const user = await response.json() as UserResponse

    return {
      user
    }
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
