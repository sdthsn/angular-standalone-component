import { Injectable } from '@angular/core';
export interface Book {
  name: string;
  id: number;
  description: string;
  imageUrl: string;
}
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Book[] = [
    {
      name: 'Book 1',
      id: 1,
      description: 'Book description 1',
      imageUrl:
        './assets/book.jpg',
    },
    {
      name: 'Book 2',
      id: 2,
      description: 'Book description 2',
      imageUrl:
        './assets/book.jpg',
    },
    {
      name: 'Book 3',
      id: 3,
      description: 'Book description 3',
      imageUrl:
        './assets/book.jpg',
    },
    {
      name: 'Book 4',
      id: 4,
      description: 'Book description 4',
      imageUrl:
        './assets/book.jpg',
    },
  ];
  constructor() {}
}
