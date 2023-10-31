import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18050tPage } from './s18050t.page';

describe('S18050tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18050tPage;
  let fixture: ComponentFixture<S18050tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18050tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18050tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
