import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AnnouncementService, Announcement } from '../_services/announcement.service';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css']
})
export class AnnouncementFormComponent implements OnInit {
  title: string = '';
  content: string = '';
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }

  addAnnouncement() {
    if (this.title && this.content) {
      const newAnnouncement: Announcement = {
        id: 0,
        title: this.title,
        content: this.content,
        date: new Date()
      };
      this.announcementService.addAnnouncement(newAnnouncement);
      this.title = '';
      this.content = '';
    }
  }
}
