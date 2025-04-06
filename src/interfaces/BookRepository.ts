import Book from "./Book";

export interface IBookRepository {
  createBook(book: Book): Promise<Book>;

  getBook(id: string): Promise<Book>;

  getBooks(): Promise<Book[]>;

  updateBook(id: string, data: any): Promise<Book>;

  deleteBook(id: string): Promise<void>;
}
