import{Schema, model} from 'mongoose'
import bcrytp from 'bcryptjs'

const userSchema = new Schema(
  {
  username: {
    type: String,
    unique:true
  },
  email: {
    type: String,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    ref: "Role",
    type: Schema.Types.ObjectId
  }]

}, {
  timestamps: true,
  versionKey: false,
}
);

userSchema.statics.encryptPassword = async (password) =>{
  const salt = await bcrytp.genSalt(10)
  return await bcrytp.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) =>{
  return await bcrytp.compare(password,receivedPassword)
}

export default model('User', userSchema);