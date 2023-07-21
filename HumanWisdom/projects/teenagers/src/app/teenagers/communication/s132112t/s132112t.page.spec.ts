import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132112tPage } from './s132112t.page';

describe('S132112tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132112tPage;
  let fixture: ComponentFixture<S132112tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132112tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132112tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
