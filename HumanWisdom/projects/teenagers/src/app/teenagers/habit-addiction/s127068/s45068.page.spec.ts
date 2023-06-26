import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45068Page } from './s45068.page';

describe('S45068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45068Page;
  let fixture: ComponentFixture<S45068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
