import { Bulletin } from './bulletin.module';
import 'jquery';

$(document).ready(function(){

    if( $('.bulletin') ){
        //instantiate Bulletin class to handle sizing
        let bulletin = new Bulletin;
    }

});