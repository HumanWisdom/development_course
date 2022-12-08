import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedWisdomStoriesTilesComponent } from './related-wisdom-stories-tiles.component';

describe('RelatedWisdomStoriesTilesComponent', () => {
  let component: RelatedWisdomStoriesTilesComponent;
  let fixture: ComponentFixture<RelatedWisdomStoriesTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedWisdomStoriesTilesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedWisdomStoriesTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
