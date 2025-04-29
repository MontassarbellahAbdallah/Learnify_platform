import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChatVisible: boolean = false;

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }
}

