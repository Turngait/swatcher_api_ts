// TODO Типизировать все здесь
export function normalizeStatData(stats, foods, health) {
  if (Array.isArray(stats) && Array.isArray(foods)) {
    stats.map((stat: any) => {
      const normalizeFoods = [];
      const normalizedHealth = [];
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

      for (const statHealth of stat.health) {
        const publicHealthStat = {
          title: '',
          description: statHealth.description,
          duration: statHealth.duration,
          begin: statHealth.begin,
          power: statHealth.power,
          id: statHealth._id
        };
        for (const itemH of health) {
          if(statHealth.health_id === String(itemH.id)) {
            publicHealthStat.title = itemH.title;
          }
        }
        normalizedHealth.push(publicHealthStat);
      }
      stat.foods = normalizeFoods;
      stat.health = normalizedHealth;
    });
  }
  return stats;
}