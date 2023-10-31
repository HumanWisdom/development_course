import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57033Page } from './s57033.page';

describe('S57033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57033Page;
  let fixture: ComponentFixture<S57033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
