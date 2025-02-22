export class Library {
  private static totalBooks: number = 0;
  addBook() {
    Library.totalBooks++;
  }
  static getTotalBook() {
    return Library.totalBooks;
  }
}
