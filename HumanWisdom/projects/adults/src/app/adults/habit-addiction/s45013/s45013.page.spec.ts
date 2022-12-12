import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45013Page } from './s45013.page';

describe('S45013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45013Page;
  let fixture: ComponentFixture<S45013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
