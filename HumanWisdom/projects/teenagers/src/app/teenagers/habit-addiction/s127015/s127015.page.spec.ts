import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S127015Page } from './s127015.page';

describe('S127015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S127015Page;
  let fixture: ComponentFixture<S127015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S127015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S127015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
