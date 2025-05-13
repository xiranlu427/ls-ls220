// You're a clever thief planning a heist in a neighborhood
// where houses are arranged in a line. Each house contains a
// certain amount of valuable loot. However, the houses have a
// unique security system: if two adjacent houses are robbed, it
// triggers a neighborhood-wide alarm.

// Given an array of integers representing the value of loot in
// each house, determine the maximum amount of loot you can
// steal without triggering the alarm system.


// Example 1:
// Input: houses = [3,1,4,1,5]
// Output: 12
// Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
// Total loot stolen = 3 + 4 + 5 = 12.

// Example 2:
// Input: houses = [6,2,7,9,3,1]
// Output: 16
// Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
// Total loot stolen = 6 + 7 + 3 = 16.

function maximizeLoot(houses) {
  // my recursive solution
  const cache = new Map();
  if (houses.length === 0) {
    return 0;
  }

  if (houses.length === 1) {
    return houses[0];
  }

  function maxLoot(start) {
    if (start >= houses.length) {
      return 0;
    }

    if (start === houses.length - 1) {
      return houses[start];
    }

    const key = `${start}`;
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    let path1 = houses[start] + maxLoot(start + 2);
    let path2 = houses[start + 1] + maxLoot(start + 3);
    let result = Math.max(path1, path2);
    cache.set(key, result);
    return result;
  }
  
  return maxLoot(0);
}

// more idiomatic recursive solution (combine skipping the first house scenario to the main logic)
function maximizeLoot(houses) {
  const cache = new Map();

  function maxLoot(start) {
    if (start >= houses.length) {
      return 0;
    }

    if (!cache.has(start)) {
      let take = houses[start] + maxLoot(start + 2);
      let skip = maxLoot(start + 1);
      cache.set(start, Math.max(take, skip));
    }
    
    return cache.get(start);
  }
  
  return maxLoot(0);
}

// iterative approach
function maximizeLoot(houses) {
  if (houses.length === 0) {
    return 0;
  }

  if (houses.length === 1) {
    return houses[0];
  }

  const dp = new Array(houses.length).fill(0);
  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);

  for (let idx = 2; idx < houses.length; idx += 1) {
    const take = houses[idx] + dp[idx - 2];
    const skip = dp[idx - 1];
    dp[idx] = Math.max(take, skip);
  }
  
  return dp[houses.length - 1];
}

// Test cases
console.log(maximizeLoot([3,1,4,1,5]) === 12);
console.log(maximizeLoot([6,2,7,9,3,1]) === 16);
console.log(maximizeLoot([2,1,1,2]) === 4);
console.log(maximizeLoot([1,2,3,1]) === 4);
console.log(maximizeLoot([2,7,9,3,1]) === 12);
console.log(maximizeLoot([1,1,1,1,1,1,1,1,1,1]) === 5);
console.log(maximizeLoot([10,1,1,10]) === 20);
console.log(maximizeLoot([5,3,4,11,2]) === 16);
console.log(maximizeLoot([1]) === 1);
console.log(maximizeLoot([]) === 0);

// All test cases should log true