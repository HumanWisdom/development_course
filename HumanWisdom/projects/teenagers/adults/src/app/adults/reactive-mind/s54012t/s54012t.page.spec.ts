import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S54012tPage } from './s54012t.page';

describe('S54012tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54012tPage;
  let fixture: ComponentFixture<S54012tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54012tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54012tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
