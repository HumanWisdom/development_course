import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61045tPage } from './s61045t.page';

describe('S61045tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61045tPage;
  let fixture: ComponentFixture<S61045tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61045tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61045tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
