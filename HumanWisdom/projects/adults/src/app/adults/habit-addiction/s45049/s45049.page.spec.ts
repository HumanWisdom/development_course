import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45049Page } from './s45049.page';

describe('S45049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45049Page;
  let fixture: ComponentFixture<S45049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
