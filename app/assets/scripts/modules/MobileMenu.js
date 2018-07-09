import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.header = $('.header');
        this.menuIcon = $('.header__menu-icon');
        this.menuContent = $('.header__menu-content');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('header__menu-content--visible');
        this.header.toggleClass('header--visible');
        this.menuIcon.toggleClass('header__menu-icon--x')
    }

    /*
    $
    ('.header__menu-icon').click(){
        console.log('Menu was clicked');
    }*/
}

export default MobileMenu;