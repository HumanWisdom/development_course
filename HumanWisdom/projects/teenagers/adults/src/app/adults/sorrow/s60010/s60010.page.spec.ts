import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60010Page } from './s60010.page';

describe('S60010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60010Page;
  let fixture: ComponentFixture<S60010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
