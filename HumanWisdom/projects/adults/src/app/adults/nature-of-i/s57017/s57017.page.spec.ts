import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57017Page } from './s57017.page';

describe('S57017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57017Page;
  let fixture: ComponentFixture<S57017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
