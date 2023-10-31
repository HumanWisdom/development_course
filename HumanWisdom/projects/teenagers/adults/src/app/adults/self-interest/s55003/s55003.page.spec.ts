import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55003Page } from './s55003.page';

describe('S55003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55003Page;
  let fixture: ComponentFixture<S55003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
