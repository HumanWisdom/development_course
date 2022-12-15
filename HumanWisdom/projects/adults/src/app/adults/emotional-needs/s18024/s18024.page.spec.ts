import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18024Page } from './s18024.page';

describe('S18024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18024Page;
  let fixture: ComponentFixture<S18024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
