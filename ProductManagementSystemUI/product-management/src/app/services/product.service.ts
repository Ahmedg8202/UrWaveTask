import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:7130/products/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`).pipe(catchError(this.handleError));
  }

  addProduct(product: any): Observable<void> {
    return this.http.post<void>(this.apiUrl, product).pipe(catchError(this.handleError));
  }

  updateProduct(id: number, product: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}${id}`, product).pipe(catchError(this.handleError));
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMsg = error.error?.message || 'An error occurred!';
    return throwError(() => new Error(errorMsg));
  }
}
