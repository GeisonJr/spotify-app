async function fetcher(url: string, options?: RequestInit) {

  const apiUrl = new URL('http://127.0.0.1:3000/')
  apiUrl.pathname = url

  return await fetch(apiUrl, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {})
    }
  })
}

export function get(url: string, options?: Omit<RequestInit, 'method'>) {
  return fetcher(url, {
    ...options,
    method: 'GET'
  })
}

export function post(url: string, options?: Omit<RequestInit, 'method'>) {
  return fetcher(url, {
    ...options,
    method: 'POST'
  })
}
