import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45086Page } from './s45086.page';

describe('S45086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45086Page;
  let fixture: ComponentFixture<S45086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
