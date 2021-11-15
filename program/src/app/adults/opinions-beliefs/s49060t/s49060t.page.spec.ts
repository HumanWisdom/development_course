import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49060tPage } from './s49060t.page';

describe('S49060tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49060tPage;
  let fixture: ComponentFixture<S49060tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49060tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49060tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
