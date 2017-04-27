"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        //show the event that the user is created
        this.userCreated.emit({ user: this.newUser });
        console.log(this.newUser);
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return UserFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "userCreated", void 0);
UserFormComponent = __decorate([
    core_1.Component({
        selector: "user-form",
        styles: ["\n\t\tform {\n\t\t\tpadding:10px;\n\t\t\tbackground:#ECF0F1;\n\t\t\tborder-radius:3px;\n\t\t\tmargin-bottom:20px;\n\t\t}\n\t"],
        template: "\n\t\t<form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error': name.invalid && name.touched}\">\n\t\t\t\t<input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n\t\t\t\t<span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Name is required</span>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error': username.invalid && username.touched}\">\n\t\t\t\t<input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required [(ngModel)]=\"newUser.username\" #username=\"ngModel\">\n\t\t\t\t<span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Username is required</span>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-md btn-block btn-primary\" [disabled]=\"form.invalid\">Create User</button>\n\t\t\t</div>\n\t\t</form>\n\t"
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map