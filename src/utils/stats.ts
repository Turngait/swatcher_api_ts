
// TODO Типизировать все здесь
export function normalizeStatData(stats, foods) {
  if (Array.isArray(stats) && Array.isArray(foods)) {
    stats.map((stat: any) => {
      const normalizeFoods = [];
      for (const statFood of stat.foods) {
        const publicFoodStat = {
          title: '',
          description: statFood.description,
          amount: statFood.amount,
          time: statFood.time,
          id: statFood._id
        };
        for (const food of foods) {
          if(statFood.food_id === food.id) {
            publicFoodStat.title = food.title;
          }
        }
        normalizeFoods.push(publicFoodStat);
      }
      stat.foods = normalizeFoods;
    });
  }

  return stats;
}