import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() title = '';
    @Input() img = '';
    @Output() press: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    click() {
        this.press.emit();
    }
}
