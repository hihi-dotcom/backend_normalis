import data from "./data"
import Dog from "./dog"
import { IDog } from "./dog"

export const run = (_req: any, res: any) => {
    res.status(200).send("A szerver fut")
}

export const getALLData = (_req: any, res: any) => {
    res.status(200).send(data)
}
export const getDataFromId = (_req: any, res: any) => {
    let id = parseInt(_req.params.id)
    if (isNaN(id)) {
        res.status(400).send("Hibás paraméter!")
        return
    }
    const dog: IDog = data.find((i: any) => i.id === id)
    if (!dog) {
        res.status(404).send("Nem található a törlendő index!")
        return
    }
    res.status(200).send(dog)
}
export const insertData = (req: Request, res: any) => {
    console.log(req.body)
    if(!req.body) {
        res.status(400).send("Nem adott meg adatokat!")
        return
    }
    
    

    let dog: Dog = new Dog(req.body as unknown as IDog)
    if(dog.nev === "" || dog.fajta === ""){
        res.status(400).send("A név és a fajta megadása kötelező!")
        return
    }
    const index = data.length
    dog.id = index + 1
    data.push(dog)
    console.log(data)
    res.status(201).send(data)
}
export const deleteDataFromId = (req: any, res: any) => {

    let id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(400).send("Hibás paraméter!")
        return
    }
    const index = data.findIndex((i: any) => i.id === id)
    if (index === -1) {
        res.status(404).send("Nem található a törlendő index!")
        return
    }
    data.splice(index, 1)
    res.status(204).send()
}

export function MaxSearchinData(req: any, res: any){
    let max = data[0].id;
    for(let i = 0; i < data.length; i++){
        if(data[i].id > max){
            max = data[i].id
        }
    } 
    res.status(200).send(max)
    return max;
}





