import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NatureOfIS02Page } from './nature-of-i-s02.page';

describe('NatureOfIS02Page', () => {
  let component: NatureOfIS02Page;
  let fixture: ComponentFixture<NatureOfIS02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureOfIS02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NatureOfIS02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
