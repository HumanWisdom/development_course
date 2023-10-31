import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49052tPage } from './s49052t.page';

describe('S49052tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49052tPage;
  let fixture: ComponentFixture<S49052tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49052tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49052tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
