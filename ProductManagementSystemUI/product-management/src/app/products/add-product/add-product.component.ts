import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common'

import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, MessageModule, CommonModule, FormsModule, RouterModule, HttpClientModule],
  
})
export class AddProductComponent {
  product = { name: '', description: '', price: 0 };
  loading = false;
  errorMessage: string | null = null;

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    this.loading = true;
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        alert("Product added successully");
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.errorMessage = "Failed to add this product";
        this.loading = false;
      }
    });
  }
}
