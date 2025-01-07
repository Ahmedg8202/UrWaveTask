import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { ProductService } from '../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, ConfirmDialogModule, ToastModule, CommonModule, FormsModule,RouterModule, HttpClientModule],
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery = '';
  productId!: number;
  loading: boolean = true;
  
  constructor(private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.loading = false;
      },
      error: (err) =>{ 
        console.error(err);
        this.products = []; 
      }
    });
    
  }

  addNewProduct(){
    this.router.navigate([`/add-product/`]);
  }
  updateProduct(id: number, product: any){
    this.router.navigate([`/edit-product/${id}`]);
  }

  OndeleteProduct(id: number){

  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          alert("Product deleted");
          this.products = this.products.filter(p => p.id !== id);
          this.filteredProducts = this.products;
        },
        error: (err) => console.error(err),
      });
    }
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
