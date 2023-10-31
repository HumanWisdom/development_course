import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60062Page } from './s60062.page';

describe('S60062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60062Page;
  let fixture: ComponentFixture<S60062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
