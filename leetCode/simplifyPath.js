var simplifyPath = function(path) {
    let route = [];

    for (let i = 0; i < path.length; i++) {
        let currChar = path[i];
        let index = i;
        if (currChar === '/') {
            while (currChar === '/') {
                index++;
                currChar = path[index];
            }
            // add '/' to the route
            route.push('/');
        } else {
            // count the number of consecutive periods.
            let dotCount = 0;
            while (currChar !== '/' && currChar !== undefined) {
                if (currChar === '.') {
                    dotCount++;
                }
                index++;
                currChar = path[index];
            }
            if (index - i === 1) {
                if (dotCount === 1) {
                    route.pop();
                } else {
                    route.push(path[i]);
                }
            } else if ((index - i === 2) && dotCount === 2) {
                let num = 0;
                while (num < 3 && route.length > 0) {
                    route.pop();
                    num++;
                }
            } else { // if longer treat it like a directory
                let word = path.slice(i, index);
                route.push(word);
            } 
        } 
        i = index - 1;
    }

    if (route.length < 2) return '/';
    if (route[route.length - 1] === '/') {
        route.pop();
    }
    return route.join('');
};