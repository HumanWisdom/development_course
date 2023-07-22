import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132114Page } from './s132114.page';

describe('S132114Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132114Page;
  let fixture: ComponentFixture<S132114Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132114Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132114Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
