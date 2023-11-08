import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface SearchGymUseRequest {
  query: string
  page: number
}

interface SearchGymUseResponse {
  gyms: Gym[]
}

export class SearchGymUseCase {
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymUseRequest): Promise<SearchGymUseResponse> {
    const gyms = await this.gymRepository.searchMany(query, page)

    return {
      gyms,
    }
  }
}
