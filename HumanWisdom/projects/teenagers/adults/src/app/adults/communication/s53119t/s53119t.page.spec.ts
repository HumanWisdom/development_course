import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53119tPage } from './s53119t.page';

describe('S53119tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53119tPage;
  let fixture: ComponentFixture<S53119tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53119tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53119tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
