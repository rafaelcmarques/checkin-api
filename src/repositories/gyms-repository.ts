import { Gym, Prisma } from '@prisma/client'
export interface FindManyNearbyProps {
  latitude: number
  longitude: number
}

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>
  findManyNearby({ latitude, longitude }: FindManyNearbyProps): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
  searchMany(query: string, page: number): Promise<Gym[]>
}
