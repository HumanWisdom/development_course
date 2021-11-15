import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45055Page } from './s45055.page';

describe('S45055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45055Page;
  let fixture: ComponentFixture<S45055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
