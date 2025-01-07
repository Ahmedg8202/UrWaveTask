import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet],
  providers: [ConfirmationService, MessageService],

})
export class AppComponent implements OnInit {
  title = 'product-management';

    constructor() {}

    ngOnInit() {
    }
}
