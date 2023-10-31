import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49094tPage } from './s49094t.page';

describe('S49094tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49094tPage;
  let fixture: ComponentFixture<S49094tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49094tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49094tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
