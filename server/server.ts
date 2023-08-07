import express from 'express'
import { join } from 'node:path'
import StudyRoutes from './routes/study'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/chat', StudyRoutes)

export default server
