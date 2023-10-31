import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61090tPage } from './s61090t.page';

describe('S61090tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61090tPage;
  let fixture: ComponentFixture<S61090tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61090tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61090tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
