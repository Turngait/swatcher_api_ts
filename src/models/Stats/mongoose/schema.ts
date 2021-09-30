const foodSchema = {
  userId: String,
  date: String,
  period: String,
  foods: [{
    food_id: String,
    description: String,
    amount: Number,
    time: String
  }],
  health: [{
    healthId: String,
    power: String,
    begin: String,
    duration: String,
    description: String
  }],
  createdAt: String
};

export default foodSchema;