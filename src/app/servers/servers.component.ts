import { Component, OnInit } from '@angular/core';
import {Timestamp} from 'rxjs/internal-compatibility';

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
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  timeStamps = [];
  showDetails = false;
  timeStampCount = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServersCreated() {
    this.serversCreatedStatus = 'The server created ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServername(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onUserName() {
    this.userName = '';
  }

  addTimeStamp() {
    this.showDetails = !this.showDetails;
    this.timeStampCount++;
    this.timeStamps.push(Date.now());
  }
}
