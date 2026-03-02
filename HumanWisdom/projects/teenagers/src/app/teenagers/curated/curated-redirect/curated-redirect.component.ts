import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-curated-redirect',
    template: '',
    styles: []
})
export class CuratedRedirectComponent implements OnInit {

    private mapping: { [key: string]: string } = {
        '/teenagers/curated/be-happier': 'happiness',
        '/teenagers/curated/feel-calm': 'feelcalm',
        '/teenagers/curated/have-fulfilling-relationships': 'relationships',
        '/teenagers/curated/manage-your-emotions': 'emotions',
        '/teenagers/curated/overcome-stress-anxiety': 'mentalhealth',
        '/teenagers/curated/overcome-unhelpful-habits': 'habits',
        '/teenagers/curated/succeed-in-life': 'success',
        '/teenagers/curated/self-awareness': 'self-awareness'
    };

    constructor(private router: Router) { }

    ngOnInit() {
        const currentUrl = this.router.url.split('?')[0]; // Ignore query params if any
        const fragment = this.mapping[currentUrl];

        if (fragment) {
            this.router.navigate(['/teenagers/home'], { fragment: fragment });
        }
    }

}
