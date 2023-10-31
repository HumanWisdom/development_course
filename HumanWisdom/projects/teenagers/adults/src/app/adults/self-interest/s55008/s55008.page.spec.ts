import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55008Page } from './s55008.page';

describe('S55008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55008Page;
  let fixture: ComponentFixture<S55008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
