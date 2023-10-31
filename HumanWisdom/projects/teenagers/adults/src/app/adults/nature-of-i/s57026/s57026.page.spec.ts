import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57026Page } from './s57026.page';

describe('S57026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57026Page;
  let fixture: ComponentFixture<S57026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
