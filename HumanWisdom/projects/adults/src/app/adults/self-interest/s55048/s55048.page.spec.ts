import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55048Page } from './s55048.page';

describe('S55048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55048Page;
  let fixture: ComponentFixture<S55048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
