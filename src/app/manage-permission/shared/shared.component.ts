import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Permission } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent implements OnInit {
  name: string;
  data: Permission;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.loadData(this.name);
    });
  }

  loadData(name: string) {
    this.appService.realtimePermissions.subscribe((data) => {
      this.data = data.find((obj) => obj.name.toLowerCase() === name);
    });
  }
}
