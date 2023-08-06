interface LoadingProps {
  isLoading: boolean
}

function Loading({ isLoading }: LoadingProps) {
  return isLoading && <p>Loading...</p>
}

export default Loading
