import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58068tPage } from './s58068t.page';

describe('S58068tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58068tPage;
  let fixture: ComponentFixture<S58068tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58068tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58068tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
