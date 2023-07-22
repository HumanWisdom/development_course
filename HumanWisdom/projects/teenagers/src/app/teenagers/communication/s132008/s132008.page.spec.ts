import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132008Page } from './s132008.page';

describe('S132008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132008Page;
  let fixture: ComponentFixture<S132008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
