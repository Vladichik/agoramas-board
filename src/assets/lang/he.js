/**
 *
 * Written by vlad on 02/11/2020
 */

export default {
  hello: 'שלום',
  text_search: 'הקלד טקסט חיפוש',
  search: 'חיפוש',
  main_categories: [
    {name: 'אוכל', routing: 'food'},
    {name: 'השכלה', routing: 'education'},
    {name: 'לבית ולגן', routing: 'house-n-garden'},
    {name: 'חיות מחמד', routing: 'pets'},
    {name: 'רפואה ואסתטיקה', routing: 'med-n-aesthetics'},
    {name: 'רכב', routing: 'transport'},
    {name: 'בידור ונופש', routing: 'entertainment'},
    {name: 'שירותים קצועיים', routing: 'spec-services'},
    {name: 'נדל״ן', routing: 'real-estate'},
    {name: 'הלבשה', routing: 'clothing'},
    {name: 'ריהוט', routing: 'furniture'},
    {name: 'שיפוץ וניקיון', routing: 'clean-repare'},
    {name: 'ספורט', routing: 'sports'},
    {name: 'אזוטריקה', routing: 'esoterics'},
    {name: 'אספנות', routing: 'collecting'},
    {name: 'עסק', routing: 'business'}
  ],
  filters: 'סנן תוצעות',
  deal_type: 'סוג העיסקה',
  deal_type_opts: {
    sale: 'מכירה',
    buying: 'קניה',
    passing: 'מסירה',
    found: 'מציאות',
    delayed: 'בית זמני',
    adoption: 'פנסיון',
    mating: 'זיווג'
  },
  animal_type: 'סוג חייה',
  animal_types: {
    cats: 'חתולים',
    dogs: 'כלבים',
    birds: 'ציפורים',
    fishes: 'דגים',
    other: 'אחר'
  },
  breed: 'גזע',
  breeds_cat: {
    siam: 'סיאמי',
    himalaya: 'הימאלאי',
    ragdoll: 'ראנדול',
    mainecoon: 'מיין קון',
    scottish: 'סקוטי',
    persian: 'פרסי',
    british: 'בריטי',
    sphinx: 'ספינקס',
    burma: 'בירמה',
    angora: 'אנגורי',
    siberian: 'סיבירי'
  }
}
