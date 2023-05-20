import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117056Page } from './s117056.page';

describe('S117056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117056Page;
  let fixture: ComponentFixture<S117056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
