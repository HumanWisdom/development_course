import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57053Page } from './s57053.page';

describe('S57053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57053Page;
  let fixture: ComponentFixture<S57053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
