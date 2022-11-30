import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45033Page } from './s45033.page';

describe('S45033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45033Page;
  let fixture: ComponentFixture<S45033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
