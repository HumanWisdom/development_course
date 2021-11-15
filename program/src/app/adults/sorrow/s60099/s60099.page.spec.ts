import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60099Page } from './s60099.page';

describe('S60099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60099Page;
  let fixture: ComponentFixture<S60099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
