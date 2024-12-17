import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-decline',
  templateUrl: './event-decline.component.html',
  styleUrls: ['./event-decline.component.css']
})
export class EventDeclineComponent implements OnInit {

  invitation: any;
  declineStatus: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.invitation = {
      eventId: '123',
      eventName: 'Annual Gala',
      eventDate: '2024-12-25',
      eventDetails: 'Join us for an evening of celebration and networking.'
    };
  }

  declineEvent(): void {

    this.updateDynamics365DeclineStatus(this.invitation.eventId, 'Declined')
      .subscribe(response => {
        this.declineStatus = 'You have successfully declined the invitation.';
      }, error => {
        this.declineStatus = 'There was an error declining the invitation. Please try again.';
      });
  }

  updateDynamics365DeclineStatus(eventId: string, status: string): Observable<any> {

    const url = `https://<your-dynamics-365-instance>/api/data/v9.1/custom_invitations`;

    const body = {
      "eventId": eventId,
      "status": status,
      "modifiedBy": "<user-id>"
    };

    return this.http.post(url, body, {
      headers: {
        'Authorization': 'Bearer <your-access-token>',
        'Content-Type': 'application/json'
      }
    });
  }
}
