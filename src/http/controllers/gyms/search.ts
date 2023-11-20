import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchGymUseCase } from '@/use-cases/factories/make-search-gyms-use-case'

export async function search(request: FastifyRequest, replay: FastifyReply) {
  const registerBodySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { q, page } = registerBodySchema.parse(request.query)

  const createGymUSeCase = makeSearchGymUseCase()

  const { gyms } = await createGymUSeCase.execute({
    query: q,
    page,
  })

  return replay.status(200).send({
    gyms,
  })
}
