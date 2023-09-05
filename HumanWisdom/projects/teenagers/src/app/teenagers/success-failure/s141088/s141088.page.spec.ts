import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141088Page } from './s141088.page';

describe('S141088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141088Page;
  let fixture: ComponentFixture<S141088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
