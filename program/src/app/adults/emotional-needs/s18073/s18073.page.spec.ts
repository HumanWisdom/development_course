import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18073Page } from './s18073.page';

describe('S18073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18073Page;
  let fixture: ComponentFixture<S18073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
