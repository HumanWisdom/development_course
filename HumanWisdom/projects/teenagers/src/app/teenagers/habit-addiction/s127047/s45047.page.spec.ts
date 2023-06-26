import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45047Page } from './s45047.page';

describe('S45047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45047Page;
  let fixture: ComponentFixture<S45047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
