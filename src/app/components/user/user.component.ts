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
    showUserForm: boolean;
    btnClass = {};
    headingStyle = {};

    constructor() {
        this.user = this.setUser();
        this.users = [];
        this.loaded = false;
        this.addUserBtnEnabled = false;
        this.uppercaseEnabled = true;
        this.headingEnabled = false;
        this.showUserForm = false;

        this.setBtnClass();
        this.setHeadingStyle();
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.setUsers();
            this.loaded = true;
        }, 1000);

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

    public setUser(): User {
        return this.user = {
            firstName: "",
            lastName: "",
            email: "",
            age: undefined,
            registered: new Date(),
            image: "http://placebeard.it/g/640/480/305",
            hide: true
        };
    }

    addUser() {
        this.users.unshift(this.user);
        this.setUser();
    }

    onFormSubmit(event: Event) {
        console.log(event);
        event.preventDefault(); //prevents the page to reload
    }

    toggleHide(user: User): boolean {
        return user.hide = !user.hide;
    }

    private setUsers() {
        this.users = [
            {
                firstName: "John",
                lastName: "Doe",
                email: "John.Doe@gmail.com",
                age: 30,
                address: {
                    street: "50 Main Street",
                    city: "Oklahoma-city",
                    state: "Oklahoma"
                },
                image: "http://placebeard.it/g/640/480/305",
                isActive: false,
                registered: new Date(),
                hide: true
            },
            {
                firstName: "Filippo",
                lastName: "Lunatic",
                email: "Filippo.Lunatic@yahoo.com",
                age: 30,
                address: {
                    street: "50 Main Street",
                    city: "Oklahoma-city",
                    state: "Oklahoma"
                },
                image: "http://placebeard.it/g/640/480/12",
                isActive: true,
                registered: new Date("01/01/1930"),
                hide: true
            },
            {
                firstName: "Travis",
                lastName: "Jackson",
                email: "Travis.Jackson@rambler.ru",
                age: 50,
                address: {
                    street: "50 Main Street",
                    city: "Oklahoma-city",
                    state: "Oklahoma"
                },
                image: "http://placebeard.it/g/640/480/10",
                isActive: true,
                registered: new Date(),
                hide: true
            }
        ];
    }
}