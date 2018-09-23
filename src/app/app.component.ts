import { Component } from '@angular/core';

@Component({
    selector: 'demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    model: any = {
        title: 'Moby Dick',
        language: ['fr'],
        theme: 'humor',
    };
    schema: any = {
        fieldsets: [
            {
                fields: ['title', 'description', 'moreInfo', 'age'],
                id: 'default',
                title: 'Default',
            },
            {
                fields: ['author', 'language', 'theme', 'categories'],
                id: 'settings',
                title: 'Settings',
            },
        ],
        properties: {
            description: {
                description: 'Short description',
                title: 'Summary',
                type: 'string',
                widget: 'textarea',
            },
            title: {
                description: '',
                title: 'Title',
                type: 'string',
            },
            author: {
                description: '',
                title: 'Author',
                type: 'string',
            },
            age: {
              description: '',
              title: 'Your age',
              type: 'number',
            },
            theme: {
                description: '',
                oneOf: [
                    { enum: ['scify'], description: 'SciFy' },
                    { enum: ['history'], description: 'History' },
                    { enum: ['humor'], description: 'Humor' },
                ],
                title: 'Theme',
                type: 'string',
                widget: 'select',
            },
            language: {
                description: '',
                oneOf: [
                    { enum: ['es'], description: 'Spanish' },
                    { enum: ['fr'], description: 'French' },
                ],
                title: 'Language',
                type: 'string',
                widget: 'radio',
            },
            categories: {
              title: 'Categories',
              type: 'array',
              items: {
                type: 'string',
                oneOf: [
                  {
                    description: 'Dog',
                    enum: [
                      'dog'
                    ]
                  },
                  {
                    description: 'Cat',
                    enum: [
                      'cat'
                    ]
                  },
                  {
                    description: 'Daulphin',
                    enum: [
                      'daulphin'
                    ]
                  }
                ]
              },
              widget: 'checkbox'
            },
            moreInfo: {
              type: 'boolean',
              title: 'More information?',
              default: true
            },
        },
        required: ['title'],
    };
}
