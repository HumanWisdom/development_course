import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45151Page } from './s45151.page';

describe('S45151Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45151Page;
  let fixture: ComponentFixture<S45151Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45151Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45151Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
