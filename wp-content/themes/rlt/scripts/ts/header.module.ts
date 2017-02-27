import * as $ from 'jquery';
export class Header{

    constructor(){

        this.toggleClass('.mobile.toggle-nav', '.nav-wrapper', 'do-show');
        this.toggleSearch('.search-link');

    }

    toggleClass(elemClicked: string, elemToggled: string, className: string){
        $(elemClicked).on('click', function(){
            $(elemToggled).toggleClass(className);
            $(this).toggleClass(className);
        });
    }

    toggleSearch( elemClicked: string ){
        $(elemClicked).on('click', function(ev){
            ev.preventDefault();
            $(this).toggleClass('is-hidden');
            $('.search-form').toggleClass('is-visible');
        });
    }

}