export class state{
    constructor(initialValue){
        this.value = initialValue;
    }

    get(){
        return this.value;
    }
    set(newValue){
        this.value = newValue;
    }
}