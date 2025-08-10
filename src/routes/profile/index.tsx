import If from '@/components/If'
import Layout from '@/components/Layout'
import link from '@/components/Link/index.module.css'
import Skeleton from '@/components/Skeleton'
import { useProfile } from '@/hooks/useProfile'
import { createFileRoute } from '@tanstack/react-router'
import styles from './index.module.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const url = new URL('/auth/logout', BACKEND_URL)

export const Route = createFileRoute('/profile/')({
  component: Profile
})

function Profile() {
  const {
    data,
    status
  } = useProfile()

  const user = data?.data

  const isLoading = status === 'pending'
  const length = user?.images?.length ?? 0

  return (
    <>
      <Layout>
        <div className={styles.content}>
          <Skeleton isLoading={isLoading}>
            <If condition={length === 0}>
              <div className={styles.noAvatar}>
                {user?.display_name[0] ?? 'U'}
              </div>
            </If>
            <If condition={length > 0}>
              <img
                className={styles.avatar}
                alt={'Avatar'}
                src={user?.images[0]?.url}
              />
            </If>
          </Skeleton>
          <Skeleton isLoading={isLoading}>
            <h2 className={styles.username}>
              {user?.display_name ?? 'Carregando...'}
            </h2>
          </Skeleton>
          <a
            className={link.container}
            href={url.toString()}
          >
            {'Sair'}
          </a>
        </div>
      </Layout>
    </>
  )
}
