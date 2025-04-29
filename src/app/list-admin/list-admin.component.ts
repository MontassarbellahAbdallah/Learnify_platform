import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  listAdmin1:Admin[]
  constructor(private service:CrudService, private router:Router){}
  ngOnInit():void{
    this.service.getAdmin().subscribe(admin=>{this.listAdmin1=admin})
  }
  deleteAdmin(admin:Admin){
    if(confirm("voulez vous supprimer ce admin ???")){
      this.service.suppAdmin(admin.id).subscribe(()=>{
        this.router.navigate(["/la"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }

}
