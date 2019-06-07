import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService} from '../shared/auth.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(public authService: AuthService,
              public router: Router,
              public ngZone: NgZone) { }

  ngOnInit() {
  }

}
