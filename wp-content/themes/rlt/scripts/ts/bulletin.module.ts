export class Bulletin {

    feedHeight: number = this.getHeight( $('.bulletin > .feed') );
    containerHeight: number = this.getHeight( $('.bulletin') );

    constructor(){
        this.setHeight();
        $(window).on('resize', function(){
            console.log('resized');
            this.setHeight();
        });
    }

    // function to get heights of selectors
    getHeight( selector: JQuery ){
        return selector.outerHeight();
    }

    // function to test + set heights dynamically
    setHeight(){

        if( this.feedHeight > this.containerHeight ){

            // if feedheight is larger than the container, adjust container size to fit
            $('.bulletin').css({
                'height': this.feedHeight + 64,
            });
            $('.bulletin > .primary, .bulletin > .secondary').css('height', '50%');
            
        }else{

            // else if container is larger, expand feed to fit
            $('.bulletin > .feed').css('height', ( this.containerHeight - 64) );

        }
        
    }

}