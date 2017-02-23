export class ClassFilter {

    constructor(){

        let ctrl = this;

        $('.filter select').change( function(){
            let selected = {};
            $('.filter').find('option:selected').each( function(){
                let parent = $(this).closest('select').attr('name');
                if( selected[parent] == undefined ){
                    selected[parent] = [];
                }
                selected[parent].push($(this).val());
            });
            //console.log( selected );

            ctrl.filterList( selected );
        });


    }

    filterList(selected : Object ){
            //console.log(key);
            $('.class-listing').each( function(){

                let listing = $(this);

                let locations = true;
                let ageGroup = true;
                let types = true;
                let ages = true;

                console.log( selected );
                
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
                    if( val != 'all' ){
                        types = checkTypes( listing, val );
                    }else{
                        types = true;
                    }
                }

                if( ( key == 'kids' ) ||( key == 'teens' ) ){
                    if( val != 'all' ){
                        ages = checkAges( listing, val );
                    }else{
                        ages = true;
                    }
                }
            });
            
            if( ( ageGroup && locations && ages && types ) != true ){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
        console.log( $('.class-listing').length );
        console.log( $('.class-listing[style="display: none;"]').length );

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
            if( types == object.attr('data-types') ) {
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
            console.log( 'checkAges: ' + ages );
            if( object.attr('data-ages').includes( ages ) ){
                return true;
            }
            return false;
        }
    }

    checkConditionals( ctrl: string, value: string ): void{
    }

}