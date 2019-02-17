import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const areaSchema = new mongoose.Schema({
  NAME: {
    type: String,
    required: 'Field \'name\' is required',
    unique: true,
    max: 50,
    min: 3
  },
  STATUS: {
    type: String,
    default: 'active'
  },
  ADDED_BY: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  ADDED_DATE: {
    type: Date,
    default: Date.now
  },
  MODIFY_BACKLOG: [{
    USER: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    DATE: {
      type: Date,
      default: Date.now
    },
    CURRENT: {
      type: String
    },
    MODIFIED: {
      type: String
    }
  }]
},
{collection: 'areas'});

// areaSchema.post('find', async function(docs, next){
//   for (let doc of docs) {
//     if(doc.MODIFY_BACKLOG.length > 0) {
//       for (let log of doc.MODIFY_BACKLOG) {
//         console.log(log);
//       }
//     }
//   }
// });

areaSchema.plugin(uniqueValidator, {message: 'The {PATH} is either not valid or duplicated'});

export default mongoose.model('area', areaSchema);
