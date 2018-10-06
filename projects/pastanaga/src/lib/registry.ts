import { DefaultWidgetRegistry } from 'ngx-schema-form';
import {
    PastanagaStringWidget,
    PastanagaTextareaWidget,
    PastanagaSelectWidget,
    PastanagaRadioWidget,
    PastanagaCheckboxWidget,
    PastanagaBooleanWidget,
    PastanagaButtonWidget,
    PastanagaRichtextWidget,
    PastanagaArrayWidget,
} from './pastanaga.components';

export class PastanagaWidgetRegistry extends DefaultWidgetRegistry {
    constructor() {
        super();

        this.register('string', PastanagaStringWidget);
        this.register('search', PastanagaStringWidget);
        this.register('tel', PastanagaStringWidget);
        this.register('url', PastanagaStringWidget);
        this.register('email', PastanagaStringWidget);
        this.register('password', PastanagaStringWidget);
        this.register('date', PastanagaStringWidget);
        this.register('date-time', PastanagaStringWidget);
        this.register('time', PastanagaStringWidget);
        this.register('integer', PastanagaStringWidget);
        this.register('number', PastanagaStringWidget);
        this.register('textarea', PastanagaTextareaWidget);
        this.register('richtext', PastanagaRichtextWidget);
        this.register('select', PastanagaSelectWidget);
        this.register('radio', PastanagaRadioWidget);
        this.register('boolean', PastanagaBooleanWidget);
        this.register('checkbox', PastanagaCheckboxWidget);
        this.register('array', PastanagaArrayWidget);

        this.register('button', PastanagaButtonWidget);

        this.setDefaultWidget(PastanagaStringWidget);
    }
}
