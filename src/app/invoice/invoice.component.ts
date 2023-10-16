import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  id = 0;
  active = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.active = Boolean(params['active'] == "true");
    })
  }

  ngOnInit(): void {
  }

}
