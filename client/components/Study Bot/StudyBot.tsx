import { Configuration, OpenAIApi } from 'openai'
import { SetStateAction, useState } from 'react'
import OPENAI_API_KEY from '../config'

function StudyBot() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInput(event.target.value)
  }

  const handleSubmit = async () => {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }],
    })
    setResponse(chatCompletion.data.choices[0]?.message?.content || '')
  }

  return (
    <div>
      <h1>This is the study bot</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{response}</p>
    </div>
  )
}

export default StudyBot
