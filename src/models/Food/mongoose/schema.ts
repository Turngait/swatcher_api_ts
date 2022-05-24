const foodSchema = {
  title: String,
  calories: Number,
  harmfulness: Number,
  ingredients: [String],
  isComplex: Boolean,
  units: String,
  groupId: String,
  userId: String,
  descr: String,
  createdAt: String
};

export default foodSchema;