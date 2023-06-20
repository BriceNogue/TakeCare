import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { HServiceService } from 'src/app/services/h-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  user: UserModel | undefined;
  userServiceName: string

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private hService: HServiceService
    ) { }

  ngOnInit(): void {
    const userId: string|null = this.route.snapshot.paramMap.get('id');
    if(userId) {
      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;

        this.hService.getServiceById(user!.service_id).subscribe(res => {
          this.userServiceName = res!.libelle;
        })
      });
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
