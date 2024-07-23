import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Permission } from '../app.model';

@Component({
  selector: 'app-manage-permission',
  templateUrl: './manage-permission.component.html',
  styleUrls: ['./manage-permission.component.css'],
})
export class ManagePermissionComponent implements OnInit {
  permissionData: Permission[];
  isSelectedAll = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.realtimePermissions.subscribe((data) => {
      this.permissionData = data;
    });
  }

  onSelectAll() {
    this.updatePermissions(this.permissionData, false, true);
    this.isSelectedAll = true;
  }

  onDeselectAll() {
    this.updatePermissions(this.permissionData, false, false);
    this.isSelectedAll = false;
  }

  onReset() {
    const defaultData = this.appService.defaultPermissionData;
    this.appService.realtimePermissions.next(defaultData);
    this.isSelectedAll = false;
  }

  updatePermissions(
    permissions: Permission[],
    parentIsDisabled: boolean = false,
    value: boolean
  ): void {
    permissions.forEach((permission) => {
      if (!permission.isDisable && !parentIsDisabled) {
        permission.value = value;
      }
      if (permission.permissions) {
        this.updatePermissions(
          permission.permissions,
          permission.isDisable,
          value
        );
      }
    });
  }
}
