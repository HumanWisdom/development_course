import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117061Page } from './s117061.page';

describe('S117061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117061Page;
  let fixture: ComponentFixture<S117061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
