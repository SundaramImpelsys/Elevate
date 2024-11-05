import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trusted-companies',
  templateUrl: './trusted-companies.component.html',
  styleUrls: ['./trusted-companies.component.css']
})
export class TrustedCompaniesComponent implements AfterViewInit {
  @Input() companies: { imageSrc: string, title?: string, description?: string }[] = [];
  
  @ViewChild('scrollingContent') scrollingContent!: ElementRef;

  ngAfterViewInit() {
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
