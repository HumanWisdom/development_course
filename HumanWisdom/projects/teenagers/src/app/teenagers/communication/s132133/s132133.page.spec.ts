import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132133Page } from './s132133.page';

describe('S132133Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132133Page;
  let fixture: ComponentFixture<S132133Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132133Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132133Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
