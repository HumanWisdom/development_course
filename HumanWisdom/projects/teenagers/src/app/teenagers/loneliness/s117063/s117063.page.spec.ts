import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117063Page } from './s117063.page';

describe('S117063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117063Page;
  let fixture: ComponentFixture<S117063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
