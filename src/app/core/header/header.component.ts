import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'am-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit() {
  }

  openSideBar() {
    this.toggle.emit();
  }
}
