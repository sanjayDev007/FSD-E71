let obj = {
    a: 1, b: 2, c: {
        d: 3, e: 4, f: {
            g: 5, h: 6,
            i: {
                j: 7, k: 8, l: {
                    m: 9
                }
            }
        }
    }
};

let obj2 = {...obj}; // Deep copy
obj2.a = 10;
obj2.c.d = 30;
obj2.c.f.g = "50";

console.log("Obj1: " + JSON.stringify(obj));
console.log("Obj2: " + JSON.stringify(obj2));
