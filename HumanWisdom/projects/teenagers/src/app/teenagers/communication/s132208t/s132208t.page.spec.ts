import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132208tPage } from './s132208t.page';

describe('S132208tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132208tPage;
  let fixture: ComponentFixture<S132208tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132208tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132208tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
