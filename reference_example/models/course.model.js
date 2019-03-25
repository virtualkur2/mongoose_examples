import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const courseSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: 'Campo nombre es requerido',
    unique: true
  },
  profesor: [{
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Profesor'
    }
  }]
});

export default mongoose.model('Course', courseSchema);
