import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57029Page } from './s57029.page';

describe('S57029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57029Page;
  let fixture: ComponentFixture<S57029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
