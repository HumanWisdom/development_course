import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73049Page } from './s73049.page';

describe('S73049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73049Page;
  let fixture: ComponentFixture<S73049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
