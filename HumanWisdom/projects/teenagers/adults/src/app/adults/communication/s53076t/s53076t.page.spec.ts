import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53076tPage } from './s53076t.page';

describe('S53076tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53076tPage;
  let fixture: ComponentFixture<S53076tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53076tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53076tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
