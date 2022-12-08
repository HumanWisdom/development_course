import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58075Page } from './s58075.page';

describe('S58075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58075Page;
  let fixture: ComponentFixture<S58075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
