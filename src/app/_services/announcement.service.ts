import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private announcements: Announcement[] = [];
  private announcementsSubject: BehaviorSubject<Announcement[]> = new BehaviorSubject<Announcement[]>(this.announcements);

  constructor() {}

  getAnnouncements(): Observable<Announcement[]> {
    return this.announcementsSubject.asObservable();
  }

  addAnnouncement(announcement: Announcement) {
    this.announcements.push({ ...announcement, id: this.announcements.length + 1 });
    this.announcementsSubject.next(this.announcements);
  }

  deleteAnnouncement(id: number) {
    this.announcements = this.announcements.filter(announcement => announcement.id !== id);
    this.announcementsSubject.next(this.announcements);
  }
}

