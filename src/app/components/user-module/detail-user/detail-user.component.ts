import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

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

  deleteUser(user: UserModel){
    this.userService.deleteUser(user).subscribe(() => this.router.navigate(['/users']))
  }

  goToEditUser(userId: string) {
    this.router.navigate(['/user/'+userId])
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
