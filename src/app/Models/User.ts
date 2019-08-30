export class Name {
    name: string;
    surname: string;
    surname2: string;
    fullName: string;

    constructor(name: string, surname: string, surname2: string) {
        this.name = name;
        this.surname = surname;
        this.surname2 = surname2;
        this.fullName = this.name + ' ' + this.surname + ' ' + this.surname2;
    }
}

export class User {
    name: Name;
    age: number;
    sex: string;
    avatarPath: string;
    shortDescription: string;
    description: string;
    interests: string[];

    public addName(name: string, surname: string, surname2: string): void {
        this.name = new Name(name, surname, surname2);
    }
}
