import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61030tPage } from './s61030t.page';

describe('S61030tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61030tPage;
  let fixture: ComponentFixture<S61030tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61030tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61030tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
