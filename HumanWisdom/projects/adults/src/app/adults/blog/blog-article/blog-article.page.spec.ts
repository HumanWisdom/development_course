import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogArticlePage } from './blog-article.page';

describe('BlogArticlePage', () => {
  let component: BlogArticlePage;
  let fixture: ComponentFixture<BlogArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
