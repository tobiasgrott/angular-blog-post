import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menu-item';


const menuItems: MenuItem[] = <MenuItem[]>[
  { text: 'Services', subMenu: [{ text: 'Package', routerLink: 'services/package' }, { text: 'Delivery', routerLink: 'services/delivery' }, { text: 'Express', routerLink: 'services/express' }] },
  { text: 'Invester Relations', subMenu: [{ text: 'Q-Results', routerLink: 'investers/q-results' }, { text: 'YoY', routerLink: 'investers/yoy' }, { text: 'News', routerLink: 'investers/news' }] },
  { text: 'Category', subMenu: [{ text: 'World', routerLink: 'news/world' }, { text: 'Local', routerLink: 'news/local' }, { text: 'Sports', routerLink: 'news/sports' }] },
  { text: 'Admin', subMenu: [{ text: 'Settings', routerLink: 'admin/settings', disabled: false }, { text: 'Security', routerLink: 'admin/security' }, { text: 'Cookies', routerLink: 'cookies' }] },
  { text: 'About', subMenu: [{ text: 'About Us', routerLink: 'about-us' }, { text: 'History', routerLink: 'history' }, { text: 'Companies', routerLink: 'companies' }] },
  { text: 'Contact', subMenu: [{ text: 'Email', routerLink: 'contact/email' }, { text: 'Chat', routerLink: 'contact/chat' }, { text: 'Feedback', routerLink: 'contact/feedback' }] }
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() {
    return menuItems;
  }
}
