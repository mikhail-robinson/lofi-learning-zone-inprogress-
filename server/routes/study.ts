import { Router } from 'express'
import { Configuration, OpenAIApi } from 'openai'

const router = Router()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

router.post('/', async (req, res) => {
  try {
    const { message } = req.body
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    })

    res.json(chatCompletion.data.choices[0]?.message?.content || '')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
