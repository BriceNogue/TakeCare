import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from 'src/app/models/role';
import { UserModel } from 'src/app/models/user-model';
import { HServiceService } from 'src/app/services/h-service.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-acces-right',
  templateUrl: './add-acces-right.component.html',
  styleUrls: ['./add-acces-right.component.scss']
})
export class AddAccesRightComponent {
  user: UserModel | undefined;
  userServiceName: string
  roles: RoleModel[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private hService: HServiceService,
    private roleService: RoleService,
    private location: Location
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

      this.roleService.getRoles().subscribe(roles => {
        this.roles = roles;
      })
    }else{
      this.user = undefined;
      console.log("idddddd"+userId);
    }
  }

  goBack() {
    this.location.back();
  }

  onSubmit(user: UserModel) {
    this.userService.updateUser(user).subscribe();
  }
}
