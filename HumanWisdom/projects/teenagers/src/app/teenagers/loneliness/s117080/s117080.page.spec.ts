import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117080Page } from './s117080.page';

describe('S117080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117080Page;
  let fixture: ComponentFixture<S117080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
