import { CheckIn, Prisma, User } from '@prisma/client'

export interface CheckinRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
}
