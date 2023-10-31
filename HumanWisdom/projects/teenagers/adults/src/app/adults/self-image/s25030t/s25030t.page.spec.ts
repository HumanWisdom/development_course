import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25030tPage } from './s25030t.page';

describe('S25030tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25030tPage;
  let fixture: ComponentFixture<S25030tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25030tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25030tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
