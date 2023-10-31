import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60053Page } from './s60053.page';

describe('S60053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60053Page;
  let fixture: ComponentFixture<S60053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
