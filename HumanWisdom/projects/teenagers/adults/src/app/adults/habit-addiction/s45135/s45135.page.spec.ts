import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45135Page } from './s45135.page';

describe('S45135Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45135Page;
  let fixture: ComponentFixture<S45135Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45135Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45135Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
