import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60085Page } from './s60085.page';

describe('S60085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60085Page;
  let fixture: ComponentFixture<S60085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
