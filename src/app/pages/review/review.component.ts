import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  constructor(private readonly reviewService:ReviewService){}

  reviewData: any = [];
  backgroundImageReview: string = 'assets/review/backgroundImageReview.png';

  ngOnInit(): void {
    this.reviewService.getReview().subscribe((data) => {
      this.reviewData = data;
    });
  }

}
