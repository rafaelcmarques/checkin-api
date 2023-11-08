import { FetchUserCheckInHistory } from '../fetch-user-check-ins-history'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRespository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInHistory(checkInsRespository)

  return useCase
}
