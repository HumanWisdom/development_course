import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132172tPage } from './s132172t.page';

describe('S132172tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132172tPage;
  let fixture: ComponentFixture<S132172tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132172tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132172tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
