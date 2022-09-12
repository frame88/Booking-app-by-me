import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text = 'Rome';
  hotels: Hotel[] | undefined;
  active: Hotel | undefined;
  activeImage: string | undefined;


  constructor(private http: HttpClient) {
    this.searchHotels(this.text);
  }
  //questa abbinata a text="Rome" mi permette di andare direttamente sugli hotel di Roma una volta refreshata la pagina


  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
      .subscribe(result => {
        this.hotels = result;
        // this.active = this.hotels[0];
        this.setActive(this.hotels[0]);
      });
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.activeImage = hotel.images[0];
  }

  sendEmail({ email, msg }: { email: string, msg: string }) {
    window.alert(`sent:
    ${email}
    ${msg}
    ${this.active!.email}
    `);
  }
}
