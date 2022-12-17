import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, BooksService } from './books.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
})
export class BookViewComponent implements OnInit {
  book: Book | undefined;
  constructor(
    private bookService: BooksService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      if (params['index']) {
        this.book = this.bookService.books[Number(params['index'])];
      }
    });
  }
}
