import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45076Page } from './s45076.page';

describe('S45076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45076Page;
  let fixture: ComponentFixture<S45076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
