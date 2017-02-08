export class Header{

    constructor(){

        this.toggleClass('.mobile.toggle-nav', '.nav-wrapper', 'do-show');

    }

    toggleClass(elemClicked, elemToggled, className){
        $(elemClicked).on('click', function(){
            $(elemToggled).toggleClass(className);
        });
    }

}