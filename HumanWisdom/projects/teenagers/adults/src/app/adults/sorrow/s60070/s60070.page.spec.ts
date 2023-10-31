import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60070Page } from './s60070.page';

describe('S60070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60070Page;
  let fixture: ComponentFixture<S60070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
