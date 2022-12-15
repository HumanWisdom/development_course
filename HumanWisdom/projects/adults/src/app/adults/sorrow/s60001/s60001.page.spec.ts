import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60001Page } from './s60001.page';

describe('S60001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60001Page;
  let fixture: ComponentFixture<S60001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
