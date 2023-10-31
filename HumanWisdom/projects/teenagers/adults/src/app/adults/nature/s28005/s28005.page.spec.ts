import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28005Page } from './s28005.page';

describe('S28005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28005Page;
  let fixture: ComponentFixture<S28005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
