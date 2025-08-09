interface Options extends RequestInit {
  params?: Record<string, any>
}

async function fetcher(url: string, options?: Options) {

  const apiUrl = new URL('http://127.0.0.1:3000/')
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
    // Handle unauthorized access, e.g., redirect to login
    console.error('Unauthorized access - redirecting to login')
    window.location.href = '/'
    return {
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      json: () => Promise.resolve(null)
    }
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
