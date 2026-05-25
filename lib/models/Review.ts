import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Naam is verplicht'],
    maxlength: [60, 'Naam mag maximaal 60 tekens zijn'],
  },
  location: {
    type: String,
    required: [true, 'Locatie is verplicht'],
    maxlength: [60, 'Locatie mag maximaal 60 tekens zijn'],
  },
  text: {
    type: String,
    required: [true, 'Review tekst is verplicht'],
    maxlength: [500, 'Review mag maximaal 500 tekens zijn'],
  },
  rating: {
    type: Number,
    required: [true, 'Beoordeling is verplicht'],
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
