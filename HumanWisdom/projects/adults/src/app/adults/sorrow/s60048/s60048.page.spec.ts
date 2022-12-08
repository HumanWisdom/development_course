import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60048Page } from './s60048.page';

describe('S60048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60048Page;
  let fixture: ComponentFixture<S60048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
