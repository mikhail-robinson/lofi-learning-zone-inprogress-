interface LoadingProps {
  isLoading: boolean
}

function Loading({ isLoading }: LoadingProps) {
  return isLoading && <p className="text-white">Loading...</p>
}

export default Loading
