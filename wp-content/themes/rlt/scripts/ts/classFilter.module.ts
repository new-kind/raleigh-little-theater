export class ClassFilter {

    constructor(){

        let ctrl = this;

        $('.filter select[data-ctrl]').change(function(){
            let currentCtrl = $(this).data('ctrl');
            let currentVal = $(this).val();
            ctrl.checkConditionals( currentCtrl, currentVal );
        });


    }

    checkConditionals( ctrl: string, value: string ): void{
        $('.conditional').hide().each( function(){
            if( ( $(this).data('listen') == ctrl ) && ( $(this).data('show') == value) ){
                $(this).fadeIn();
            }
        });
    }

}