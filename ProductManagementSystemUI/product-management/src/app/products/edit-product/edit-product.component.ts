import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common'
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, MessageModule, CommonModule, CommonModule, FormsModule, RouterModule, HttpClientModule],

})
export class EditProductComponent implements OnInit {
  productId!: number;
  product: any = { name: '', description: '', price: 0 };
  loading = false;
  result: any;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      this.productService.getProductById(this.productId).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  editProduct(): void {
    this.loading = true;
    this.productService.updateProduct(this.productId, this.product).subscribe({
      next: () => {
        alert("Product updated Successfully")
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.errorMessage = 'Failed to update product data. Please try again.';
        this.loading = false;
      }
    });
  }
}
