// ------------------------------Problem-1-------------------------------
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
console.log(formatString("Hello World"));
console.log(formatString("Hello World", true));
console.log(formatString("Hello World", false));

// ------------------------------Problem-2-------------------------------
type Items = { title: string; rating: number};

function filterByRating(items: Items[], minRating: number): Items[] {
    return items.filter(item => item.rating >= minRating);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 3.0 },
  { title: "Book E", rating: 9.0 },
];
console.log(filterByRating(books, 4));

// ------------------------------Problem-3-------------------------------
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// ------------------------------Problem-4-------------------------------
class Vehicle {
    constructor(private make: string, private year: number) {
        this.make = make;
        this.year = year;
        
    }
    getInfo(): string {
        return `Make: ${this.make} Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): string {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// ------------------------------Problem-5-------------------------------
type Value = number | string

function processValue(value: Value): Value {
    if (typeof value === "number") {
        return value * 2;
    } else if (typeof value === "string") {
        return value.length;
    }
}
console.log(processValue("hello"));
console.log(processValue(5));

// ------------------------------Problem-6-------------------------------
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((prev, curr) => (curr.price > prev.price ? curr : prev));
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct([]));

// ------------------------------Problem-7-------------------------------
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Saturday));

// ------------------------------Problem-8-------------------------------
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
            return;
        }
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}
squareAsync(2).then(console.log);
// squareAsync(-3).catch(console.error);
