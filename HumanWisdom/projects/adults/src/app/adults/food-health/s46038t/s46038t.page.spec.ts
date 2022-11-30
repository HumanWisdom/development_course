import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46038tPage } from './s46038t.page';

describe('S46038tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46038tPage;
  let fixture: ComponentFixture<S46038tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46038tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46038tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
