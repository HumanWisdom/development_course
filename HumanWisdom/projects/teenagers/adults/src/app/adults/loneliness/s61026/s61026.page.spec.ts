import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61026Page } from './s61026.page';

describe('S61026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61026Page;
  let fixture: ComponentFixture<S61026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
