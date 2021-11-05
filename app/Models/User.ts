import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public guid: string

  @beforeCreate()
  public static async createUUID (user: User) {
    user.guid = uuid();
  }

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public image: string

  @column()
  public age: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
