import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61177Page } from './s61177.page';

describe('S61177Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61177Page;
  let fixture: ComponentFixture<S61177Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61177Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61177Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
