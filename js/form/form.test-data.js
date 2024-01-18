class ExampleItem {
  constructor (name, phone, email, product) {
    this.name = name
    this.phone = phone
    this.email = email
    this.product = product
  }
}

const testData = [
  new ExampleItem('Иван Фролов', parseInt('+782783487926'), 'frolov@gmail.com', 'course-js'),
  new ExampleItem('Сергей Спиридонов', parseInt('+782700087926'), 'spiridonov@gmail.com', 'course-vue'),
  new ExampleItem('Анна Спиридонова', parseInt('+782783487000'), 'spiridonova@gmail.com', 'course-js'),
  new ExampleItem('Ирина Голышева', parseInt('+700083487926'), 'irina@gmail.com', 'course-wordpress'),
  new ExampleItem('Валерий Голышев', parseInt('+782780847926'), 'valera@gmail.com', 'course-php'),
  new ExampleItem('Павел Лопатин', parseInt('+782783477726'), 'lopatin@gmail.com', 'course-html'),
  new ExampleItem('Илья Нефедов', parseInt('+782783412326'), 'nefedov@gmail.com', 'course-js'),
  new ExampleItem('Таиса Марасина', parseInt('+784443487926'), 'taisa@gmail.com', 'course-js')
]

function getRandomIndex(max) {
  return Math.floor(Math.random() * max)
}

export default function getRandomData() {
  const index = getRandomIndex(testData.length)
  return testData[index]
}