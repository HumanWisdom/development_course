import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60044Page } from './s60044.page';

describe('S60044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60044Page;
  let fixture: ComponentFixture<S60044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
