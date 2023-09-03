import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140098Page } from './s140098.page';

describe('S140098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140098Page;
  let fixture: ComponentFixture<S140098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
