import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ui/api-interface';

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
