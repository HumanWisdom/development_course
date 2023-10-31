import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53161tPage } from './s53161t.page';

describe('S53161tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53161tPage;
  let fixture: ComponentFixture<S53161tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53161tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53161tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
