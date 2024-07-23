import { Injectable } from '@angular/core';
import { Permission } from './app.model';
import { BehaviorSubject } from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  realtimePermissions = new BehaviorSubject<Permission[]>(null);

  defaultPermissions: Permission[] = [
    {
      name: 'Job',
      value: true,
      isDisable: false,
      permissions: [
        {
          name: 'Add Job',
          value: true,
          isDisable: false,
          permissions: null,
        },
        {
          name: 'View Job',
          value: true,
          isDisable: false,
          permissions: [
            {
              name: 'View Job Details',
              value: false,
              isDisable: false,
              permissions: null,
            },
            {
              name: 'View Applicants',
              value: true,
              isDisable: true,
              permissions: null,
            },
          ],
        },
        {
          name: 'Edit Job',
          value: false,
          isDisable: false,
          permissions: null,
        },
      ],
    },
    {
      name: 'Candidate',
      value: true,
      isDisable: false,
      permissions: [
        {
          name: 'Add Candidate',
          value: false,
          isDisable: false,
          permissions: null,
        },
        {
          name: 'View Candidate',
          value: true,
          isDisable: false,
          permissions: [
            {
              name: 'View Candidate Profile',
              value: true,
              isDisable: true,
              permissions: null,
            },
            {
              name: 'View Candidate History',
              value: false,
              isDisable: false,
              permissions: null,
            },
          ],
        },
        {
          name: 'Edit Candidate',
          value: true,
          isDisable: false,
          permissions: null,
        },
      ],
    },
    {
      name: 'Settings',
      value: true,
      isDisable: true,
      permissions: [
        {
          name: 'Manage Settings',
          value: false,
          isDisable: true,
          permissions: null,
        },
        {
          name: 'View Logs',
          value: true,
          isDisable: false,
          permissions: null,
        },
      ],
    },
    {
      name: 'Reports',
      value: false,
      isDisable: false,
      permissions: [
        {
          name: 'Generate Reports',
          value: true,
          isDisable: false,
          permissions: null,
        },
        {
          name: 'Export Reports',
          value: false,
          isDisable: false,
          permissions: null,
        },
      ],
    },
    {
      name: 'Hire',
      value: false,
      isDisable: false,
      permissions: [
        {
          name: 'Create Job Opening',
          value: true,
          isDisable: false,
          permissions: null,
        },
        {
          name: 'Review Applications',
          value: false,
          isDisable: true,
          permissions: null,
        },
      ],
    },
    {
      name: 'Department',
      value: true,
      isDisable: true,
      permissions: [
        {
          name: 'View Departments',
          value: true,
          isDisable: false,
          permissions: null,
        },
        {
          name: 'Manage Departments',
          value: false,
          isDisable: true,
          permissions: null,
        },
      ],
    },
  ];

  constructor() {
    this.realtimePermissions.next(this.defaultPermissions);
  }

  get defaultPermissionData() {
    const copy = JSON.parse(JSON.stringify(this.defaultPermissions));
    return copy;
  }
}
