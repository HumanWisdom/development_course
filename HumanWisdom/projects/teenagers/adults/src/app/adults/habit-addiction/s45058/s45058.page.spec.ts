import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45058Page } from './s45058.page';

describe('S45058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45058Page;
  let fixture: ComponentFixture<S45058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
