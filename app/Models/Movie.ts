import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';

export default class Movies extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public guid: string

  @beforeCreate()
  public static async createUUID (movie: Movies) {
    movie.guid = uuid();
  }
  
  @column()
  public name: string

  @column()
  public link: string

  @column()
  public genre: string

  @column()
  public time: string

  @column()
  public year: number

  @column()
  public direction: string

  @column()
  public synopsis: string

  @column()
  public folder: string

  @column()
  public trailer: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
