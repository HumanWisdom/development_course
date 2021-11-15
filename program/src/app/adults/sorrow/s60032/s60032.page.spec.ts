import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60032Page } from './s60032.page';

describe('S60032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60032Page;
  let fixture: ComponentFixture<S60032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
