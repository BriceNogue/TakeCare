export class RoleModel {
    _id: string;
    libelle: string;

    constructor(
        libelle: string =""
    ){
        this.libelle = libelle;
    }
}