import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TrustedCompaniesService } from 'src/app/services/trusted-companies.service';

@Component({
  selector: 'app-trusted-companies',
  templateUrl: './trusted-companies.component.html',
  styleUrls: ['./trusted-companies.component.css']
})
export class TrustedCompaniesComponent implements AfterViewInit {
  companies: any = [];
  
  @ViewChild('scrollingContent') scrollingContent!: ElementRef;
  constructor(private readonly trustedCompaniesService: TrustedCompaniesService) {}
  ngAfterViewInit() {
    this.trustedCompaniesService.getTrustedCompanies().subscribe((data) => {
      this.companies = data;
    });
    this.startScrolling();
  }

  startScrolling() {
    const scrollingElement = this.scrollingContent.nativeElement;
    const totalWidth = scrollingElement.scrollWidth / 2; // Total width of the scrolling content
    scrollingElement.style.transform = `translateX(0)`; // Start position

    // Set the scrolling animation
    scrollingElement.style.transition = 'transform 10s linear';
    scrollingElement.style.transform = `translateX(-${totalWidth}px)`; // Start scrolling

    // Reset animation after duration
    setInterval(() => {
      scrollingElement.style.transition = 'none'; // Disable transition for reset
      scrollingElement.style.transform = `translateX(0)`; // Reset position

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollingElement.style.transition = 'transform 10s linear'; // Re-enable transition
          scrollingElement.style.transform = `translateX(-${totalWidth}px)`; // Start scrolling
        });
      });
    }, 10000); // Match this with the animation duration
  }
}
