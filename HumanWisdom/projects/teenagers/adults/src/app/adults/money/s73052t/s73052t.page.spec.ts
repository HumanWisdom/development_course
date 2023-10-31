import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73052tPage } from './s73052t.page';

describe('S73052tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73052tPage;
  let fixture: ComponentFixture<S73052tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73052tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73052tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
