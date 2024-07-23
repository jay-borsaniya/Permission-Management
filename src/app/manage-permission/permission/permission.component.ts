import { Component, Input } from '@angular/core';
import { Permission } from 'src/app/app.model';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
})
export class PermissionComponent {
  @Input() permissionData: Permission;
  @Input() isDisabled = false;
  isexpanded = false;

  toggleAccordian() {
    this.isexpanded = !this.isexpanded;
  }

  togglePermission(event: Event) {
    event.stopPropagation();
    if (!this.isDisabled) {
      this.updateChildren(this.permissionData, !this.permissionData.value);
    }
  }

  updateChildren(permission: Permission, value: boolean) {
    if (permission.isDisable === true) {
      return;
    }
    permission.value = value;
    if (permission.permissions) {
      permission.permissions.forEach((child) =>
        this.updateChildren(child, value)
      );
    }
  }
}
