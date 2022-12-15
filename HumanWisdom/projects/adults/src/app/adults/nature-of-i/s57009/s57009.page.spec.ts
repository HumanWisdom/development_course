import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57009Page } from './s57009.page';

describe('S57009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57009Page;
  let fixture: ComponentFixture<S57009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
