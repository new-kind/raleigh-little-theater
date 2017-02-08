
import 'jquery';
import { Bulletin } from './bulletin.module';
import { ClassFilter } from './classFilter.module';
import { Header } from './header.module';
import 'chosen';

$(document).ready(function(){

    if( $('.bulletin') ){
        //instantiate Bulletin class to handle sizing
        let bulletin = new Bulletin;
    }

    if( $('.filter' ) ){
        let filter = new ClassFilter;
    }

    if( $('select') ){
        $('select').chosen();
    }

    if( $('.site-header') ){
        let header = new Header;
    }

});