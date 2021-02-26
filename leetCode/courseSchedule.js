var canFinish = function(numCourses, prerequisites) {
  let map = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    if (map.has(prerequisites[i][0])) {
      let pres = map.get(prerequisites[i][0]);
      pres.push(prerequisites[i][1]);
      map.set(prerequisites[i][0], pres);
    } else {
      map.set(prerequisites[i][0], [prerequisites[i][1]]);
    }
  }

  let visited = new Set();
  let visiting = new Set();

  let checkLoop = function(pre, course) {
    if (pre === undefined) return false;
    if (visited.has(course)) return false;
    visiting.add(course);

    for (let i = 0; i < pre.length; i++) {
      if (visited.has(pre[i])) continue;
      if (visiting.has(pre[i])) return true;
      if (checkLoop(map.get(pre[i]), pre[i])) return true;

      visited.add(pre[i]);
    }
    visiting.delete(course);
    visited.add(course);
    return false;
  }

  for (const [course, pre] of map) {
    if (checkLoop(pre, course)) return false;
  }

  return true;
};