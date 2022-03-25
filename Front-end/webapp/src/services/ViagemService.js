import axios from "axios";

//url referente a API Java com Spring Boot
const VIAGEM_API_URL = 'http://localhost:8080/viagens';

class ViagemService {

    //Métodos (CRUD)
    getAllViagens() {
        return axios.get(VIAGEM_API_URL)
    }

    createViagem(viagem) {
        return axios.post(VIAGEM_API_URL, viagem)
    }

    getViagemById(viagemId) {
        return axios.get(VIAGEM_API_URL + '/' + viagemId)
    }

    updateViagem(viagemId, viagem) {
        return axios.put(VIAGEM_API_URL + '/' + viagemId, viagem)
    }

    deleteViagem(viagemId) {
        return axios.delete(VIAGEM_API_URL + '/' + viagemId)
    }
}

export default new ViagemService();