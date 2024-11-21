// announcements.component.ts
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements: any[] = [];
  filteredAnnouncements: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(private readonly announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe((data) => {
      this.announcements = data;
      this.filteredAnnouncements = data;
    });
  }

  onSearch(event: any): void {
    const query = event.target.value.toLowerCase();
    this.filteredAnnouncements = this.announcements.filter(announcement =>
      announcement.title.toLowerCase().includes(query) ||
      announcement.description.toLowerCase().includes(query) ||
      announcement.postedBy.toLowerCase().includes(query)
    );
    this.currentPage = 1;
  }

  get paginatedAnnouncements(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredAnnouncements.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.filteredAnnouncements.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
}

