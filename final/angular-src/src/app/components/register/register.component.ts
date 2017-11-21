import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService: ValidateService,private flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name:this.name,
      username:this.username,
      password:this.password,
      email:this.email
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessageService.show('Please fill in all fields.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessageService.show('Please input an valid email address.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
  }

}
