import Arabe from '../assets/coffes/arabe.png'
import Capuccino from '../assets/coffes/capuccino.png'
import CafeComLeite from '../assets/coffes/cafe-com-leite.png'
import ChocolateQuente from '../assets/coffes/chocolate-quente.png'
import Cubano from '../assets/coffes/cubano.png'
import ExpressoTradicional from '../assets/coffes/expresso.png'
import ExpressoAmericano from '../assets/coffes/americano.png'
import ExpressoCremoso from '../assets/coffes/expresso-cremoso.png'
import ExpressoGelado from '../assets/coffes/cafe-gelado.png'
import Havaiano from '../assets/coffes/havaiano.png'
import Irlandes from '../assets/coffes/irlandes.png'
import Latte from '../assets/coffes/latte.png'
import Mocaccino from '../assets/coffes/mocaccino.png'
import Macchiato from '../assets/coffes/macchiato.png'

export interface Coffee {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  isAvaliable?: boolean
}

export const coffesList: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: ExpressoTradicional,
    isAvaliable: true,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.9,
    tags: ['tradicional'],
    image: ExpressoAmericano,
    isAvaliable: true,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.9,
    tags: ['tradicional'],
    image: ExpressoCremoso,
    isAvaliable: true,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.9,
    tags: ['tradicional', 'gelado'],
    image: ExpressoGelado,
    isAvaliable: true,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 10.9,
    tags: ['tradicional', 'com leite'],
    image: CafeComLeite,
    isAvaliable: true,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 13.9,
    tags: ['tradicional', 'com leite'],
    image: Latte,
    isAvaliable: true,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 15.9,
    tags: ['tradicional', 'com leite'],
    image: Capuccino,
    isAvaliable: true,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.9,
    tags: ['tradicional', 'com leite'],
    image: Macchiato,
    isAvaliable: true,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 17.9,
    tags: ['tradicional', 'com leite'],
    image: Mocaccino,
    isAvaliable: true,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10.9,
    tags: ['especial', 'com leite'],
    image: ChocolateQuente,
    isAvaliable: true,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 13.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: Cubano,
    isAvaliable: true,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 19.9,
    tags: ['especial'],
    image: Havaiano,
    isAvaliable: true,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 25.9,
    tags: ['especial'],
    image: Arabe,
    isAvaliable: true,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 22.9,
    tags: ['especial', 'alcoólico'],
    image: Irlandes,
    isAvaliable: true,
  },
]
