export class ServiceModel {
    _id: string;
    service_code: string;
    libelle: string;
    description: string

    constructor( libelle: string ="", description: string ="") {
        this.libelle = libelle;
        this.description = description;
    }
}