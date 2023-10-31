import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61081Page } from './s61081.page';

describe('S61081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61081Page;
  let fixture: ComponentFixture<S61081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
