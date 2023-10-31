import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60110Page } from './s60110.page';

describe('S60110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60110Page;
  let fixture: ComponentFixture<S60110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
