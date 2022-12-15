import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48027tPage } from './s48027t.page';

describe('S48027tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48027tPage;
  let fixture: ComponentFixture<S48027tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48027tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48027tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
