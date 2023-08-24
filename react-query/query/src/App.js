import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
   </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}

function Todos(){
  const queryClient = useQueryClient()
  const query = useQuery({queryKey: ['todos'], queryFn:() =>
  fetch('https://api.github.com/repos/TanStack/query').then(
    (res) => res.json(),
  ),})

  const mutation = useMutation({
    mutationFn:postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['todos']})
    }
  })
  return (
    <div>
      <ul>
        {query.data?.map((todo) => {
          
        })}
      </ul>
    </div>
  )
}

//Queries, Mutation and QueryInvalidations