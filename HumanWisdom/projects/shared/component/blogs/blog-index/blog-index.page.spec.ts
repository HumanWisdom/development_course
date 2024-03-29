import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogIndexPage } from './blog-index.page';

describe('BlogIndexPage', () => {
  let component: BlogIndexPage;
  let fixture: ComponentFixture<BlogIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
