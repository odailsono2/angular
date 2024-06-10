export const produtos: Product[] = [
    {
        name: 'Pizza da mãe',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 79.90,
        image: 'https://coralplaza.com.br/wp-content/uploads/2019/12/269868-conheca-as-principais-pizzarias-em-natal.jpg'
    },
    {
        name: 'Pizza da mama',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 59.90,

        image: 'https://coralplaza.com.br/wp-content/uploads/2019/12/269868-conheca-as-principais-pizzarias-em-natal.jpg'
    },
    {
        name: 'Pizza da mãe',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 79.90,

        image: 'https://coralplaza.com.br/wp-content/uploads/2019/12/269868-conheca-as-principais-pizzarias-em-natal.jpg'
    },
    {
        name: 'Pizza da mama',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 59.90,

        image: 'https://coralplaza.com.br/wp-content/uploads/2019/12/269868-conheca-as-principais-pizzarias-em-natal.jpg'
    },
]

export type Product = {
    name: string
    description: string
    price: number
    image: string
}

export interface Compras extends Product {
    qtd: number
    inc?: (qtd: number) => void
    dec?: (qtd: number) => void
}
export const carrinho: Map<string, Compras> = new Map<string, Compras>();