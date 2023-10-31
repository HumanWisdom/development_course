import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18069Page } from './s18069.page';

describe('S18069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18069Page;
  let fixture: ComponentFixture<S18069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
