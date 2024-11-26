import { Component } from '@angular/core';

@Component({
  selector: 'app-community-announcement-home',
  templateUrl: './community-announcement-home.component.html',
  styleUrls: ['./community-announcement-home.component.css']
})
export class CommunityAnnouncementHomeComponent {
  announcements = [
    { 
      imageSrc: 'assets/announcement/1.png', 
      title: 'How Elevate Works', 
      description: 'Explore the features and benefits of the Elevate Learning Management System. Learn how to navigate the platform, access courses, and track your progress.', 
      postedBy: 'Alice Johnson'
    },
    { 
      imageSrc: 'assets/announcement/2.png', 
      title: 'Insights into Health Professions', 
      description: 'Join us for an in-depth discussion on the various career paths within the health professions. Gain insights from industry experts and learn about the latest trends.', 
      postedBy: 'Dr. John Doe'
    },
    { 
      imageSrc: 'assets/announcement/3.png', 
      title: 'Workshop on Nursing', 
      description: 'Participate in our upcoming workshop focused on nursing skills and techniques. Enhance your knowledge and connect with fellow nursing professionals.', 
      postedBy: 'Mary Smith' 
    }
  ];
}
