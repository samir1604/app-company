import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
	constructor(private builder: FormBuilder) {}

	companyForm = this.builder.group({
		id: this.builder.nonNullable.control({ value: '', disabled: true }),
		name: this.builder.nonNullable.control('', Validators.required),
		empcount: this.builder.nonNullable.control('', Validators.required),
		revenue: this.builder.nonNullable.control('', Validators.required),
		address: this.builder.nonNullable.control('', Validators.required),
		isActive: this.builder.nonNullable.control(true)
	});
}
