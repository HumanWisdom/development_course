import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60080Page } from './s60080.page';

describe('S60080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60080Page;
  let fixture: ComponentFixture<S60080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
