import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45128Page } from './s45128.page';

describe('S45128Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45128Page;
  let fixture: ComponentFixture<S45128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45128Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
