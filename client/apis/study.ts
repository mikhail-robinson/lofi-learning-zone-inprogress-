import request from 'superagent'

const rootUrl = '/api/chat'

export async function studyQuestion(question: string) {
  const res = await request.post(rootUrl).send({ message: question })
  return res.body
}
