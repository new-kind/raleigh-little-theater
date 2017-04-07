import 'chosen';
import * as $ from 'jquery';

export class ClassFilter {

    constructor(){

        if( !String.prototype.includes ){
            this.polyfillIncludes();
        }

        let ctrl = this;

        let query = ctrl.parseURI();

        ctrl.updateOptions( query );

        $('.filter select').change( function(){
            ctrl.checkConditionals( '.filter select[name="age-group"]' );
            let selected = ctrl.buildFilterObject();
            ctrl.filterList( selected );
        });

        $('select').chosen({disable_search_threshold: 10});
              
    }

    polyfillIncludes(){
        String.prototype.includes = function(search, start) {
                'use strict';
                if (typeof start !== 'number') {
                  start = 0;
                }

                if (start + search.length > this.length) {
                  return false;
                } else {
                  return this.indexOf(search, start) !== -1;
                }
              };
    }

    parseURI(){
        let href = window.location.href;
        let props: Array<string>;
        if( href.split('?')[1] ){ props = href.split('?')[1].split('&'); }
        let propObject = {};

        if( props ){

            for( let i = 0; i < props.length; i++ ){
                let keyValProp = props[i].split('=');
                let multiVal = keyValProp[1].split(',');

                if( multiVal ){ 
                    propObject[keyValProp[0]] = multiVal;
                }else{
                    propObject[keyValProp[0]] = keyValProp[1];
                }

            }

            return propObject;
        }else{
            return false;
        }
    }

    updateOptions( propsObj : Object ){

        $.each( propsObj , function(key,val){
            
            $('[name="' + key + '"]').val(val).trigger('chosen:updated');
        });


        this.checkConditionals('.filter select[name="age-group"]');
        this.filterList( this.buildFilterObject() );
        

    }

    buildFilterObject(){

        let selected : Object = {};
        
        $('.filter').find('option:selected').each( function(){
            let parent = $(this).closest('select').attr('name');
            if( selected[parent] == undefined ){
                selected[parent] = [];
            }
            selected[parent].push($(this).val());
        });

        return selected;
    }

    filterList(selected : Object ){

        $('.class-listing').each( function(){

            let listing = $(this);

            let locations = true;
            let ageGroup = true;
            let types = true;
            let ages = true;
            let typeFlag: Boolean = false;


            $.each( selected, function(key,val){
            
                if( key == 'locations' ){
                    if( val != 'all' ){
                        locations = checkLocation( listing, val);
                    }else{
                        locations = true;
                    }
                }
            
                if( key == 'age-group' ){
                    if( val != 'all' ){
                        ageGroup = checkAgeGroup( listing, val );
                    }else{
                        ageGroup = true;
                    }
                }
            
                if( key == 'types' ){
                    let type: boolean;
                    types = false;

                    for( let i = 0; i < val.length; i++ ){

                        if( val[i] != '' ){
                            type = checkTypes( listing, val[i] );
                        }else{
                            typeFlag = true;
                        }

                        if( type == true ){
                            typeFlag = true;
                        }

                    }
                }
            
                if( ( key == 'kids' ) || ( key == 'teens' ) ){
                    if( val != 'all' ){
                        ages = checkAges( listing, val );
                    }else{
                        ages = true;
                    }
                }
            });

            if( typeFlag == true ){ types = true; }

            if( ( ageGroup && locations && ages && types ) != true ){
                $(this).hide();
            }else{
                $(this).show();
            }
        });

        $('.no-listing-msg').remove();

        if( $('.class-listing').length == $('.class-listing[style="display: none;"]').length ){
            $('.page-content').append('<h3 class="no-listing-msg color-bloom-red">No courses match your criteria. Please try another combination of filters.</h3>');
        }

        function checkLocation( object: JQuery, location : string ){
            if( location == object.attr('data-locations') ){
                return true;
            }
            return false;
        }

        function checkTypes( object: JQuery, types: string ){
            if( object.attr('data-types').includes( types ) ) {
                return true;
            }
            return false;
        }

        function checkAgeGroup( object: JQuery, ageGroup: string){
            if( object.attr('data-age-group').includes( ageGroup ) ) {
                return true;
            }
            return false;
        }

        function checkAges( object: JQuery, ages: string ){
            let dataArray = object.attr('data-ages').split(',');

                console.log( dataArray );
                console.log( ages );
                console.log( dataArray.includes( ages )  );

                if( ages == 'all' ){ return true; }

                for( let i = 0; i<dataArray.length; i++){
                    if( dataArray[i] == ages ){ return true; }
                }

            return false;
        }
    }

    checkConditionals( ctrl: string ): void{
        let value = $(ctrl).val();
        let that = this;
        $('.conditional').each( function(){ 
            if( $(this).attr('name') == value ){
                $(this).addClass('is-visible').next('.chosen-container').css('width', '8em');
                $(this).prev('label').addClass('is-visible');
            }else{
                $(this).removeClass('is-visible');
                $(this).prev('label').removeClass('is-visible');
                $(this).val([]).trigger('chosen:updated');
               
            }
        });
        
    }

}