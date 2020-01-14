export class MenuItem {
    constructor(
        public text: string,
        public routerLink?: string,
        public subMenu?: MenuItem[],
        public disabled: boolean = true) { }
}
