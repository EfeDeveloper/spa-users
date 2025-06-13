import type { User, UserStats } from '@/domain/users/models/User'

export interface UserRepository {
  getUserList(): Promise<User[]>
  getUserStats(): Promise<UserStats[]>
}
