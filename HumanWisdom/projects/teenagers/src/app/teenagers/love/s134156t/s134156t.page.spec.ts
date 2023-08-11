import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134156tPage } from './s134156t.page';

describe('S134156tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134156tPage;
  let fixture: ComponentFixture<S134156tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134156tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134156tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
