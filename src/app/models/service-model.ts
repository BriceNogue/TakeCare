export class ServiceModel {
    _id: string;
    service_code: string;
    libelle: string;
    description: string

    constructor( service_code: string ="", libelle: string ="", description: string ="") {
        this.service_code = service_code;
        this.libelle = libelle;
        this.description = description;
    }
}