import api from '@/core/services/axios.service'
import { userListAdapter, userStatsAdapter } from '@/domain/users/adapters/user.adapter'
import type { User, UserStats } from '@/domain/users/models/User'

import type { UserRepository } from '../repositories/userFetch.repository'

export class UserApiRepository implements UserRepository {
  async getUserList(): Promise<User[]> {
    const { data } = await api.get('/users?limit=100')
    return userListAdapter(data.users)
  }

  async getUserStats(): Promise<UserStats[]> {
    const { data } = await api.get('/users?limit=100')

    return userStatsAdapter(data.users)
  }
}
