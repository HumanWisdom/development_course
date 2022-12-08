import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18076tPage } from './s18076t.page';

describe('S18076tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18076tPage;
  let fixture: ComponentFixture<S18076tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18076tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18076tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
