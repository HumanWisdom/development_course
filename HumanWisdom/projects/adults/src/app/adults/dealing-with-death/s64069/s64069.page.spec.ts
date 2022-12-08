import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64069Page } from './s64069.page';

describe('S64069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64069Page;
  let fixture: ComponentFixture<S64069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
