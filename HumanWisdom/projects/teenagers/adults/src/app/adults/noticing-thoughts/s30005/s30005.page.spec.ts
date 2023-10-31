import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30005Page } from './s30005.page';

describe('S30005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30005Page;
  let fixture: ComponentFixture<S30005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
