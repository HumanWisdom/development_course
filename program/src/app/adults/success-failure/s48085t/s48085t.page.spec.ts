import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48085tPage } from './s48085t.page';

describe('S48085tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48085tPage;
  let fixture: ComponentFixture<S48085tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48085tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48085tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
