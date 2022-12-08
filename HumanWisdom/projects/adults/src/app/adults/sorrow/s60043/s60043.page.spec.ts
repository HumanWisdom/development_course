import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60043Page } from './s60043.page';

describe('S60043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60043Page;
  let fixture: ComponentFixture<S60043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
