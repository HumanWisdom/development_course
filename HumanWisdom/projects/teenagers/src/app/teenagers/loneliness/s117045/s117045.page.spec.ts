import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117045Page } from './s117045.page';

describe('S117045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117045Page;
  let fixture: ComponentFixture<S117045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
