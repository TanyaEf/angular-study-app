import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: ' .app-servers', // class
  // selector: '[app-servers]', // attribute
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serversCreatedStatus = 'No server created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServersCreated() {
    this.serversCreatedStatus = 'The server created';
  }

  onUpdateServername(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
