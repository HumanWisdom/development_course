import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55013Page } from './s55013.page';

describe('S55013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55013Page;
  let fixture: ComponentFixture<S55013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
