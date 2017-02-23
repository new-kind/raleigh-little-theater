export class Header{

    constructor(){

        this.toggleClass('.mobile.toggle-nav', '.nav-wrapper', 'do-show');

    }

    toggleClass(elemClicked: string, elemToggled: string, className: string){
        $(elemClicked).on('click', function(){
            $(elemToggled).toggleClass(className);
        });
    }

}