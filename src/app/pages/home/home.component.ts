import { Component } from '@angular/core';
import { TrustedCompaniesService } from 'src/app/services/trusted-companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private readonly trustedCompaniesService: TrustedCompaniesService) {}
  trustedCompaniesData = [];

  ngOnInit(): void {
    this.trustedCompaniesService.getTrustedCompanies().subscribe((data) => {
      this.trustedCompaniesData = data;
    });
  }


}
