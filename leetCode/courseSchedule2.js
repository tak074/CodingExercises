var findOrder = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        let temp = new Array(numCourses);
        let index = 0;
        while (index < numCourses) {
            temp[index] = index;
            index++; 
        }
        return temp;
    }

    let map = new Map();
    let order = new Map();
    let visited = new Set();
    let visiting = new Set();

    for (let i = 0; i < prerequisites.length; i++) {
        let courseName = prerequisites[i][0];
        let requiredCourse = prerequisites[i][1];
        if (map.has(courseName)) {
            let reqs = map.get(courseName);
            reqs.push(requiredCourse);
        } else {
            map.set(courseName, [requiredCourse]);
        }
    }

    let addOrder = function(course) {
        if (visited.has(course)) return;
        if (visiting.has(course)) return -1;
        
        if (!map.has(course)) {
            order.set(course, true);
            visited.add(course);
            return;
        }
        
        let preReqs = map.get(course);
        visiting.add(course);
        for (reqs of preReqs) {
            if (!order.has(reqs)) {
                let check = addOrder(reqs);
                if (check === -1) {
                    return -1;
                }
            }
        }
        visiting.delete(course);
        order.set(course, true);
        visited.add(course);
    }

    for (let j = 0; j < prerequisites.length; j++) {
        let courseName = prerequisites[j][0];
        let check = addOrder(courseName);
        if (check === -1) return [];
    }

    let res = Array.from(order.keys());
    if (res.length === numCourses) return res;

    let index = 0;
    while (index < numCourses) {
        if (!order.has(index)) res.push(index);
        index++;
    }

    return res;
};