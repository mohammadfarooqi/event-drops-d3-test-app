import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto() {
    this.router.navigate(['a']);
  }

}
