import { faker } from '@faker-js/faker'
export class FakerData {

  static getFirstname() {
    return faker.person.firstName()
  }

  static gettomorowsDate() {
    const date = new Date();
    const month = String(date.getMonth() + 1) //month is 0 indexed
    console.log(month)
    const day = String(date.getDate());
    const year = String(date.getFullYear());
    let hours = date.getHours()  //give 24 hour format   
    const ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert as 12 hr format
    hours = hours % 12 || 12;
    const formattedHours = (`0${hours}`).slice(-2);
    const minute = date.getMinutes()
    console.log(`${month}/${day}/${year}: ${formattedHours}:${minute}${ampm}`)
  }

}

FakerData.gettomorowsDate()