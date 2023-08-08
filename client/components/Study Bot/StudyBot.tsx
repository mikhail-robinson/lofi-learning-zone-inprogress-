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
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      {answer && <p>{answer}</p>}
    </div>
  )
}
export default StudyBot
