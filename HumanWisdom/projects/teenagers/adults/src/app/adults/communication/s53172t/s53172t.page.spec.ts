import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53172tPage } from './s53172t.page';

describe('S53172tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53172tPage;
  let fixture: ComponentFixture<S53172tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53172tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53172tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
