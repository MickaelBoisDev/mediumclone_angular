import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/models/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors-messages',
  templateUrl: './backendErrorsMessages.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorsMessages implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
