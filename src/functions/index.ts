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

  return await fetch(apiUrl, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {})
    }
  })
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
