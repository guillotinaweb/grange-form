import { Component, OnInit } from '@angular/core';
import {
    StringWidget,
    TextAreaWidget,
    SelectWidget,
    RadioWidget,
    CheckboxWidget,
    ButtonWidget,
    ControlWidget,
    ArrayWidget,
} from 'ngx-schema-form';
import { ControlModel } from 'pastanaga-angular';

@Component({
    selector: 'gf-string-widget',
    templateUrl: './string.widget.html',
})
export class GrangeFormStringWidget extends StringWidget { }

@Component({
    selector: 'gf-textarea-widget',
    templateUrl: './textarea.widget.html',
})
export class GrangeFormTextareaWidget extends TextAreaWidget { }

@Component({
    selector: 'gf-select-widget',
    templateUrl: './select.widget.html',
})
export class GrangeFormSelectWidget extends SelectWidget implements OnInit {
    options: { id: string, name: string }[];

    ngOnInit() {
        const options =
            this.schema.type !== 'array'
                ? this.schema.oneOf
                : this.schema.items.oneOf;
        this.options = options.map(option => ({
            id: option.enum[0],
            name: option.description,
        }));
    }
}

@Component({
    selector: 'gf-radio-widget',
    templateUrl: './radio.widget.html',
})
export class GrangeFormRadioWidget extends RadioWidget implements OnInit {
    checkboxes: ControlModel[];

    ngOnInit() {
        this.checkboxes = this.schema.oneOf.map(option => ({
            value: option.enum[0],
            label: option.description,
        }));
    }
}

@Component({
    selector: 'gf-checkbox-widget',
    templateUrl: './checkbox.widget.html',
})
export class GrangeFormCheckboxWidget extends CheckboxWidget implements OnInit {
    checkboxes: ControlModel[];

    ngOnInit() {
        this.checkboxes = this.schema.items.oneOf.map(option => ({
            value: option.enum[0],
            label: option.description,
        }));
    }
}

@Component({
    selector: 'gf-boolean-widget',
    templateUrl: './boolean.widget.html',
})
export class GrangeFormBooleanWidget extends CheckboxWidget {

    setValue($event) {
        this.control.setValue($event);
    }
}

@Component({
    selector: 'gf-button-widget',
    templateUrl: './button.widget.html',
})
export class GrangeFormButtonWidget extends ButtonWidget { }

@Component({
    selector: 'gf-array-widget',
    templateUrl: './array.widget.html',
})
export class GrangeFormArrayWidget extends ArrayWidget { }
