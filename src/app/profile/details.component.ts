import { Component } from '@angular/core';

import { AccountService } from '../_services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {

    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
  // Define the profileImage property
  profileImage: string | null = null;

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // Method to save the profile image
  saveProfileImage(): void {
    if (this.profileImage) {
      console.log('Profile image saved:', this.profileImage);
      // Implement the logic to save the profile image
    } else {
      console.log('No profile image to save');
    }
  }
}
