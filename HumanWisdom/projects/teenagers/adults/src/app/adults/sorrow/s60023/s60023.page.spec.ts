import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60023Page } from './s60023.page';

describe('S60023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60023Page;
  let fixture: ComponentFixture<S60023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
