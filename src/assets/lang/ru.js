/**
 *
 * Written by vlad on 02/11/2020
 */

export default {
  hello: 'Привет',
  text_search: 'Введите текст для поиска',
  search: 'Поиск',
  main_categories: [
    {name: 'Еда', routing: 'food'},
    {name: 'Обучение ', routing: 'education'},
    {name: 'Дом и сад', routing: 'house-n-garden'},
    {name: 'Животные', routing: 'pets'},
    {name: 'Медицина и эстетика', routing: 'med-n-aesthetics'},
    {name: 'Транспорт', routing: 'transport'},
    {name: 'Отдых и развлечения', routing: 'entertainment'},
    {name: 'Услуги специалистов', routing: 'spec-services'},
    {name: 'Недвижимость', routing: 'real-estate'},
    {name: 'Одежда', routing: 'clothing'},
    {name: 'Мебель', routing: 'furniture'},
    {name: 'Ремонт и уборка', routing: 'clean-repare'},
    {name: 'Спорт', routing: 'sport'},
    {name: 'Эзотерика', routing: 'esoterics'},
    {name: 'Коллекционирование', routing: 'collecting'},
    {name: 'Бизнес', routing: 'business'}
  ],
  filters: 'Фильтр',
  deal_type: 'Тип предложения',
  deal_type_opts: {
    sale: 'Продажа',
    buying: 'Покупка (ищу)',
    passing: 'Передача',
    found: 'Найдены',
    delayed: 'Передержка',
    adoption: 'Пансион',
    mating: 'Вязка'
  },
  animal_type: 'Тип животного',
  animal_types: {
    cats: 'Кошки',
    dogs: 'Собаки',
    birds: 'Птицы',
    fishes: 'Рыбы',
    other: 'Другие'
  },
  breed: 'Порода',
  breeds_cat: {
    siam: 'Сиамские',
    himalaya: 'Гималайские',
    ragdoll: 'Рэгдолл',
    mainecoon: 'Мэйн Кун',
    scottish: 'Шотландские',
    persian: 'Персидские',
    british: 'Британские',
    sphinx: 'Сфинксы',
    burma: 'Бирма',
    angora: 'Ангора',
    siberian: 'Сибирский',
    breedless: 'Без породный'
  },
  gender: 'Пол',
  genders_pets: {
    male: 'Самец',
    female: 'Самка'
  },
  age: 'Возраст',
  country: 'Страна',
  apply: 'Применить',
  clear_ft: 'Очистить'
}
