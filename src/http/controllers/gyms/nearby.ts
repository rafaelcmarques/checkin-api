import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeFetchNearbyGymsUseCase } from '@/use-cases/factories/make-fetch-nearby-gyms-use-case'

export async function nearby(request: FastifyRequest, replay: FastifyReply) {
  const nearbyGymsQuerySchema = z.object({
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { latitude, longitude } = nearbyGymsQuerySchema.parse(request.body)

  const createGymUSeCase = makeFetchNearbyGymsUseCase()

  const { gyms } = await createGymUSeCase.execute({
    userLatitude: latitude,
    userLongitude: longitude,
  })

  return replay.status(201).send({
    gyms,
  })
}
