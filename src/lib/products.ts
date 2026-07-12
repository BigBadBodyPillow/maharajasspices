export type Category = 'books' | 'pens' | 'phones';

export interface Product {
  id: string;
  image: string;
  name: string;
  brand: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const productCatalog: Record<Category, Product[]> = {
  books: [
    {
      id: 'book-1',
      image: 'https://picsum.photos/400/400?random=11',
      brand: 'Maharaja',
      name: 'Book 1',
      price: 180
    },
    {
      id: 'book-2',
      image: 'https://picsum.photos/400/400?random=12',
      brand: 'Maharaja',
      name: 'Book 2',
      price: 220
    },
    {
      id: 'book-3',
      image: 'https://picsum.photos/400/400?random=13',
      brand: 'Maharaja',
      name: 'Book 3',
      price: 150
    }
  ],
  pens: [
    {
      id: 'pen-1',
      image: 'https://picsum.photos/400/400?random=21',
      brand: 'Maharaja',
      name: 'Pen 1',
      price: 95
    },
    {
      id: 'pen-2',
      image: 'https://picsum.photos/400/400?random=22',
      brand: 'Maharaja',
      name: 'Pen 2',
      price: 120
    },
    {
      id: 'pen-3',
      image: 'https://picsum.photos/400/400?random=23',
      brand: 'Maharaja',
      name: 'Pen 3',
      price: 210
    }
  ],
  phones: [
    {
      id: 'phone-1',
      image: 'https://picsum.photos/400/400?random=31',
      brand: 'Maharaja',
      name: 'Phone 1',
      price: 5899
    },
    {
      id: 'phone-2',
      image: 'https://picsum.photos/400/400?random=32',
      brand: 'Maharaja',
      name: 'Phone 2',
      price: 11899
    },
    {
      id: 'phone-3',
      image: 'https://picsum.photos/400/400?random=33',
      brand: 'Maharaja',
      name: 'Phone 3',
      price: 16899
    }
  ]
};
