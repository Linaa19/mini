import { Component, OnInit } from '@angular/core';
import { AnnouncementService, Announcement } from '../_services/announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe(announcements => {
      this.announcements = announcements;
    });
  }

  deleteAnnouncement(id: number) {
    this.announcementService.deleteAnnouncement(id);
  }
}

