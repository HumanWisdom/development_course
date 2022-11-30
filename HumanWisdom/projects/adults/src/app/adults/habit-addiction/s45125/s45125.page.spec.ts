import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45125Page } from './s45125.page';

describe('S45125Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45125Page;
  let fixture: ComponentFixture<S45125Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45125Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45125Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
