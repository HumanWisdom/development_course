import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57038Page } from './s57038.page';

describe('S57038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57038Page;
  let fixture: ComponentFixture<S57038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
