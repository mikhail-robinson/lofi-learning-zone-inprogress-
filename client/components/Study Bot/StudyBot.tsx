import { useState } from 'react'
import { studyQuestion } from '../../apis/study'

function StudyBot() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await studyQuestion(question)
    setAnswer(response)
    setQuestion('')
  }

  return (
    <div className="bg-gray-900 shadow-lg rounded p-3 w-4/5 flex flex-col items-center justify-center py-6 mt-40">
      <div className="w-full bg-gray-900 rounded bg-opacity-60 flex flex-col items-center justify-center space-y-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-2 w-4/5"
        >
          <div className="w-full flex justify-center">
            <input
              type="text"
              placeholder="Ask me a question!"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-2 rounded w-3/5 max-w-xs"
            />
          </div>
          <div className="w-1/5">
            <button
              className="text-white bg-gray-800 p-2 rounded w-full hover:bg-indigo-700"
              type="submit"
            >
              Ask
            </button>
          </div>
        </form>
        {answer && (
          <p className="w-full text-center text-white mt-4 break-words">
            {answer}
          </p>
        )}
      </div>
    </div>
  )
}
export default StudyBot
