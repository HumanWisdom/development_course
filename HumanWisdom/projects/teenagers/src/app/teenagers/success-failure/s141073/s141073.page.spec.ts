import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141073Page } from './s141073.page';

describe('S141073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141073Page;
  let fixture: ComponentFixture<S141073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
