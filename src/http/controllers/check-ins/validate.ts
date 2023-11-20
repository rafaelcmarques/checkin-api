import { FastifyRequest, FastifyReply } from 'fastify'

import { makeValidadeCheckInUseCase } from '@/use-cases/factories/make-validate-check-ins-use-case'
import { z } from 'zod'

export async function validate(request: FastifyRequest, replay: FastifyReply) {
  const createValidateCheckInSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const validadeCheckInUseCase = makeValidadeCheckInUseCase()

  const { checkInId } = createValidateCheckInSchema.parse(request.params)

  await validadeCheckInUseCase.execute({
    checkInId,
  })

  return replay.status(204).send()
}
