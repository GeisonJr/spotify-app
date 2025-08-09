import { get } from '@/functions'
import type { UserResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

const fetchProfile = async (): Promise<UserResponse> => {
  const response = await get('/user/profile')

  if (!response.ok) {
    throw new Error('Failed to load profile')
  }

  return response.json()
}

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchProfile()
  })
}
