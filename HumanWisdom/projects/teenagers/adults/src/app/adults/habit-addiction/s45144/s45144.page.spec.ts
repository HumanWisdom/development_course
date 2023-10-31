import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45144Page } from './s45144.page';

describe('S45144Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45144Page;
  let fixture: ComponentFixture<S45144Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45144Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45144Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
