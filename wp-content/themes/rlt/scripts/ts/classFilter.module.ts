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

        $('.filter select[data-ctrl]').change(function(){
            let currentCtrl = $(this).data('ctrl');
            let currentVal = $(this).val();
            //ctrl.checkConditionals( currentCtrl, currentVal );
        });


    }

    filterList(selected : Object ){
        $.each( selected, function(key,val){
            //console.log(key);
            $('.column').each( function(){
                console.log( val );
                if( val != 'all' ){
                    if( $(this).attr('data-' + key ) != val ){
                        $(this).hide();
                    }else{
                        $(this).show();
                    }
                }else{
                    //if( $(this).attr('data-'+key)
                }
            });
        });
    }

    checkConditionals( ctrl: string, value: string ): void{
    }

}