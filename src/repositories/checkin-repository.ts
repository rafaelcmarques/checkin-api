import { CheckIn, Prisma } from '@prisma/client'

export interface CheckinRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
  findUserByIdOnData(userId: string, date: Date): Promise<CheckIn | null>
}
