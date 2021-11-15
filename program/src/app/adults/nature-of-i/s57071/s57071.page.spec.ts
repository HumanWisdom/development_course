import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57071Page } from './s57071.page';

describe('S57071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57071Page;
  let fixture: ComponentFixture<S57071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
