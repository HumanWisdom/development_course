import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132176Page } from './s132176.page';

describe('S132176Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132176Page;
  let fixture: ComponentFixture<S132176Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132176Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132176Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
