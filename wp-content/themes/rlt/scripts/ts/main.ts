import * as $ from 'jquery';
import { Bulletin } from './bulletin.module';
import { ClassFilter } from './classFilter.module';
import { Header } from './header.module';
import 'fotorama';


$(document).ready(function(){

    if( $('.bulletin').length > 0 ){
        //instantiate Bulletin class to handle sizing
        let bulletin = new Bulletin;
    }

    if( $('.filter').length > 0 ){
        let filter = new ClassFilter;
    }

    if( $('.site-header').length > 0 ){
        let header = new Header;
    }

    
    $('.photo-gallery').on('click', function(event){
        event.preventDefault();
        var fotorama = $('.fotorama').addClass('is-visible').fotorama({ allowfullscreen: true }).data('fotorama');
        fotorama.requestFullScreen();
        $('.fotorama').on('fotorama:fullscreenexit', function(){
            $(this).removeClass('is-visible');
        });
    });

    function openFotorama(){

    }

});