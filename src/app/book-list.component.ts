import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BooksService } from './books.service';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(readonly bookService: BooksService) {}
  ngOnInit(): void {}
}
