import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140024Page } from './s140024.page';

describe('S140024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140024Page;
  let fixture: ComponentFixture<S140024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
