import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S54074tPage } from './s54074t.page';

describe('S54074tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54074tPage;
  let fixture: ComponentFixture<S54074tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54074tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54074tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
