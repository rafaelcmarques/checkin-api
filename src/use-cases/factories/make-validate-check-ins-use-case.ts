import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '../validate-check-in'

export function makeValidadeCheckInUseCase() {
  const checkIn = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(checkIn)

  return useCase
}
