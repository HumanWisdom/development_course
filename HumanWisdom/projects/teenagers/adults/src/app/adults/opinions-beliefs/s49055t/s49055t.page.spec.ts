import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49055tPage } from './s49055t.page';

describe('S49055tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49055tPage;
  let fixture: ComponentFixture<S49055tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49055tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49055tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
