import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuItems = this.menuService.getMenus();
  }
}
