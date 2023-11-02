import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface FetchNearByUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearByUseCaseResponse {
  gyms: Gym[]
}

export class FetchNearByUseCase {
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearByUseCaseRequest): Promise<FetchNearByUseCaseResponse> {
    const gyms = await this.gymRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      gyms,
    }
  }
}
