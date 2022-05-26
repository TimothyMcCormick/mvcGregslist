import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Jobs } from "./Models/Jobs.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  /** @type {import('./Models/Car').Car[]} */
  /** @type {import('./Models/House').House[]} */
  /** @type {import ('./Models/Jobs').Jobs[]} */
  values = []
  cars = [
    new Car({make: 'Chevrolet', model: 'Impala', description:'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg'}),
    new Car({make: 'Buick', model: 'Grand National', description: 'It is grand', price:15, year: 1984, color:'#ff0000', imgUrl:'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg'})
  ]
  houses = [
    new House('Hawaii','./assets/img/5bd3bth.jpg', 5, 3, 3600, 625000, 'Its a bigun'),
    new House('Auburn','./assets/img/2bd1bth.jpg', 2, 1, 1250, 205000, 'low key')
  ]

  jobs = [
    new Jobs('./assets/img/cleaningsupplies.jpg', 'Fabulously Clean Houses', 'House Cleaner', 22.50, 'full time, benefits, easy money'),
    new Jobs('./assets/img/chef.jpg', 'The Chefs Kitchen', 'Cook', 50, "part time, eat your weight in leftovers, don't get burned")
  ]
}
  


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
