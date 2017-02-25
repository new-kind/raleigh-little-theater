import * as $ from 'jquery';
export class Bulletin {

    feedHeight: number;
    containerHeight: number;

    constructor(){
        this.setHeight();
        $(window).on('resize', ()=>{
            this.setHeight(); 
        });
    }

    // function to get heights of selectors
    getHeight( selector: JQuery ){
        return selector.outerHeight();
    }

    // function to test + set heights dynamically
    setHeight(){

        if( $(window).width() < 800 ){
            $('.bulletin, .bulletin > .feed').css('height', '');
            return false;
        }

        $('.bulletin, .bulletin *').css('height', '');

        // check heights of objects and set variables
        this.feedHeight = this.getHeight( $('.bulletin .feed') );
        this.containerHeight = this.getHeight( $('.bulletin') );

        if( this.feedHeight > this.containerHeight ){

            // if feedheight is larger than the container, adjust container size to fit
            $('.bulletin').css({
                'height': this.feedHeight + 64,
            });
            
        }else{

            // else if container is larger, expand feed to fit
            $('.bulletin > .feed').css('height', ( this.containerHeight ) );
            $('.bulletin').css({
                'height': this.containerHeight + 64,
            });

        }
        
    }

}