import {Component} from '@angular/core';
import {User} from './shared/models/user';
import {UserProfileComponent} from './users/user-profile.component';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css'] 
})

export class AppComponent {
	users: User[] = [
		{id: 5, name: 'lorep Jack', username:'lorjack'},
		{id: 6, name: 'Akinbode Weezykon', username:'weezykon'},
		{id: 7, name: 'Sarah Laureta', username:'lauretacutie'}
	]

	activeUser: User;

	selectUser(user){
		this.activeUser = user;
	}

	onUserCreated(event){
		// console.log(event);
		this.users.push(event.user);
	}
}