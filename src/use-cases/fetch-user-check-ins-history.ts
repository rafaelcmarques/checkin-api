import { CheckinRepository } from '@/repositories/checkin-repository'
import { CheckIn } from '@prisma/client'

interface FetchUserCheckInHistoryRequest {
  userId: string
  page: number
}

interface FetchUserCheckInHistoryResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInHistory {
  constructor(private checkInsRepository: CheckinRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInHistoryRequest): Promise<FetchUserCheckInHistoryResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
