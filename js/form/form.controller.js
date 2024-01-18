import getRandomData from './form.test-data.js'
import {insertTestData} from './form.view.js'

function init() {
  const randomData = getRandomData()
  console.log(randomData);
  insertTestData(randomData)
}

init()