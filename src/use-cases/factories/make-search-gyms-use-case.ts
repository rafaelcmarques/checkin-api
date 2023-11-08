import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymUseCase } from '../search-gyms'

export function makeSearchGymUseCase() {
  const gym = new PrismaGymsRepository()
  const useCase = new SearchGymUseCase(gym)

  return useCase
}
