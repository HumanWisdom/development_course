import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60075Page } from './s60075.page';

describe('S60075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60075Page;
  let fixture: ComponentFixture<S60075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
