import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51006Page } from './s51006.page';

describe('S51006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51006Page;
  let fixture: ComponentFixture<S51006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
