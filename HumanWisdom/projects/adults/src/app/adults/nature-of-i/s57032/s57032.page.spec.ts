import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57032Page } from './s57032.page';

describe('S57032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57032Page;
  let fixture: ComponentFixture<S57032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
