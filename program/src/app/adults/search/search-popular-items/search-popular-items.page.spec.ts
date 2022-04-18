import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPopularItemsPage } from './search-popular-items.page';

describe('SearchPopularItemsPage', () => {
  let component: SearchPopularItemsPage;
  let fixture: ComponentFixture<SearchPopularItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPopularItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPopularItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
