import {Component, Input} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
	selector: 'user-profile',
	template: `
		<div class="jumbotron" *ngIf="user">
			<h3>{{user.name}}</h3><h4>{{user.username}}</h4>
			<input type="text" class="form-control" [(ngModel)]="user.name" />
		</div>
	`
})

export class UserProfileComponent {
	@Input() user: User;
}