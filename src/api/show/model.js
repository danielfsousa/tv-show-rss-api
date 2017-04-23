import { Schema } from 'mongoose';
import mongoose from '../../services/mongoose';

const showSchema = new Schema({
  imdbID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  current_season: Number,
  magnets: [{
    title: String,
    sd: String,
    _720p: String,
    _1080p: String,
  }, { timestamps: true }],
});

const model = mongoose.model('TvShow', showSchema);

export const schema = model.schema;
export default model;
