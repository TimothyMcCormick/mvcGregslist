import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js";




class HousesService{

  async getHouses() {
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
    console.log('getHouses', res.data);
    ProxyState.houses = res.data.map(h => new House(h))
  }
  async createHouse(houseData) {
    console.log('arrived at house service', houseData);
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/houses', houseData)
    console.log('createHouse', res.data);
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }
  async updateHouse(houseData, id) {
    const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/houses/' + id, houseData)
    console.log('updateHouse', res.data);
    let houseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(houseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }
  async deleteHouse(id) {
    const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/houses/' + id)
    console.log('deleteHouse', res.data);

    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
    ProxyState.houses = ProxyState.houses
  }

}

export const housesService = new HousesService()