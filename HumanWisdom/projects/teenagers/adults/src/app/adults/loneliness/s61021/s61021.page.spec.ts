import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61021Page } from './s61021.page';

describe('S61021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61021Page;
  let fixture: ComponentFixture<S61021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
