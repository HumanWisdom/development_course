import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132231tPage } from './s132231t.page';

describe('S132231tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132231tPage;
  let fixture: ComponentFixture<S132231tPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132231tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132231tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
