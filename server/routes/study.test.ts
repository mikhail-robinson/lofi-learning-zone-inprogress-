import {
  beforeEach,
  beforeAll,
  afterAll,
  describe,
  it,
  expect,
  vi,
} from 'vitest'
import request from 'supertest'
import server from '../server'
import { OpenAIApi } from 'openai'

vi.mock('openai') // Mock the OpenAIApi module to avoid real API calls

describe('POST /api/chat', () => {
  it('should return response from ChatGPT', async () => {
    const fakeResponse = 'Test response from ChatGPT'
    vi.mocked(OpenAIApi.prototype.createChatCompletion).mockResolvedValue({
      data: {
        choices: [{ message: { role: 'user', content: fakeResponse } }],
      },
    })
    const message = 'Test message to ChatGPT'
    const response = await request(server).post('/api/chat').send({ message })

    expect(response.status).toBe(200)
    expect(response.body).toBe(fakeResponse)
  })

  it('should return 500 when something goes wrong', async () => {
    vi.mocked(OpenAIApi.prototype.createChatCompletion).mockRejectedValue(
      new Error('API Error'),
    )
    const message = 'Test message causing error'
    const response = await request(server).post('/api/chat').send({ message })

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Something went wrong' })
  })
})
