import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Permission } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  permissionData: Permission[];
  isSidebarOpen: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.realtimePermissions.subscribe((data) => {
      this.permissionData = data;
    });
  }
}
