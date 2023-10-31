import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60095Page } from './s60095.page';

describe('S60095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60095Page;
  let fixture: ComponentFixture<S60095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
