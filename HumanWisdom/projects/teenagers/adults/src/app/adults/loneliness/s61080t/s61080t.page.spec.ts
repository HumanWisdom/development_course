import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61080tPage } from './s61080t.page';

describe('S61080tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61080tPage;
  let fixture: ComponentFixture<S61080tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61080tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61080tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
