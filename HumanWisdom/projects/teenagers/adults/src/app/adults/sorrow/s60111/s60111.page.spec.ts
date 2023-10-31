import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60111Page } from './s60111.page';

describe('S60111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60111Page;
  let fixture: ComponentFixture<S60111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
