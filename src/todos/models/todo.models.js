import { v4 as uuid } from "uuid";

export class Todo{

constructor(desc){
    this.id= uuid();
    this.descripcion = desc;
    this.done=false;
    this.createDate = new Date(); 
}

}