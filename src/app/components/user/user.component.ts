import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    // template: "<h2> John Doe </h2>",
    styleUrls: ["./user.component.css"]
})

export class UserComponent implements OnInit {

    user: User;
    users: User[];
    loaded: boolean;
    addUserBtnEnabled: boolean;
    uppercaseEnabled: boolean;
    headingEnabled: boolean;
    btnClass = {};
    headingStyle = {};


    firstName: string = "John";
    lastName: string = "Doe";
    age: number = 30;

    constructor() {
        this.user = this.setUser();
        this.users = [];
        this.loaded = false;
        this.addUserBtnEnabled = true;
        this.uppercaseEnabled = true;
        this.headingEnabled = false;

        this.setBtnClass();
        this.setHeadingStyle();
    }

    private setHeadingStyle() {
        this.headingStyle = {
            "padding-top": this.headingEnabled ? '0' : '40px'
        };
    }

    private setBtnClass() {
        this.btnClass = {
            "btn-success": this.addUserBtnEnabled,
            "big-text": this.uppercaseEnabled
        };
    }

    private setUser(): User {
        return this.user = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            address: {}
        };
    }



    showAge(): number {
        return this.age;
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.setUsers();
            this.loaded = true;
        }, 1000);

    }

    private setUsers() {
        this.users = [
            {
                firstName: "John",
                lastName: "Doe",
                age: 30,
                address: {
                    street: "50 Main Street",
                    city: "Oklahoma-city",
                    state: "Oklahoma"
                },
                image: "http://placebeard.it/g/640/480/305",
                isActive: false,
                balance: 200,
                registered: new Date()
            },
            {
                firstName: "Filippo",
                lastName: "Lunatic",
                age: 30,
                address: {
                    street: "50 Main Street",
                    city: "Oklahoma-city",
                    state: "Oklahoma"
                },
                image: "http://placebeard.it/g/640/480/12",
                isActive: true,
                balance: 400,
                registered: new Date("01/01/1930")
            },
            {
                firstName: "Travis",
                lastName: "Jackson",
                age: 50,
                address: {
                    street: "50 Main Street",
                    city: "Oklahoma-city",
                    state: "Oklahoma"
                },
                image: "http://placebeard.it/g/640/480/10",
                isActive: true,
                balance: 50,
                registered: new Date()
            }
        ];
    }
}