import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132102Page } from './s132102.page';

describe('S132102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132102Page;
  let fixture: ComponentFixture<S132102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
