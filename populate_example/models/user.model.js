import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  PERSONAL_DATA: {
    NAME: {
      type: String,
      required: 'Field \'name\' is required'
    },
    LASTNAME: {
      type: String,
      required: 'Field \'lastname\' is required'
    },
    EMAIL: {
      type: String,
      required: 'Field \'email\' is required'
    }
  },
  COMPANY_DATA: {
    JOB: {
      type: String,
      required: 'Field \'job\' is required'
    },
    AREA: {
      type: String,
      required: 'Field \'area\' is required'
    },
    ROLE: {
      type: String,
      required: 'Field \'role\' is required'
    }
  }
},
{collection: 'users'});

userSchema.virtual('NAME').get(function() {return this.PERSONAL_DATA.NAME});
userSchema.virtual('LASTNAME').get(function() {return this.PERSONAL_DATA.LASTNAME});

userSchema.plugin(uniqueValidator, {message: 'The {PATH} is either not valid or duplicated'});

export default mongoose.model('User', userSchema);
