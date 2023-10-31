import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73043Page } from './s73043.page';

describe('S73043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73043Page;
  let fixture: ComponentFixture<S73043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
