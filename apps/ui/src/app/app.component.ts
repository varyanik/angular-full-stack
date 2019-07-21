import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@app/api-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
