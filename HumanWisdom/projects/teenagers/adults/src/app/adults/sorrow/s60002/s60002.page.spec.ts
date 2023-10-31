import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60002Page } from './s60002.page';

describe('S60002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60002Page;
  let fixture: ComponentFixture<S60002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
