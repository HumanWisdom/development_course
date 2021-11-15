import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60006Page } from './s60006.page';

describe('S60006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60006Page;
  let fixture: ComponentFixture<S60006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
