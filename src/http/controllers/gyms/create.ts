import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateGymsUseCase } from '@/use-cases/factories/make-create-gyms-use-case'

export async function create(request: FastifyRequest, replay: FastifyReply) {
  const createGymSchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    phone: z.string().nullable(),
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { title, description, phone, latitude, longitude } =
    createGymSchema.parse(request.body)

  const createGymUSeCase = makeCreateGymsUseCase()

  await createGymUSeCase.execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  })

  return replay.status(201).send()
}
