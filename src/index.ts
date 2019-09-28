interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "Brandon",
    age: 27,
    gender: "male"
};

const sayHi = (person: Human): string => {
    return `hello ${name}, you are ${age}, and you are ${gender}`;
}

console.log(sayHi(person));

export {};