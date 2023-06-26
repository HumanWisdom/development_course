import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45130Page } from './s45130.page';

describe('S45130Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45130Page;
  let fixture: ComponentFixture<S45130Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45130Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45130Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
