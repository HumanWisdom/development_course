import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134069tPage } from './s134069t.page';

describe('S134069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134069tPage;
  let fixture: ComponentFixture<S134069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
