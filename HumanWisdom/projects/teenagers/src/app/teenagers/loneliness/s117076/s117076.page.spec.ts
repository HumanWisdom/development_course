import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117076Page } from './s117076.page';

describe('S117076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117076Page;
  let fixture: ComponentFixture<S117076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
