import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: UserModel | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    const userId: string|null = this.route.snapshot.paramMap.get('id');
    if(userId) {
      this.userService.getUserById(userId).subscribe(user => this.user = user);
    }else{
      this.user = undefined;
      console.log("idddddd"+userId);
    }
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
