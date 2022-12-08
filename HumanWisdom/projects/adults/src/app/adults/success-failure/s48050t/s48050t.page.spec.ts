import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48050tPage } from './s48050t.page';

describe('S48050tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48050tPage;
  let fixture: ComponentFixture<S48050tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48050tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48050tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
