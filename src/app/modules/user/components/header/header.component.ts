import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private auth: AuthService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  onLogout(): void {
    this.auth.userLogOut();
  }
}
