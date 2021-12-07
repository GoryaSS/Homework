const arr = ['s', 'a', 'b'];
arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
});
console.log(arr);








const langArr = [
    { value: 'ENG', labet: 'Eng' },
    { value: 'UA', labet: 'Ukr' }, 
];
langArr.sort((a, b) => {
    if (a.value > b.value) return 1;
    else if (a.value < b.value) return -1;
    
    if (a.labet > b.labet) return 1;
    else if (a.labet < b.labet) return -1;

    return 0;
});
console.log(langArr);






class User {
    constructor(name, email) {
        this.name = name;
        this.name = email;
    }
    logIn() {
        console.log(`${this.name} has logged in`);
    }
    logOut() {
        console.log(`${this.name} has logged out`);
    }
}
const userOne = new User("Ihor", "asd@asd.com");
const userTwo = new User("Nast", "wwe@asd.com");

userOne.logIn();
userTwo.logOut();





class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
    set fullName(fullName) {
        [this.name, this.lastname] = fullName.split(' ');
    }
}
const user = new User("Nast", "Bor");
console.log(user.fullName);

user.fullName = 'Ihor Bor';
console.log(user.fullName);







class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    printPosition() {
        console.log(`current point position X: ${this.x}, Y: ${this.y}`);
    }
}
const point = new Point(3, 7);
point.printPosition();

// class Child extend Parent

class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    printPosition() {
        console.log(`current point position X: ${this.x}, Y: ${this.y}, Y: ${this.z}`);
        super.printPosition();
    }
}

const point2 = new Point3D(11, 23, 222);
point2.printPosition();
