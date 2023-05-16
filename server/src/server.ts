import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

// Criando nossa REST FULL API:
const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {

  // Retorna todos os usuários (note que não estamos utilizando filtros)
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
