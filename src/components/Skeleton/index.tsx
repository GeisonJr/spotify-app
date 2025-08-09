import { Fragment } from 'react'
import styles from './index.module.css'
import type { SkeletonProps } from './types'

function Skeleton({ isLoading, ...rest }: SkeletonProps) {

  if (!isLoading) {
    return (
      <Fragment {...rest} />
    )
  }

  return (
    <>
      <div className={styles.container}>
        <Fragment {...rest} />
        <div className={styles.overlay} />
      </div>
    </>
  )
}

export default Skeleton
