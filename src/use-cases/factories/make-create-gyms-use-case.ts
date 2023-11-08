import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gyms'

export function makeCreateGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(gymsRepository)

  return useCase
}
