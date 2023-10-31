import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53154tPage } from './s53154t.page';

describe('S53154tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53154tPage;
  let fixture: ComponentFixture<S53154tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53154tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53154tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
