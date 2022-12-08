import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46003tPage } from './s46003t.page';

describe('S46003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46003tPage;
  let fixture: ComponentFixture<S46003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
