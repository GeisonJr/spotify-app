interface Options extends RequestInit {
  params?: Record<string, any>
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? ''

async function fetcher(url: string, options?: Options) {

  const apiUrl = new URL(BACKEND_URL)
  apiUrl.pathname = url

  const params = options?.params
  if (params) {
    const searchParams = new URLSearchParams(params)
    apiUrl.search = searchParams.toString()
  }

  const response = await fetch(apiUrl, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {})
    }
  })

  const data = await response.json()
  if (response.status === 401) {

    // Try refreshing the session
    const refreshResponse = await fetch('/api/refresh', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (refreshResponse.ok) {
      // If the session was refreshed successfully, retry the original request
      return fetcher(url, options)
    }

    // Handle unauthorized access
    console.error('Unauthorized access, redirecting to login')
    window.location.href = '/'
  }

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    json: () => data
  }
}

export function get(url: string, options?: Omit<Options, 'method'>) {
  return fetcher(url, {
    ...options,
    method: 'GET'
  })
}

export function post(url: string, options?: Omit<Options, 'method'>) {
  return fetcher(url, {
    ...options,
    method: 'POST'
  })
}
