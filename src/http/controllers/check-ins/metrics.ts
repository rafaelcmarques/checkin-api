import { FastifyRequest, FastifyReply } from 'fastify'

import { makeGetUserMatricsUserCase } from '@/use-cases/factories/make-get-user-metrics-user-case'

export async function metrics(request: FastifyRequest, replay: FastifyReply) {
  const fetchUserCheckInsHistoryUseCase = makeGetUserMatricsUserCase()

  const { checkInsCount } = await fetchUserCheckInsHistoryUseCase.execute({
    userId: request.user.sub,
  })

  return replay.status(200).send({
    checkInsCount,
  })
}
