import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73066tPage } from './s73066t.page';

describe('S73066tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73066tPage;
  let fixture: ComponentFixture<S73066tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73066tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73066tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
