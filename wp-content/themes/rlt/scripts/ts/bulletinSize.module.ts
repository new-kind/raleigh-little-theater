export class Bulletin {

    feedHeight: number = this.getHeight( $('.bulletin .feed') );
    primaryHeight: number = this.getHeight( $('.bulletin .primary') );
    secondaryHeight: number = this.getHeight( $('.bulletin .secondary') );

    getHeight( selector: JQuery ){
        return selector.height();
    }

    setHeight(){
        let combinedHeight = this.primaryHeight + this.secondaryHeight;
    }

}