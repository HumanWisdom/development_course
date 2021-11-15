import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NatureOfIS01Page } from './nature-of-i-s01.page';

describe('NatureOfIS01Page', () => {
  let component: NatureOfIS01Page;
  let fixture: ComponentFixture<NatureOfIS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureOfIS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NatureOfIS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
