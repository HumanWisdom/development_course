import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-curated-redirect',
    template: '',
    styles: []
})
export class CuratedRedirectComponent implements OnInit {

    private mapping: { [key: string]: string } = {
        '/adults/curated': 'mentalhealth',
        '/adults/curated/be-happier': 'happiness',
        '/adults/curated/change-unhelpful-habits': 'addiction',
        '/adults/curated/deal-with-sorrow-loss': 'sorrowandloss',
        '/adults/curated/have-calm-mind': 'meditation',
        '/adults/curated/have-fulfilling-relationships': 'relationships',
        '/adults/curated/manage-your-emotions': 'emotions',
        '/adults/curated/overcome-stress-anxiety': 'mentalhealth',
        '/adults/curated/parent-hub': 'forparents',
        '/adults/curated/wisdom-for-workplace': 'work',
        '/adults/curated/self-awareness': 'self-awareness'
    };

    constructor(private router: Router) { }

    ngOnInit() {
        const currentUrl = this.router.url.split('?')[0]; // Ignore query params if any
        const fragment = this.mapping[currentUrl];

        if (fragment) {
            this.router.navigate(['/adults/home'], { fragment: fragment });
        }
    }

}
