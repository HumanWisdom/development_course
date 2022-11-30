import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46066Page } from './s46066.page';

describe('S46066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46066Page;
  let fixture: ComponentFixture<S46066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
