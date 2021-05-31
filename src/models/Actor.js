import {Schema, model} from 'mongoose'

const actorSchema = new Schema({
  name: String,
  age: Number,
  weight: Number,
  history: String,
  imgURL: String,
  production_id: Number
},{
  timestamps: true,
  versionKey: false,
})

export default model('Actor',actorSchema);