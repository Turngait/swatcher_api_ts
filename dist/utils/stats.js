"use strict";
exports.__esModule = true;
exports.normalizeStatData = void 0;
// TODO Типизировать все здесь
function normalizeStatData(stats, foods, health) {
    if (Array.isArray(stats) && Array.isArray(foods)) {
        stats.map(function (stat) {
            var normalizeFoods = [];
            var normalizedHealth = [];
            for (var _i = 0, _a = stat.foods; _i < _a.length; _i++) {
                var statFood = _a[_i];
                var publicFoodStat = {
                    title: '',
                    description: statFood.description,
                    amount: statFood.amount,
                    time: statFood.time,
                    id: statFood._id
                };
                for (var _b = 0, foods_1 = foods; _b < foods_1.length; _b++) {
                    var food = foods_1[_b];
                    if (statFood.food_id === food.id) {
                        publicFoodStat.title = food.title;
                    }
                }
                normalizeFoods.push(publicFoodStat);
            }
            for (var _c = 0, _d = stat.health; _c < _d.length; _c++) {
                var statHealth = _d[_c];
                var publicHealthStat = {
                    title: '',
                    description: statHealth.description,
                    duration: statHealth.duration,
                    begin: statHealth.begin,
                    power: statHealth.power,
                    id: statHealth._id
                };
                for (var _e = 0, health_1 = health; _e < health_1.length; _e++) {
                    var itemH = health_1[_e];
                    if (statHealth.health_id === String(itemH.id)) {
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
exports.normalizeStatData = normalizeStatData;
//# sourceMappingURL=stats.js.map