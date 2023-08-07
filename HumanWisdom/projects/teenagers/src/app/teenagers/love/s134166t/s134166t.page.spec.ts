import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134166tPage } from './s134166t.page';

describe('S134166tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134166tPage;
  let fixture: ComponentFixture<S134166tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134166tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134166tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
