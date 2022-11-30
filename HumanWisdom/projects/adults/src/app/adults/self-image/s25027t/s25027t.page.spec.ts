import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25027tPage } from './s25027t.page';

describe('S25027tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25027tPage;
  let fixture: ComponentFixture<S25027tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25027tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25027tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
