const API_BASE_URL = 'http://127.0.0.1:8000/api'

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error('Error en la peticion: ' + response.status)
  }
  if (response.status === 204) {
    return undefined as unknown as T
  }
  return response.json() as Promise<T>
}

export async function getList<T>(resource: string): Promise<T[]> {
  const response = await fetch(API_BASE_URL + '/' + resource + '/')
  return handleResponse<T[]>(response)
}

export async function getOne<T>(resource: string, id: number): Promise<T> {
  const response = await fetch(API_BASE_URL + '/' + resource + '/' + id + '/')
  return handleResponse<T>(response)
}

export async function createOne<T>(resource: string, data: Partial<T>): Promise<T> {
  const response = await fetch(API_BASE_URL + '/' + resource + '/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse<T>(response)
}

export async function updateOne<T>(resource: string, id: number, data: Partial<T>): Promise<T> {
  const response = await fetch(API_BASE_URL + '/' + resource + '/' + id + '/', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse<T>(response)
}

export async function deleteOne(resource: string, id: number): Promise<void> {
  const response = await fetch(API_BASE_URL + '/' + resource + '/' + id + '/', {
    method: 'DELETE',
  })
  return handleResponse<void>(response)
}
