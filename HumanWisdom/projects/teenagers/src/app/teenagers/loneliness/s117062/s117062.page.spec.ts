import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117062Page } from './s117062.page';

describe('S117062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117062Page;
  let fixture: ComponentFixture<S117062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
