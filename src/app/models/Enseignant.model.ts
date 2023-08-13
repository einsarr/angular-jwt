import { Specialite } from "./Specialite.model"

export interface Enseignant{
    enseignantId: number
    matricule: string
    prenom: string
    nom: string
    cni: string
    specialite: Specialite
}
