import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61104tPage } from './s61104t.page';

describe('S61104tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61104tPage;
  let fixture: ComponentFixture<S61104tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61104tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61104tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
