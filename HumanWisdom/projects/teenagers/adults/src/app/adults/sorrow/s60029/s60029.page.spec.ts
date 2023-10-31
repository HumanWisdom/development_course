import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60029Page } from './s60029.page';

describe('S60029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60029Page;
  let fixture: ComponentFixture<S60029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
