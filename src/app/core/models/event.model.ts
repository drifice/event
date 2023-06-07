
export interface IEvent {
    id: string,
    title: string,
    category: string,
    description: string,
    startTime: string,
    endTime: string,
    adresse: string,
    codePostal: number,
    ville:string,
    idUser: string,
    participants: Participant[],
}

export interface Participant{
  id:string
  name:string
}
