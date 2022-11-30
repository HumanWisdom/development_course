import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57054Page } from './s57054.page';

describe('S57054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57054Page;
  let fixture: ComponentFixture<S57054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
